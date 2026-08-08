import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  const { name, location, review, rating, avatar } = testimonial;

  return (
    <article className="testimonial-card">
      <div className="testimonial-card__stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? 'star star--filled' : 'star'}>★</span>
        ))}
      </div>
      <p className="testimonial-card__review">"{review}"</p>
      <div className="testimonial-card__author">
        <span className="testimonial-card__avatar">{avatar}</span>
        <div>
          <strong className="testimonial-card__name">{name}</strong>
          <p className="testimonial-card__location">{location}</p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
