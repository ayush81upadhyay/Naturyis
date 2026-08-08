import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Products from '../pages/Products/Products';

const renderProducts = () =>
  render(
    <MemoryRouter>
      <Products />
    </MemoryRouter>
  );

describe('Products Page', () => {
  test('renders the page heading', () => {
    renderProducts();
    expect(screen.getByText(/shop naturyis jaggery/i)).toBeInTheDocument();
  });

  test('renders all products by default', () => {
    renderProducts();
    const addToCartButtons = screen.getAllByRole('button', { name: /add to cart/i });
    expect(addToCartButtons.length).toBe(3);
  });

  test('renders the All filter button', () => {
    renderProducts();
    expect(screen.getByRole('button', { name: /^all$/i })).toBeInTheDocument();
  });

  test('renders all filter buttons', () => {
    renderProducts();
    expect(screen.getByRole('button', { name: /chemical-free/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /fasting safe/i })).toBeInTheDocument();
  });

  test('filters products by tag', () => {
    renderProducts();
    fireEvent.click(screen.getByRole('button', { name: /daily use/i }));
    const addToCartButtons = screen.getAllByRole('button', { name: /add to cart/i });
    expect(addToCartButtons.length).toBe(1);
  });

  test('shows all products when All filter is clicked', () => {
    renderProducts();
    fireEvent.click(screen.getByRole('button', { name: /fasting safe/i }));
    fireEvent.click(screen.getByRole('button', { name: /^all$/i }));
    const addToCartButtons = screen.getAllByRole('button', { name: /add to cart/i });
    expect(addToCartButtons.length).toBe(3);
  });

  test('renders promise strip with key claims', () => {
    renderProducts();
    const noPreservatives = screen.getAllByText(/no preservatives/i);
    expect(noPreservatives.length).toBeGreaterThan(0);
    const fssai = screen.getAllByText(/fssai licensed/i);
    expect(fssai.length).toBeGreaterThan(0);
  });
});
