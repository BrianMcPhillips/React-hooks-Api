import React from 'react';
import { render, screen, findByTestId } from '@testing-library/react';
import ThisDay from './ThisDay';
import { getThisDay } from '../services/thisDay-api';

jest.mock('../services/thisDay-api.js');

describe('ThisDay container', () => {
  it('displays loading screen on load', () => {
    getThisDay.mockResolvedValue([
      {
        'year': '1092',
        'text': 'The Diocese of Pisa is elevated to the rank of metropolitan archdiocese by Pope Urban II'
      },
      {
        'year': '1506',
        'text': 'The three-day Lisbon Massacre comes to an end with the slaughter of over 1,900 suspected Jews by Portuguese Catholics.'
      }
    ]);
    render(<ThisDay />);

    const loading = screen.getByTestId('loading');

    expect(loading).toHaveTextContent('Loading...');
  });

  it('displays a list of events', async() => {
    getThisDay.mockResolvedValue([
      {
        'year': '1092',
        'text': 'The Diocese of Pisa is elevated to the rank of metropolitan archdiocese by Pope Urban II'
      },
      {
        'year': '1506',
        'text': 'The three-day Lisbon Massacre comes to an end with the slaughter of over 1,900 suspected Jews by Portuguese Catholics.'
      }
    ]);
    render(<ThisDay />);

    const eventList = await screen.findByTestId('events');
  });
});
