import React, { useEffect, useState } from 'react';
import eventsData from '../data/events.json';
import EventList from '../components/EventList';
import Pagination from '../components/Pagination';

function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      setEvents(eventsData);
      setLoading(false);
    }, 1000);
  }, []);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <EventList events={currentEvents} />
          <Pagination
            totalEvents={events.length}
            eventsPerPage={eventsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}

export default Home;
