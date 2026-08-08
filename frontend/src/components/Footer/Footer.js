import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_2, INSTAGRAM_URL, FACEBOOK_URL, SITE_NAME, ADDRESS, DEVELOPER } from '../../constants';
import logo from '../../assets/images/logoCircle.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src={logo} alt="Naturyis Logo" />
              <span>Naturyis</span>
            </Link>
            <p className="footer__tagline">Pure. Natural. Jaggery.</p>
            <p className="footer__desc">
              Premium chemical-free jaggery products crafted with care for India's families.
              No preservatives. No artificial colours. Just pure goodness.
            </p>
            <div className="footer__socials">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
                <img src="/assets/images/InstaLogo.png" alt="Instagram" />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
                <img src="/assets/images/FbLogo.png" alt="Facebook" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Explore</h4>
            <ul className="footer__list">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="footer__col">
            <h4 className="footer__heading">Policies</h4>
            <ul className="footer__list">
              <li><Link to="/shipping" className="footer__link">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="footer__link">Returns & Refunds</Link></li>
              <li><Link to="/privacy" className="footer__link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer__link">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Get in Touch</h4>
            <ul className="footer__list">
              <li className="footer__contact-item">
                <span>📧</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="footer__link">{CONTACT_EMAIL}</a>
              </li>
              <li className="footer__contact-item">
                <span>📞</span>
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="footer__link">{CONTACT_PHONE}</a>
              </li>
              <li className="footer__contact-item">
                <span>📞</span>
                <a href={`tel:${CONTACT_PHONE_2.replace(/\s/g, '')}`} className="footer__link">{CONTACT_PHONE_2}</a>
              </li>
              <li className="footer__contact-item">
                <span>📍</span>
                <span className="footer__address">{ADDRESS}</span>
              </li>
            </ul>
            <div className="footer__badges">
              <span className="footer__badge">✅ FSSAI Licensed</span>
              <span className="footer__badge">🚫 No Preservatives</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {currentYear} {SITE_NAME}™. All rights reserved.
          </p>
          <p className="footer__made">
            Made with 💛 in India
          </p>
          <p className="footer__developer">
            Developed by {DEVELOPER}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
