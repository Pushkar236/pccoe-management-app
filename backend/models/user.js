const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    prnNum:{
        type: String,
        unique: true,
        required: true,
    },  
    password: {
        type: String,
        required: true,
    },
    designation:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("User", UserSchema);
