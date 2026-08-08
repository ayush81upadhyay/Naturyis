import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Footer from '../components/Footer/Footer';

jest.mock('../assets/images/logoCircle.png', () => 'logo-circle.png');
jest.mock('../assets/images/InstaLogo.png', () => 'insta-logo.png');
jest.mock('../assets/images/FbLogo.png', () => 'fb-logo.png');

const renderFooter = () =>
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

describe('Footer Component', () => {
  test('renders Naturyis brand name', () => {
    renderFooter();
    expect(screen.getByText('Naturyis')).toBeInTheDocument();
  });

  test('renders the tagline', () => {
    renderFooter();
    expect(screen.getByText('Pure. Natural. Jaggery.')).toBeInTheDocument();
  });

  test('renders footer navigation links', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  test('renders social media links', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument();
  });

  test('renders FSSAI badge', () => {
    renderFooter();
    expect(screen.getByText(/fssai licensed/i)).toBeInTheDocument();
  });

  test('renders copyright notice', () => {
    renderFooter();
    const copyright = document.querySelector('.footer__copyright');
    expect(copyright).toBeInTheDocument();
    expect(copyright.textContent).toMatch(/naturyis/i);
  });

  test('renders contentinfo landmark', () => {
    renderFooter();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders Made with love text', () => {
    renderFooter();
    expect(screen.getByText(/made with/i)).toBeInTheDocument();
  });

  test('renders the description paragraph', () => {
    renderFooter();
    const elements = screen.getAllByText(/no preservatives/i);
    expect(elements.length).toBeGreaterThan(0);
  });
});
