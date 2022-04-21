import React, { useEffect, useState } from 'react';
import EventList from '../components/EventList/EventList';
import { getThisDay } from '../services/thisDay-api';

const ThisDay = () => {
  const [loading, setLoading] = useState(true); 
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getThisDay()
      .then(events => setEvents(events))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1 data-testid="loading">Loading...</h1>;
  return (
    <EventList events={events}/>
  );
};

export default ThisDay;
