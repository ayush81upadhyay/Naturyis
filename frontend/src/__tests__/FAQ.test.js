import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import FAQ from '../components/FAQ/FAQ';

const renderFAQ = () =>
  render(
    <MemoryRouter>
      <FAQ />
    </MemoryRouter>
  );

describe('FAQ Component', () => {
  test('renders the FAQ section heading', () => {
    renderFAQ();
    expect(screen.getByText(/frequently asked questions/i)).toBeInTheDocument();
  });

  test('renders all FAQ questions', () => {
    renderFAQ();
    expect(screen.getByText(/is naturyis jaggery powder completely chemical-free/i)).toBeInTheDocument();
    expect(screen.getByText(/suitable for fasting/i)).toBeInTheDocument();
    const shelfLifeItems = screen.getAllByText(/shelf life/i);
    expect(shelfLifeItems.length).toBeGreaterThan(0);
  });

  test('FAQ answers are hidden by default', () => {
    renderFAQ();
    const buttons = screen.getAllByRole('button');
    buttons.forEach((btn) => {
      expect(btn).toHaveAttribute('aria-expanded', 'false');
    });
  });

  test('opens FAQ answer on button click', () => {
    renderFAQ();
    const firstButton = screen.getAllByRole('button')[0];
    fireEvent.click(firstButton);
    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
  });

  test('closes FAQ when same button is clicked again', () => {
    renderFAQ();
    const firstButton = screen.getAllByRole('button')[0];
    fireEvent.click(firstButton);
    fireEvent.click(firstButton);
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('only one FAQ item open at a time', () => {
    renderFAQ();
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'true');
  });

  test('renders the eyebrow text', () => {
    renderFAQ();
    expect(screen.getByText(/got questions/i)).toBeInTheDocument();
  });
});
