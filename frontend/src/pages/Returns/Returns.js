import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import './PolicyPage.css';

const Returns = () => {
  return (
    <main className="policy-page">
      <div className="policy-page__hero section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Returns & Refunds"
            title="We Stand Behind Every Product"
            subtitle="Your satisfaction is our priority. If something isn't right, we'll make it right."
          />
        </div>
      </div>

      <section className="section">
        <div className="container policy-page__content">

          <div className="policy-card">
            <span className="policy-card__icon">↩️</span>
            <h2>Return Policy</h2>
            <p>We accept returns under the following conditions:</p>
            <ul className="policy-list">
              <li>✅ The product received is <strong>damaged, defective, or tampered</strong>.</li>
              <li>✅ You received the <strong>wrong product</strong> (wrong variant or quantity).</li>
              <li>✅ The product is <strong>well within its expiry date</strong> but has visible quality issues.</li>
            </ul>
            <p className="policy-note">⚠️ Returns are <strong>not accepted</strong> for reasons such as taste preference or change of mind, as our products are food items.</p>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">⏱️</span>
            <h2>Return Window</h2>
            <ul className="policy-list">
              <li>You must raise a return request within <strong>48 hours</strong> of delivery for damaged or defective products.</li>
              <li>For wrong product delivery, you must notify us within <strong>24 hours</strong> of receiving the order.</li>
            </ul>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">🔄</span>
            <h2>How to Raise a Return Request</h2>
            <ol className="policy-list policy-list--ordered">
              <li>Email us at <a href="mailto:naturyis@gmail.com">naturyis@gmail.com</a> or WhatsApp +91 9359635951</li>
              <li>Mention your <strong>Order ID</strong> and reason for return.</li>
              <li>Attach clear photographs of the product and the packaging.</li>
              <li>Our team will review and respond within <strong>1–2 business days</strong>.</li>
              <li>If approved, a pickup will be arranged or you may be asked to self-ship the product.</li>
            </ol>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">💸</span>
            <h2>Refund Policy</h2>
            <ul className="policy-list">
              <li>Once your return is approved and received, refunds are processed within <strong>5–7 business days</strong>.</li>
              <li>Refunds are credited to the <strong>original payment method</strong> (UPI, card, net banking, etc.).</li>
              <li>For Cash on Delivery orders, refunds are issued via <strong>bank transfer</strong> — please share your bank details when raising the request.</li>
              <li>Shipping charges (if any) are <strong>non-refundable</strong> unless the error was on our end.</li>
            </ul>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">🔁</span>
            <h2>Replacement</h2>
            <p>In many cases, instead of a refund, we may offer a <strong>free replacement</strong> of the same product. This is often the fastest resolution. Our team will discuss the best option with you.</p>
          </div>

          <div className="policy-card policy-card--cta">
            <h3>Need help with a return?</h3>
            <p>Contact us at <a href="mailto:naturyis@gmail.com">naturyis@gmail.com</a> or call <a href="tel:+917875112551">+91 7875112551</a></p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Returns;
