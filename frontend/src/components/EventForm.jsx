import React, { useState } from "react";
import "./EventForm.css";  // Ensure this import points to the correct CSS file

const EventForm = () => {
  const [eventData, setEventData] = useState({
    eventName: "",
    venue: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>Request Event</h2>
      <input
        type="text"
        name="eventName"
        placeholder="Event Name"
        value={eventData.eventName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="venue"
        placeholder="Venue"
        value={eventData.venue}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={eventData.date}
        onChange={handleChange}
      />
      <input
        type="time"
        name="time"
        value={eventData.time}
        onChange={handleChange}
      />
      <button className="btn-primary" type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
