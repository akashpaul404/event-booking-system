// src/components/EventItem.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/eventitem.css';

function EventItem({ event }) {
  return (
    <div className="event-item">
      <div className="event-info">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <p>Category: {event.category}</p>
        <p>Date: {event.date}</p>
        <p>Seats available: {event.availableSeats}</p>
        <p>Price: ₹{event.price}</p>
      </div>
      <div className="event-actions">
        <Link to={`/event/${event.id}`}>View Details</Link>
      </div>
    </div>
  );
}

export default EventItem;
