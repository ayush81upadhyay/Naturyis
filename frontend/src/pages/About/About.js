import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import Button from '../../components/Button';
import traditionalLogo from '../../assets/images/TraditionalLogo.png';
import homePage2 from '../../assets/images/HomePage2.png';
import './About.css';

const About = () => {
  return (
    <main className="about-page">
      {/* Hero */}
      <div className="about-page__hero section-alt">
        <div className="container about-page__hero-inner">
          <SectionHeader
            eyebrow="Our Story"
            title="Born from a Belief in Pure Food"
            subtitle="Naturyis started with a simple question: why can't everyday sweeteners be completely natural?"
          />
        </div>
      </div>

      {/* Story Section */}
      <section className="section">
        <div className="container about-page__story">
          <div className="about-page__story-content">
            <span className="about-page__eyebrow">The Beginning</span>
            <h2>A Family's Quest for Chemical-Free Living</h2>
            <p>
              Naturyis was born out of a deeply personal journey. When our founder's family started
              looking for truly natural sweeteners — free from sulphur, artificial whiteners, and hidden
              chemicals — they found the market full of compromise. So they decided to create something better.
            </p>
            <p>
              Partnering with traditional jaggery farmers, we revived age-old methods of preparing
              jaggery in iron pans, sun-dried and packed fresh. Every batch is tested, every pouch
              is sealed for maximum freshness.
            </p>
            <p>
              Today, Naturyis is trusted by thousands of families across India for daily cooking,
              fasting recipes, festive sweets, and gifting.
            </p>
            <Button variant="primary" size="lg" href="/products">
              Explore Our Products
            </Button>
          </div>
          <div className="about-page__story-image">
            <img src={traditionalLogo} alt="Traditional Naturyis Jaggery Making" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section section-alt">
        <div className="container about-page__mission">
          <div className="about-page__mission-image">
            <img src={homePage2} alt="Naturyis Mission" />
          </div>
          <div className="about-page__mission-content">
            <span className="about-page__eyebrow">Our Mission</span>
            <h2>Bringing Honesty Back to Food</h2>
            <p>
              We believe food should nourish, not harm. Our mission is to make 100% natural,
              chemical-free jaggery accessible to every Indian household — at fair prices,
              with transparent ingredients, and with pride.
            </p>
            <ul className="about-page__mission-list">
              <li>✅ Zero chemicals at every stage of production</li>
              <li>✅ Direct farmer partnerships for freshness and fairness</li>
              <li>✅ FSSAI licensed manufacturing</li>
              <li>✅ Sustainable packaging that doesn't compromise quality</li>
              <li>✅ Transparent labelling — no hidden ingredients ever</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What We Stand For"
            title="Our Core Values"
          />
          <div className="about-page__values">
            {[
              { icon: '🌿', title: 'Purity', desc: 'We never compromise on the quality or chemical-free nature of our products.' },
              { icon: '🤝', title: 'Integrity', desc: 'Transparent processes, honest labelling, and fair pricing — always.' },
              { icon: '👨‍🌾', title: 'Community', desc: 'Supporting local farmers and empowering rural communities.' },
              { icon: '♻️', title: 'Sustainability', desc: 'Responsible manufacturing with minimal environmental footprint.' },
            ].map((v) => (
              <div className="about-page__value-card" key={v.title}>
                <span className="about-page__value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
