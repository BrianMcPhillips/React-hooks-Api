import React from 'react';
import PropTypes from 'prop-types';
import Event from '../Event/Event';

const EventList = ({ events }) => {
  const eventStuff = events.map(event => (
    <li key={`${event.year} - ${event.text}`}>
      <Event {...event}/>
    </li>
  ));

  return (
    <ul data-testid="events">
      {eventStuff}
    </ul>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired
};

export default EventList;
