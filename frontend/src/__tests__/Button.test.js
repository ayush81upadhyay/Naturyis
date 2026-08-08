import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Button from '../components/Button/Button';

describe('Button Component', () => {
  test('renders with children text', () => {
    render(<Button>Shop Now</Button>);
    expect(screen.getByText('Shop Now')).toBeInTheDocument();
  });

  test('renders as a button by default', () => {
    render(<Button>Click Me</Button>);
    const btn = screen.getByRole('button', { name: /click me/i });
    expect(btn).toBeInTheDocument();
  });

  test('renders as an anchor when href is provided', () => {
    render(<MemoryRouter><Button href="/products">Shop</Button></MemoryRouter>);
    const link = screen.getByRole('link', { name: /shop/i });
    expect(link).toHaveAttribute('href', '/products');
  });

  test('applies the correct primary variant class', () => {
    render(<Button variant="primary">Primary</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('btn--primary');
  });

  test('applies the correct secondary variant class', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('btn--secondary');
  });

  test('applies the correct size class', () => {
    render(<Button size="lg">Large</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('btn--lg');
  });

  test('applies full width class when fullWidth is true', () => {
    render(<Button fullWidth>Full Width</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('btn--full');
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies additional className', () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });
});
