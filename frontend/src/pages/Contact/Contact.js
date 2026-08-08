import React, { useState } from 'react';
import SectionHeader from '../../components/SectionHeader';
import Button from '../../components/Button';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_2, WHATSAPP_NUMBER, ADDRESS } from '../../constants';
import './Contact.css';

const INITIAL_FORM = { name: '', email: '', phone: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email address';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Backend integration point: POST to API_BASE_URL/contact
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Naturyis%2C%20I%20have%20a%20query.`;

  return (
    <main className="contact-page">
      <div className="contact-page__hero section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Contact Us"
            title="We'd Love to Hear from You"
            subtitle="Questions, bulk orders, feedback or just a hello — we're here for it."
          />
        </div>
      </div>

      <section className="section">
        <div className="container contact-page__grid">
          {/* Info Cards */}
          <div className="contact-page__info">
            <h3 className="contact-page__info-title">Get in Touch</h3>
            <div className="contact-page__info-cards">
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-page__info-card">
                <span className="contact-page__info-icon">📧</span>
                <div>
                  <strong>Email Us</strong>
                  <p>{CONTACT_EMAIL}</p>
                </div>
              </a>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="contact-page__info-card">
                <span className="contact-page__info-icon">📞</span>
                <div>
                  <strong>Call Us</strong>
                  <p>{CONTACT_PHONE}</p>
                  <p>{CONTACT_PHONE_2}</p>
                </div>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-page__info-card">
                <span className="contact-page__info-icon">💬</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>Chat with us directly</p>
                </div>
              </a>
              <div className="contact-page__info-card">
                <span className="contact-page__info-icon">📍</span>
                <div>
                  <strong>Our Address</strong>
                  <p>{ADDRESS}</p>
                </div>
              </div>
            </div>
            <div className="contact-page__hours">
              <h4>Business Hours</h4>
              <p>Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Form */}
          <div className="contact-page__form-wrap">
            {submitted ? (
              <div className="contact-page__success" role="alert">
                <span className="contact-page__success-icon">🎉</span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <Button variant="primary" size="md" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form className="contact-page__form" onSubmit={handleSubmit} noValidate>
                <h3 className="contact-page__form-title">Send a Message</h3>

                <div className="contact-page__form-row">
                  <div className="contact-page__field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <span className="contact-page__error" id="name-error">{errors.name}</span>}
                  </div>
                  <div className="contact-page__field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={handleChange}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <span className="contact-page__error" id="email-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="contact-page__form-row">
                  <div className="contact-page__field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact-page__field">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Related</option>
                      <option value="bulk">Bulk Order</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="contact-page__field">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={handleChange}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && <span className="contact-page__error" id="message-error">{errors.message}</span>}
                </div>

                <Button variant="primary" size="lg" type="submit" fullWidth>
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
