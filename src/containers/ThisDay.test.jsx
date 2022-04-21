import React from 'react';
import { render, screen } from '@testing-library/react';
import ThisDay from './ThisDay';

describe('ThisDay container', () => {
  it('displays loading screen on load', () => {
    render(<ThisDay />);

    const loading = screen.getByTestId('loading');

    expect(loading).toHaveTextContent('Loading...');
  });
});
