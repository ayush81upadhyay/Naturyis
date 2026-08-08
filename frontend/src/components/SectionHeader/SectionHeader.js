import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  return (
    <div className={`section-header section-header--${align} ${light ? 'section-header--light' : ''} ${className}`}>
      {eyebrow && <span className="section-header__eyebrow">{eyebrow}</span>}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
