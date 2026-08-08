import React from 'react';
import SectionHeader from '../SectionHeader';
import Button from '../Button';
import { BULK_OCCASIONS, WHATSAPP_NUMBER } from '../../constants';
import './BulkOrder.css';

const BulkOrder = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Naturyis%2C%20I%20am%20interested%20in%20a%20bulk%20order.`;

  return (
    <section className="section bulk" aria-labelledby="bulk-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Bulk & Event Orders"
          title="Perfect for Every Big Occasion"
          subtitle="Planning a wedding, Diwali gifting, or corporate event? Get large orders of our premium jaggery at special prices — packed fresh, delivered across India."
          id="bulk-heading"
        />
        <div className="bulk__grid">
          {BULK_OCCASIONS.map((item) => (
            <div className="bulk__card" key={item.label}>
              <span className="bulk__icon">{item.icon}</span>
              <h4 className="bulk__label">{item.label}</h4>
              <p className="bulk__desc">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bulk__actions">
          <Button variant="primary" size="lg" href="/contact">
            Request a Quote
          </Button>
          <Button variant="secondary" size="lg" href={whatsappUrl}>
            💬 WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BulkOrder;
