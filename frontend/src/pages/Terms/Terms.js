import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import './PolicyPage.css';

const Terms = () => {
  return (
    <main className="policy-page">
      <div className="policy-page__hero section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Terms & Conditions"
            title="Terms of Use"
            subtitle="Please read these terms carefully before using our website or placing an order. Last updated: August 2026."
          />
        </div>
      </div>

      <section className="section">
        <div className="container policy-page__content">

          <div className="policy-card">
            <span className="policy-card__icon">✅</span>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the Naturyis website and placing orders, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website.</p>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">🛒</span>
            <h2>2. Products & Orders</h2>
            <ul className="policy-list">
              <li>All products displayed on our website are subject to availability.</li>
              <li>Product images are for illustrative purposes only. Actual packaging may vary slightly.</li>
              <li>We reserve the right to refuse or cancel orders at our discretion, including in cases of pricing errors or suspected fraud.</li>
              <li>Once an order is placed and payment confirmed, it cannot be modified. Cancellations must be requested before dispatch.</li>
            </ul>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">💳</span>
            <h2>3. Pricing & Payments</h2>
            <ul className="policy-list">
              <li>All prices on our website are in <strong>Indian Rupees (INR)</strong> and are inclusive of applicable taxes.</li>
              <li>We reserve the right to change prices at any time without prior notice.</li>
              <li>Payments are processed securely through third-party payment gateways. We do not store your payment details.</li>
              <li>In the event of a failed payment, your order will not be confirmed until payment is successfully received.</li>
            </ul>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">🚚</span>
            <h2>4. Shipping & Delivery</h2>
            <p>Shipping and delivery are governed by our <a href="/shipping">Shipping & Delivery Policy</a>. Naturyis is not liable for delays caused by courier partners, natural events, or incorrect address information provided by the customer.</p>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">↩️</span>
            <h2>5. Returns & Refunds</h2>
            <p>Our returns and refund process is outlined in our <a href="/returns">Returns & Refunds Policy</a>. As our products are perishable food items, returns are only accepted in cases of damaged, defective, or incorrect products.</p>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">🌿</span>
            <h2>6. Product Use & Disclaimer</h2>
            <ul className="policy-list">
              <li>Naturyis products are food items intended for human consumption in normal dietary quantities.</li>
              <li>Our products are not intended to diagnose, treat, cure, or prevent any disease.</li>
              <li>Individuals with specific medical conditions or allergies should consult a healthcare professional before use.</li>
              <li>Store products as directed on the packaging. Naturyis is not responsible for quality issues arising from improper storage by the customer.</li>
            </ul>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">©️</span>
            <h2>7. Intellectual Property</h2>
            <p>All content on this website — including text, images, logos, product names, and design — is the intellectual property of Naturyis and is protected under applicable Indian copyright and trademark laws. You may not reproduce, distribute, or use any content without our written permission.</p>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">⚖️</span>
            <h2>8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Naturyis shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products. Our total liability in any circumstance shall not exceed the value of the order placed.</p>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">🏛️</span>
            <h2>9. Governing Law</h2>
            <p>These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in <strong>Kolhapur, Maharashtra</strong>.</p>
          </div>

          <div className="policy-card">
            <span className="policy-card__icon">📅</span>
            <h2>10. Changes to These Terms</h2>
            <p>We reserve the right to update these Terms & Conditions at any time. Continued use of our website after changes are posted constitutes your acceptance of the revised terms.</p>
          </div>

          <div className="policy-card policy-card--cta">
            <h3>Questions about our terms?</h3>
            <p>Contact us at <a href="mailto:naturyis@gmail.com">naturyis@gmail.com</a></p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Terms;
