import React from 'react';
import SectionHeader from '../SectionHeader';
import { WHY_CHOOSE_ITEMS } from '../../constants';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="section why section-alt" aria-labelledby="why-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Our Promise"
          title="Why Choose Naturyis?"
          subtitle="We believe food should be pure, honest, and nourishing. Here's what makes Naturyis different."
          id="why-heading"
        />
        <div className="why__grid">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div className="why__card" key={item.title}>
              <div className="why__icon">{item.icon}</div>
              <h3 className="why__title">{item.title}</h3>
              <p className="why__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
