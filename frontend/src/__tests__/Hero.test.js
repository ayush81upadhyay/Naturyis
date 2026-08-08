import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Hero from '../components/Hero/Hero';

jest.mock('../assets/images/HomePageImage.png', () => 'home-page-image.png');

const renderHero = () =>
  render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );

describe('Hero Component', () => {
  test('renders the main headline', () => {
    renderHero();
    expect(screen.getByText(/pure jaggery/i)).toBeInTheDocument();
  });

  test('renders the hero subtitle', () => {
    renderHero();
    expect(screen.getByText(/premium unrefined jaggery powder/i)).toBeInTheDocument();
  });

  test('renders Shop Now button', () => {
    renderHero();
    const shopLinks = screen.getAllByRole('link', { name: /shop now/i });
    expect(shopLinks.length).toBeGreaterThan(0);
  });

  test('renders Our Story button', () => {
    renderHero();
    expect(screen.getByRole('link', { name: /our story/i })).toBeInTheDocument();
  });

  test('renders hero image with alt text', () => {
    renderHero();
    expect(screen.getByAltText(/naturyis premium jaggery/i)).toBeInTheDocument();
  });

  test('renders No Preservatives badge', () => {
    renderHero();
    const elements = screen.getAllByText(/no preservatives/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  test('renders 100% Natural badge', () => {
    renderHero();
    const elements = screen.getAllByText(/100% natural/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  test('renders Fasting Safe badge', () => {
    renderHero();
    const elements = screen.getAllByText(/fasting safe/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  test('renders free delivery info', () => {
    renderHero();
    const elements = screen.getAllByText(/free delivery/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  test('renders the hero section landmark', () => {
    renderHero();
    expect(screen.getByRole('region', { name: /hero section/i })).toBeInTheDocument();
  });
});
