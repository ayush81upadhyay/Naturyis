import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Contact from '../pages/Contact/Contact';

const renderContact = () =>
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );

describe('Contact Page', () => {
  test('renders the Contact page heading', () => {
    renderContact();
    expect(screen.getByText(/we'd love to hear from you/i)).toBeInTheDocument();
  });

  test('renders the contact form fields', () => {
    renderContact();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
  });

  test('renders all form fields', () => {
    renderContact();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  test('renders the send message button', () => {
    renderContact();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  test('shows validation errors when form submitted empty', () => {
    renderContact();
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });

  test('shows email validation error for invalid email', () => {
    renderContact();
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'invalidemail' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Test message' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  });

  test('shows success message on valid form submission', () => {
    renderContact();
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'This is a test message.' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    expect(screen.getByText(/message sent/i)).toBeInTheDocument();
  });

  test('allows sending another message after success', () => {
    renderContact();
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'User' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'u@e.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hi' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    fireEvent.click(screen.getByRole('button', { name: /send another message/i }));
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });
});
