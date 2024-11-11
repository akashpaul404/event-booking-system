import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import eventsData from '../data/events.json';
import EventDetail from '../components/EventDetail';

function Event() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = eventsData.find(event => event.id === parseInt(id));
    if (foundEvent) setEvent(foundEvent);
    else navigate('/');
  }, [id, navigate]);

  const handleBooking = () => {
    setEvent(prev => ({ ...prev, availableSeats: prev.availableSeats - 1 }));
  };

  return event ? <EventDetail event={event} onBook={handleBooking} /> : <p>Event not found</p>;
}

export default Event;
