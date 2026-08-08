import React, { useState } from 'react';
import SectionHeader from '../../components/SectionHeader';
import ProductCard from '../../components/ProductCard';
import { PRODUCTS } from '../../constants';
import './Products.css';

const ALL_TAGS = ['All', 'Chemical-Free', 'Fasting Safe', 'No Preservatives', 'Daily Use', 'Traditional Recipe', 'Iron-Rich'];

const Products = () => {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.tags.includes(activeTag));

  return (
    <main className="products-page">
      <div className="products-page__hero section-alt">
        <div className="container products-page__hero-inner">
          <SectionHeader
            eyebrow="Our Products"
            title="Shop Naturyis Jaggery"
            subtitle="Pure, chemical-free jaggery products for every household need."
          />
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className="products-page__filters" role="group" aria-label="Filter products">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                className={`products-page__filter-btn ${activeTag === tag ? 'products-page__filter-btn--active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="products-page__grid">
            {filtered.length > 0 ? (
              filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="products-page__empty">No products found for this filter.</p>
            )}
          </div>

          {/* Promise strip */}
          <div className="products-page__promise">
            <span>🚫 No Preservatives</span>
            <span>🌿 100% Natural</span>
            <span>✅ FSSAI Licensed</span>
            <span>🚚 Free Delivery Above ₹500</span>
            <span>🔄 Easy Returns</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
