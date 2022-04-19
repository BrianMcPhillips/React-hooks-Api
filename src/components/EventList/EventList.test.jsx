import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EventList from './EventList';

describe('EventList component', () => {
  afterEach(() => cleanup());
  it('renders EventList', () => {
    const { asFragment } = render(
      <EventList 
        events={[
          {
            text:'Best event',
            year:'2022'
          },
          {
            text:'Second best event',
            year:'2024'
          }
        ]}
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
