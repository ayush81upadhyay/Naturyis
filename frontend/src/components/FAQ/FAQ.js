import React, { useState } from 'react';
import SectionHeader from '../SectionHeader';
import { FAQS } from '../../constants';
import './FAQ.css';

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
    <button
      className="faq__question"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${faq.id}`}
    >
      <span>{faq.question}</span>
      <span className="faq__icon">{isOpen ? '−' : '+'}</span>
    </button>
    <div
      className="faq__answer"
      id={`faq-answer-${faq.id}`}
      role="region"
      aria-hidden={!isOpen}
    >
      <p>{faq.answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="section faq section-alt" aria-labelledby="faq-heading">
      <div className="container faq__inner">
        <SectionHeader
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Naturyis Jaggery Powder."
          id="faq-heading"
        />
        <div className="faq__list" role="list">
          {FAQS.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
