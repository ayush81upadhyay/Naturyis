import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/global.css';

// Lazy-loaded pages for code splitting (backend-ready setup)
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));

// Page loading fallback
const PageLoader = () => (
  <div style={{
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--color-bg-primary)',
  }}>
    <div style={{ textAlign: 'center', color: 'var(--color-primary)' }}>
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌿</div>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem' }}>Loading...</p>
    </div>
  </div>
);

// 404 Page
const NotFound = () => (
  <div style={{
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    backgroundColor: 'var(--color-bg-primary)',
    textAlign: 'center',
    padding: '2rem',
  }}>
    <span style={{ fontSize: '4rem' }}>🌾</span>
    <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', fontSize: '3rem' }}>404</h1>
    <p style={{ color: 'var(--color-text-medium)', fontSize: '1.125rem' }}>
      Oops! This page doesn't exist.
    </p>
    <a href="/" style={{
      backgroundColor: 'var(--color-primary)',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '9999px',
      fontWeight: 600,
      textDecoration: 'none',
    }}>
      Back to Home
    </a>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
