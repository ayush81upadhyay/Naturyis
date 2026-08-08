import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import './PolicyPage.css';

const Privacy = () => {
  return (
    <main className="policy-page">
      <div className="policy-page__hero section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Privacy Policy"
            title="Your Privacy Matters to Us"
            subtitle="We are committed to protecting your personal information. Last updated: August 2026."
          />
        </div>
      </div>

      <section className="section">
        <div className="container policy-page__content">

          <div className="policy-card">
            <span className="policy-card__icon">📋</span>
            <h2>Information We Collect</h2>
            <p>When you use our website or place an order, we may collect:</p>
            <ul className="policy-list">
              <li><strong>Personal details:</strong> Name, email address, phone number, delivery address.</li>
              <li><strong>Payment information:</strong> We do not store card/UPI details. All payments are processed via secure third-party payment gateways.</li>
              <li><strong>Usage data:</strong> Pages visited, browser type, IP address, and device information for improving our website experience.</li>
              <li><strong>Communications:</strong> Messages you send us via email, WhatsApp, or our contact form.</li>
            </ul>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">🎯</span>
            <h2>How We Use Your Information</h2>
            <ul className="policy-list">
              <li>To process and deliver your orders.</li>
              <li>To send order confirmations, tracking updates, and delivery notifications.</li>
              <li>To respond to your queries and provide customer support.</li>
              <li>To send you product updates, offers, and newsletters — only if you've opted in.</li>
              <li>To improve our website, products, and services based on usage patterns.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">🔒</span>
            <h2>How We Protect Your Data</h2>
            <ul className="policy-list">
              <li>Your data is stored on secure servers with encryption.</li>
              <li>We do not sell, rent, or trade your personal information to third parties.</li>
              <li>Payment processing is handled by PCI-DSS compliant payment gateways.</li>
              <li>Access to your personal data is restricted to authorised Naturyis team members only.</li>
            </ul>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">🤝</span>
            <h2>Third-Party Sharing</h2>
            <p>We may share your information with:</p>
            <ul className="policy-list">
              <li><strong>Delivery partners</strong> (e.g., Delhivery, Shiprocket) — to fulfil your order.</li>
              <li><strong>Payment gateways</strong> — to process transactions securely.</li>
              <li><strong>Analytics tools</strong> — to understand website usage (data is anonymised).</li>
            </ul>
            <p>We do not share your data with advertisers or unrelated third parties.</p>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">🍪</span>
            <h2>Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience. Cookies help us remember your preferences and understand how visitors use our site. You can disable cookies in your browser settings, though some features may not function correctly.</p>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">⚖️</span>
            <h2>Your Rights</h2>
            <ul className="policy-list">
              <li>You have the right to access, correct, or delete your personal data.</li>
              <li>You can opt out of marketing communications at any time by emailing us.</li>
              <li>You can request a copy of the data we hold about you.</li>
            </ul>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">📅</span>
            <h2>Policy Updates</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this page periodically.</p>
          </div>

          <div className="policy-card policy-card--cta">
            <h3>Privacy concerns?</h3>
            <p>Contact us at <a href="mailto:naturyis@gmail.com">naturyis@gmail.com</a></p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Privacy;
