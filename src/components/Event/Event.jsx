import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ year, text }) => (
  <>
    <h3>{year}</h3>
    <p>{text}</p>
  </>
);

Event.propTypes = {
  year: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Event;
