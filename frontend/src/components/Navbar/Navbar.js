import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';
import Button from '../Button';
import logo from '../../assets/images/logoCircle.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMenu} aria-label="Naturyis Home">
          <img src={logo} alt="Naturyis Logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">Naturyis</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="navbar__cta">
          <Button variant="primary" size="sm" href="/products">
            Shop Now
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          <ul className="navbar__mobile-links">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
                  }
                  onClick={closeMenu}
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Button variant="primary" size="md" href="/products" fullWidth onClick={closeMenu}>
                Shop Now
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
