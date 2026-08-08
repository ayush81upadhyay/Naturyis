import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar/Navbar';

// Mock logo import
jest.mock('../assets/images/logoCircle.png', () => 'logo-circle.png');

const renderNavbar = () =>
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

describe('Navbar Component', () => {
  test('renders the Naturyis logo text', () => {
    renderNavbar();
    expect(screen.getByText('Naturyis')).toBeInTheDocument();
  });

  test('renders the logo image with correct alt text', () => {
    renderNavbar();
    expect(screen.getByAltText('Naturyis Logo')).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    renderNavbar();
    const homeLinks = screen.getAllByRole('link', { name: /home/i });
    expect(homeLinks.length).toBeGreaterThan(0);
    const shopLinks = screen.getAllByRole('link', { name: /shop/i });
    expect(shopLinks.length).toBeGreaterThan(0);
    const aboutLinks = screen.getAllByRole('link', { name: /about/i });
    expect(aboutLinks.length).toBeGreaterThan(0);
    const blogLinks = screen.getAllByRole('link', { name: /blog/i });
    expect(blogLinks.length).toBeGreaterThan(0);
    const contactLinks = screen.getAllByRole('link', { name: /contact/i });
    expect(contactLinks.length).toBeGreaterThan(0);
  });

  test('renders the Shop Now CTA button', () => {
    renderNavbar();
    const shopLinks = screen.getAllByRole('link', { name: /shop now/i });
    expect(shopLinks.length).toBeGreaterThan(0);
  });

  test('renders the hamburger menu button', () => {
    renderNavbar();
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument();
  });

  test('hamburger has aria-expanded false by default', () => {
    renderNavbar();
    const hamburger = screen.getByRole('button', { name: /toggle menu/i });
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });

  test('has accessible landmark role', () => {
    renderNavbar();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('nav has accessible label', () => {
    renderNavbar();
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  });
});
