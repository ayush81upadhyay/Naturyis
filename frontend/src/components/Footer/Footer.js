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
            <p className="footer__tagline">Sweet. Clean. Real.</p>
            <p className="footer__desc">
              Premium chemical-free jaggery products crafted with care for India's families.
              No preservatives. No artificial colours. Just pure goodness.
            </p>
            <div className="footer__socials">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link footer__social-link--instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.226 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link footer__social-link--facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
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
