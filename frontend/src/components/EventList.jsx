import React from "react";

function EventList({ events }) {
  return (
    <div className="list">
      <h2>Event List</h2>
      <ul>
        {events.length > 0 ? (
          events.map((event, index) => (
            <li key={index}>
              {event.name} - {event.date}
            </li>
          ))
        ) : (
          <li>No events added yet.</li>
        )}
      </ul>
    </div>
  );
}

export default EventList;
