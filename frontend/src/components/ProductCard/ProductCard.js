import React from 'react';
import Button from '../Button';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, subtitle, description, weight, image, badge, tags } = product;

  return (
    <article className="product-card">
      {badge && <span className="product-card__badge">{badge}</span>}

      <div className="product-card__image-wrap">
        <img src={image} alt={`${name} - ${weight}`} className="product-card__image" />
      </div>

      <div className="product-card__body">
        <p className="product-card__subtitle">{subtitle}</p>
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__weight">{weight}</p>
        <p className="product-card__desc">{description}</p>

        <div className="product-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="product-card__tag">{tag}</span>
          ))}
        </div>

        <div className="product-card__pricing">
          <span className="product-card__price">₹—</span>
        </div>

        <Button variant="secondary" size="md" fullWidth disabled>
          Available Soon
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
