import React from 'react';
import Button from '../Button';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, subtitle, description, weight, price, originalPrice, image, badge, tags } = product;
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <article className="product-card">
      {badge && <span className="product-card__badge">{badge}</span>}
      {discount > 0 && <span className="product-card__discount">-{discount}%</span>}

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
          <span className="product-card__price">₹{price}</span>
          {originalPrice && (
            <span className="product-card__original">₹{originalPrice}</span>
          )}
        </div>

        <Button variant="primary" size="md" fullWidth>
          Add to Cart
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
