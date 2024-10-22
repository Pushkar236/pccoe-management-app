import React, { useEffect, useState } from 'react';
import './EventList.css'; // Include the event list CSS

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulate fetching events from the server
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:4000/events");
      const data = await response.json();
      setEvents(data.events);
    };
    fetchEvents();
  }, []);

  return (
    <div className="event-list-container">
      <h2>Event List</h2>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id} className="event-item">
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Description:</strong> {event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
