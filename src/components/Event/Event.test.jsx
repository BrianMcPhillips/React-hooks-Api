import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Event from './Event';

describe('Event component', () => {
  afterEach(() => cleanup());
  it('renders Event', () => {
    const { asFragment } = render(
      <Event 
        text="Best event"
        year="2022"
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
