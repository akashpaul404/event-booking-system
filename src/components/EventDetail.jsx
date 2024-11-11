// src/pages/EventDetail.js

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import eventsData from "../data/events.json";
import "../css/eventdetails.css";
import { toast } from "react-toastify";

function EventDetail() {
  const { id } = useParams();
  const event = eventsData.find((e) => e.id === parseInt(id));
  const [availableSeats, setAvailableSeats] = useState(event.availableSeats);

  const handleBooking = () => {
    if (availableSeats > 0) {
      setAvailableSeats(availableSeats - 1);
      toast.success("Ticket booked successfully!");
    }
  };

  return (
    <div className="event-detail">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Category: {event.category}</p>
      <p>Date: {event.date}</p>
      <p>Seats available: {availableSeats}</p>
      <p>Price: ₹{event.price}</p>
      <button
        onClick={handleBooking}
        disabled={availableSeats === 0}
        className="book-button"
      >
        {availableSeats > 0 ? "Book Ticket" : "Fully Booked"}
      </button>
    </div>
  );
}

export default EventDetail;
