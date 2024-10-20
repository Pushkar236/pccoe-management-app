import React, { useState } from 'react';
import { v4 } from 'uuid'; // Updated import
import './EventForm.css'; // Styles for Event Form

const EventForm = () => {
  const [events, setEvents] = useState([]); // To store the added events
  const [eventData, setEventData] = useState({
    eventName: '',
    eventDate: '',
    venue: '',
    description: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form field change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventData.eventName && eventData.eventDate && eventData.venue && eventData.description) {
      // Add new event with unique ID
      const newEvent = { ...eventData, id: v4() };
      setEvents([...events, newEvent]);
      setEventData({
        eventName: '',
        eventDate: '',
        venue: '',
        description: '',
      }); // Reset form after submission

      // Set success message
      setSuccessMessage('Event added successfully!');
      setTimeout(() => setSuccessMessage(''), 3000); // Hide message after 3 seconds
    }
  };

  return (
    <div className="event-form-container">
      {/* Form Section */}
      <div className="form-section">
        <h2>Add Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="eventName">Event Name:</label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={eventData.eventName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventDate">Event Date:</label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={eventData.eventDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="venue">Venue:</label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={eventData.venue}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={eventData.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Add Event</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>

      {/* Events List Section */}
      <div className="events-list">
        <h2>Added Events</h2>
        {events.length === 0 ? (
          <p>No events added yet.</p>
        ) : (
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                <strong>{event.eventName}</strong> - {event.eventDate} @ {event.venue}
                <p>{event.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EventForm;
