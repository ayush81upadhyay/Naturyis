import React from 'react';
import Hero from '../../components/Hero';
import WhyChooseUs from '../../components/WhyChooseUs';
import BulkOrder from '../../components/BulkOrder';
import FAQ from '../../components/FAQ';
import SectionHeader from '../../components/SectionHeader';
import ProductCard from '../../components/ProductCard';
import TestimonialCard from '../../components/TestimonialCard';
import Button from '../../components/Button';
import { PRODUCTS, TESTIMONIALS } from '../../constants';
import bgImage from '../../assets/images/BgImage.png';
import './Home.css';

const Home = () => {
  return (
    <main>
      <Hero />

      {/* Products Preview */}
      <section className="section" aria-labelledby="products-preview-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Our Range"
            title="The Naturyis Collection"
            subtitle="Pure, unrefined, and chemical-free — every product is crafted with care and tested for quality."
            id="products-preview-heading"
          />
          <div className="home__products-grid">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="home__products-cta">
            <Button variant="secondary" size="lg" href="/products">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <section className="section" aria-labelledby="testimonials-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Customer Love"
            title="What India is Saying"
            subtitle="Real reviews from real families who've made Naturyis a part of their daily life."
            id="testimonials-heading"
          />
          <div className="home__testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="home__stats-banner section-alt" aria-label="Company statistics">
        <div className="container home__stats-grid">
          <div className="home__stat">
            <strong>1000+</strong>
            <p>Happy Customers</p>
          </div>
          <div className="home__stat">
            <strong>100%</strong>
            <p>Chemical-Free</p>
          </div>
          <div className="home__stat">
            <strong>FSSAI</strong>
            <p>Certified & Licensed</p>
          </div>
          <div className="home__stat">
            <strong>Pan India</strong>
            <p>Delivery Available</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="home__cta-banner"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-label="Call to action"
      >
        <div className="home__cta-overlay">
          <div className="container home__cta-content">
            <span className="home__cta-eyebrow">Limited Offer</span>
            <h2 className="home__cta-title">Free Delivery on Orders Above ₹500</h2>
            <p className="home__cta-subtitle">Auto-applied at checkout. Ships across India.</p>
            <Button variant="accent" size="lg" href="/products">
              Shop Now & Save
            </Button>
          </div>
        </div>
      </section>

      {/* Bulk Orders */}
      <BulkOrder />

      {/* FAQ */}
      <FAQ />
    </main>
  );
};

export default Home;
