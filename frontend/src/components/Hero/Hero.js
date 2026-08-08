import React from 'react';
import Button from '../Button';
import heroImage from '../../assets/images/HomePageImage.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="container hero__inner">
        {/* Left Content */}
        <div className="hero__content">
          <span className="hero__eyebrow">✦ Chemical-Free · FSSAI Licensed · Ships Across India</span>
          <h1 className="hero__title">
            Pure Jaggery,<br />
            <span className="hero__title-accent">The Way Nature</span><br />
            Intended It.
          </h1>
          <p className="hero__subtitle">
            Premium unrefined jaggery powder from traditional farms.
            No chemicals, no preservatives — just wholesome sweetness for your family.
          </p>

          <div className="hero__badges">
            <span className="hero__badge">🚫 No Preservatives</span>
            <span className="hero__badge">🌿 100% Natural</span>
            <span className="hero__badge">🪔 Fasting Safe</span>
          </div>

          <div className="hero__actions">
            <Button variant="primary" size="lg" href="/products">
              Shop Now
            </Button>
            <Button variant="secondary" size="lg" href="/about">
              Our Story
            </Button>
          </div>

          <div className="hero__delivery">
            <span>🚚</span>
            <span>Free delivery on orders above ₹500 · Pan India shipping</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero__image-wrap">
          <div className="hero__image-bg"></div>
          <img
            src={heroImage}
            alt="Naturyis Premium Jaggery Powder"
            className="hero__image"
          />
          <div className="hero__floating-card hero__floating-card--top">
            <span className="hero__floating-icon">⭐</span>
            <div>
              <strong>4.9 / 5</strong>
              <p>1000+ Happy Customers</p>
            </div>
          </div>
          <div className="hero__floating-card hero__floating-card--bottom">
            <span className="hero__floating-icon">✅</span>
            <div>
              <strong>FSSAI Certified</strong>
              <p>Quality Tested Every Batch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker Strip */}
      <div className="hero__ticker" aria-hidden="true">
        <div className="hero__ticker-track">
          {[...Array(3)].flatMap(() => [
            '✦ NO PRESERVATIVES',
            '✦ NO ARTIFICIAL COLOURS',
            '✦ 100% NATURAL JAGGERY',
            '✦ FSSAI LICENSED',
            '✦ CHEMICAL-FREE',
            '✦ FASTING SAFE',
            '✦ FREE DELIVERY ABOVE ₹500',
            '✦ PAN INDIA SHIPPING',
          ]).map((item, i) => (
            <span key={i} className="hero__ticker-item">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
