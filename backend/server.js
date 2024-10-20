const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { configDotenv } = require("dotenv");
const app = express();
const mongoose = require("mongoose");

configDotenv();

const User = require("./models/user");
const Event = require("./models/event");
app.use(cors());
app.use(express.json());

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to the database");
};

connectDB();

app.post("/register", async (req, res) => {
  try {
    const { email, userName, prnNum, password, designation } =
      req.body.userData;
    const isUserExisting = await User.findOne({ userName });
    if (isUserExisting) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username: userName,
      email,
      prnNum,
      designation,
      password: hashedPassword,
    });
    await user.save();
    const token = jwt.sign(
      { id: user._id, userName: user.userName },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.status(200).json({ message: "User registered successfully", token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) {
      console.log(err);
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      console.log(error);
      return res.status(400).json({ message: "Invalid username or password" });
    }
    //creates a token with parameters provided by the user
    const token = jwt.sign(
      { id: user._id, username: user.userName },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.status(200).json({ message: "User logged in successfully", token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error" });
  }
});

const jwtMiddleware = async (req, res, next) => {
  //splits the header with space as parameter, maps it to an array and then takes the string at 1st index
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    console.log(err);
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const userDecoded = jwt.verify(token, process.env.JWT_SECRET);
    req.User = userDecoded;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Invalid Token" });
  }
};

app.post("/create-event", jwtMiddleware, async (req, res) => {
  try {
    const { eventName, eventDate, venue } = req.body;

    // Assuming you have an Event model for saving event data
    const event = new Event({
      eventName,
      eventDate,
      venue,
    });

    await event.save();
    res.status(200).json({ message: "Event created successfully", event });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Error creating event" });
  }
});

app.listen(4000, () => {
  console.log("Connected to the server");
});
