import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader';
import './Blog.css';

const BLOG_POSTS = [
  {
    id: 1,
    slug: 'jaggery-vs-sugar',
    title: 'Jaggery vs Sugar: Why Your Family Deserves Better',
    excerpt: 'Most of us grew up using white sugar without a second thought. But as we learn more about what goes into our food, jaggery is emerging as a far healthier and more natural alternative.',
    category: 'Health & Wellness',
    date: 'July 15, 2026',
    readTime: '4 min read',
    emoji: '🌿',
  },
  {
    id: 2,
    slug: 'chemical-free-jaggery',
    title: 'How to Tell If Your Jaggery is Chemical-Free',
    excerpt: 'Not all jaggery on the market is created equal. Many brands use sulphur dioxide, artificial whiteners, and other chemicals to improve appearance. Here\'s how to spot the difference.',
    category: 'Food Safety',
    date: 'July 28, 2026',
    readTime: '5 min read',
    emoji: '🔍',
  },
  {
    id: 3,
    slug: 'jaggery-for-fasting',
    title: 'Best Ways to Use Jaggery During Fasting (Vrat)',
    excerpt: 'Jaggery powder is a go-to ingredient for fasting recipes — from sabudana khichdi to sweet kadhi. Here are the best and most delicious ways to use it.',
    category: 'Recipes',
    date: 'August 2, 2026',
    readTime: '6 min read',
    emoji: '🪔',
  },
  {
    id: 4,
    slug: 'jaggery-diwali-sweets',
    title: '5 Traditional Diwali Sweets You Can Make with Jaggery',
    excerpt: 'This Diwali, skip the refined sugar and bring back traditional sweetness. These five recipes use pure jaggery powder for a healthier festive spread your whole family will love.',
    category: 'Recipes',
    date: 'August 5, 2026',
    readTime: '7 min read',
    emoji: '🎉',
  },
  {
    id: 5,
    slug: 'iron-rich-jaggery',
    title: 'The Iron in Jaggery: Why It Matters for Women\'s Health',
    excerpt: 'Did you know a single serving of natural jaggery provides a meaningful dose of iron? For women especially, adding jaggery to your daily diet can make a significant nutritional difference.',
    category: 'Health & Wellness',
    date: 'August 7, 2026',
    readTime: '4 min read',
    emoji: '💪',
  },
  {
    id: 6,
    slug: 'jaggery-storage-tips',
    title: 'How to Store Jaggery Powder to Keep It Fresh for Longer',
    excerpt: 'Jaggery powder is hygroscopic — it absorbs moisture easily. Follow these simple storage tips to keep your Naturyis jaggery fresh and clump-free for months.',
    category: 'Tips & Tricks',
    date: 'August 8, 2026',
    readTime: '3 min read',
    emoji: '📦',
  },
];

const CATEGORIES = ['All', 'Health & Wellness', 'Food Safety', 'Recipes', 'Tips & Tricks'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filtered = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <main className="blog-page">
      <div className="blog-page__hero section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Naturyis Blog"
            title="Stories, Recipes & Insights"
            subtitle="Everything about natural jaggery, healthy eating, and mindful living."
          />
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div className="blog-page__filters" role="group" aria-label="Filter blog posts">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`blog-page__filter-btn ${activeCategory === cat ? 'blog-page__filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="blog-page__grid">
            {filtered.map((post) => (
              <article className="blog-card" key={post.id}>
                <div className="blog-card__image">
                  <span className="blog-card__emoji">{post.emoji}</span>
                  <span className="blog-card__category">{post.category}</span>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="blog-card__title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="blog-card__read-more">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
