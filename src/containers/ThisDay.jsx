import React, { useState } from 'react';
import EventList from '../components/EventList/EventList';

const ThisDay = () => {
  const [loading, setLoading] = useState(true); 
  const [events, setEvents] = useState([]);

  if(loading) return <h1 data-testid="loading">Loading...</h1>;
  return (
    <EventList events={events}/>
  );
};

export default ThisDay;
