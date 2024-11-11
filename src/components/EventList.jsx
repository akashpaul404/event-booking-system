// src/components/EventList.js

import React, { useState } from 'react';
import EventItem from './EventItem';
import '../css/eventlist.css';

function EventList({ events }) {
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events
    .filter(event => (category ? event.category === category : true))
    .filter(event => event.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <input
        placeholder="Search by title"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <select onChange={e => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="Technology">Technology</option>
        <option value="Music">Music</option>
      </select>
      {filteredEvents.map(event => (
        <EventItem key={event.id} event={event} />
      ))}
    </>
  );
}

export default EventList;
