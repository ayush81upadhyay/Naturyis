import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import ProductCard from '../components/ProductCard/ProductCard';

const mockProduct = {
  id: 1,
  name: 'Naturyis Jaggery Powder',
  subtitle: 'Premium Chemical-Free',
  description: 'Pure, unrefined jaggery powder.',
  weight: '500g',
  price: 199,
  originalPrice: 249,
  image: '/assets/images/JaggeryPouch.png',
  badge: 'Bestseller',
  tags: ['Chemical-Free', 'Fasting Safe'],
};

const renderCard = (product = mockProduct) =>
  render(
    <MemoryRouter>
      <ProductCard product={product} />
    </MemoryRouter>
  );

describe('ProductCard Component', () => {
  test('renders the product name', () => {
    renderCard();
    expect(screen.getByText('Naturyis Jaggery Powder')).toBeInTheDocument();
  });

  test('renders the product subtitle', () => {
    renderCard();
    expect(screen.getByText('Premium Chemical-Free')).toBeInTheDocument();
  });

  test('renders the product weight', () => {
    renderCard();
    expect(screen.getByText('500g')).toBeInTheDocument();
  });

  test('renders the price', () => {
    renderCard();
    expect(screen.getByText('₹199')).toBeInTheDocument();
  });

  test('renders the original price with strikethrough', () => {
    renderCard();
    expect(screen.getByText('₹249')).toBeInTheDocument();
  });

  test('renders the badge', () => {
    renderCard();
    expect(screen.getByText('Bestseller')).toBeInTheDocument();
  });

  test('renders all tags', () => {
    renderCard();
    expect(screen.getByText('Chemical-Free')).toBeInTheDocument();
    expect(screen.getByText('Fasting Safe')).toBeInTheDocument();
  });

  test('renders the product description', () => {
    renderCard();
    expect(screen.getByText('Pure, unrefined jaggery powder.')).toBeInTheDocument();
  });

  test('renders the product image with alt text', () => {
    renderCard();
    expect(screen.getByAltText('Naturyis Jaggery Powder - 500g')).toBeInTheDocument();
  });

  test('renders Add to Cart button', () => {
    renderCard();
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });

  test('calculates and shows discount percentage', () => {
    renderCard();
    expect(screen.getByText(/-20%/i)).toBeInTheDocument();
  });

  test('renders as article element', () => {
    const { container } = renderCard();
    expect(container.querySelector('article')).toBeInTheDocument();
  });
});
