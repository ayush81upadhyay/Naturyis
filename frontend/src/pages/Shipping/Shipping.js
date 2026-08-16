import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import './PolicyPage.css';

const Shipping = () => {
  return (
    <main className="policy-page">
      <div className="policy-page__hero section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Shipping & Delivery"
            title="We Deliver Fresh to Your Doorstep"
            subtitle="Naturyis ships across India. Here's everything you need to know about our delivery process."
          />
        </div>
      </div>

      <section className="section">
        <div className="container policy-page__content">

          <div className="policy-card">
            <span className="policy-card__icon">🚚</span>
            <h2>Delivery Timeframes</h2>
            <table className="policy-table">
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Estimated Delivery</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Maharashtra</td><td>2–3 Business Days</td></tr>
                <tr><td>Metro Cities (Delhi, Mumbai, Bangalore, Chennai)</td><td>3–4 Business Days</td></tr>
                <tr><td>Rest of India</td><td>4–6 Business Days</td></tr>
                <tr><td>Remote / Hill Areas</td><td>6–9 Business Days</td></tr>
              </tbody>
            </table>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">💰</span>
            <h2>Shipping Charges</h2>
            <ul className="policy-list">
              <li>✅ <strong>Free Delivery</strong> on all orders above ₹500 — automatically applied at checkout.</li>
              <li>📦 Orders below ₹500 attract a flat shipping fee of <strong>₹60</strong>.</li>
              <li>🎁 Bulk / event orders may have custom shipping rates — contact us for a quote.</li>
            </ul>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">📦</span>
            <h2>Order Processing</h2>
            <ul className="policy-list">
              <li>All orders are processed within <strong>1–2 business days</strong> of payment confirmation.</li>
              <li>Orders placed on weekends or public holidays are processed the next working day.</li>
              <li>You will receive a <strong>dispatch confirmation email</strong> with your tracking link once your order ships.</li>
            </ul>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">📍</span>
            <h2>Shipping Partners</h2>
            <p>We ship via trusted courier partners including Delhivery, Shiprocket, and India Post to ensure safe and timely delivery of your Naturyis jaggery products.</p>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">⚠️</span>
            <h2>Important Notes</h2>
            <ul className="policy-list">
              <li>Delivery timelines may be affected during festivals, public holidays, or natural calamities.</li>
              <li>Please ensure your delivery address and PIN code are correct at checkout. Naturyis is not responsible for delays due to incorrect address information.</li>
              <li>If your package is damaged in transit, please photograph it and contact us within <strong>48 hours</strong> of delivery.</li>
            </ul>
          </div>

          <div className="policy-card policy-card--cta">
            <h3>Have a shipping query?</h3>
            <p>Reach us at <a href="mailto:naturyis@gmail.com">naturyis@gmail.com</a> or WhatsApp us at +91 9359635951</p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Shipping;
