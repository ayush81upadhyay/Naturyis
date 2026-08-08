import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders the Naturyis navbar', async () => {
  render(<App />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
});

test('renders the footer', () => {
  render(<App />);
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});

test('renders Naturyis brand name in navbar', () => {
  render(<App />);
  const brandNames = screen.getAllByText('Naturyis');
  expect(brandNames.length).toBeGreaterThan(0);
});
