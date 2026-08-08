export const SITE_NAME = process.env.REACT_APP_SITE_NAME || 'Naturyis';
export const TAGLINE = process.env.REACT_APP_TAGLINE || 'Pure. Natural. Jaggery.';
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';
export const CONTACT_EMAIL = process.env.REACT_APP_CONTACT_EMAIL || 'hello@naturyis.com';
export const CONTACT_PHONE = process.env.REACT_APP_CONTACT_PHONE || '+91-XXXXXXXXXX';
export const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || '91XXXXXXXXXX';
export const INSTAGRAM_URL = process.env.REACT_APP_INSTAGRAM_URL || 'https://www.instagram.com/naturyis';
export const FACEBOOK_URL = process.env.REACT_APP_FACEBOOK_URL || 'https://www.facebook.com/naturyis';
export const FREE_DELIVERY_THRESHOLD = Number(process.env.REACT_APP_FREE_DELIVERY_THRESHOLD) || 500;

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const PRODUCTS = [
  {
    id: 1,
    name: 'Naturyis Jaggery Powder',
    subtitle: 'Premium Chemical-Free',
    description: 'Pure, unrefined jaggery powder made from hand-picked sugarcane. No chemicals, no preservatives — just goodness.',
    weight: '500g',
    price: 199,
    originalPrice: 249,
    image: '/assets/images/JaggeryPouch.png',
    badge: 'Bestseller',
    tags: ['Chemical-Free', 'Fasting Safe', 'No Preservatives'],
  },
  {
    id: 2,
    name: 'Naturyis Jaggery Powder',
    subtitle: 'Family Pack',
    description: 'Our popular jaggery powder in a larger pack — perfect for daily use in chai, desserts, and cooking.',
    weight: '1kg',
    price: 349,
    originalPrice: 420,
    image: '/assets/images/JGPouch.png',
    badge: 'Value Pack',
    tags: ['Chemical-Free', 'Daily Use', 'No Preservatives'],
  },
  {
    id: 3,
    name: 'Naturyis Jaggery Block',
    subtitle: 'Traditional Style',
    description: 'Traditional block jaggery the way your grandparents loved it. Slow-cooked in iron pans, rich in minerals.',
    weight: '500g',
    price: 179,
    originalPrice: 220,
    image: '/assets/images/SugBag.png',
    badge: 'Traditional',
    tags: ['Iron-Rich', 'Traditional Recipe', 'No Chemicals'],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Pune, Maharashtra',
    review: 'Finally found jaggery powder that actually tastes like the real thing! No chemical aftertaste. I use it every day in my morning chai.',
    rating: 5,
    avatar: '👩',
  },
  {
    id: 2,
    name: 'Rajesh Gupta',
    location: 'Mumbai, Maharashtra',
    review: 'Ordered for Diwali sweets and my whole family loved it. The colour and aroma are exactly like homemade jaggery.',
    rating: 5,
    avatar: '👨',
  },
  {
    id: 3,
    name: 'Sunita Patel',
    location: 'Ahmedabad, Gujarat',
    review: 'I use it for fasting days — knowing it has zero chemicals gives me so much peace of mind. Highly recommended!',
    rating: 5,
    avatar: '👩',
  },
  {
    id: 4,
    name: 'Vikram Nair',
    location: 'Bangalore, Karnataka',
    review: 'Great product, fast delivery and the packaging is solid. Will definitely reorder.',
    rating: 4,
    avatar: '👨',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    icon: '🚫',
    title: 'Zero Chemicals',
    description: 'No sulphur, no artificial whiteners, no preservatives. Just pure jaggery as nature intended.',
  },
  {
    icon: '🌿',
    title: '100% Natural',
    description: 'Made from hand-selected sugarcane using traditional methods passed down generations.',
  },
  {
    icon: '🪔',
    title: 'Fasting Safe',
    description: 'Safe for all vrat and upvas — no hidden additives that could break your fast.',
  },
  {
    icon: '🏭',
    title: 'FSSAI Licensed',
    description: 'Every batch is quality-tested and complies with FSSAI food safety standards.',
  },
  {
    icon: '🤝',
    title: 'Farmer Partnerships',
    description: 'We work directly with local sugarcane farmers, ensuring fair prices and fresh produce.',
  },
  {
    icon: '📦',
    title: 'Fresh Packaging',
    description: 'Sealed for freshness. Resealable pouches that keep your jaggery dry and fresh for months.',
  },
];

export const BULK_OCCASIONS = [
  { icon: '💍', label: 'Weddings', desc: 'Bulk packs for all guests' },
  { icon: '🎉', label: 'Parties', desc: 'Custom quantities available' },
  { icon: '🏢', label: 'Corporate', desc: 'Office gifting & events' },
  { icon: '🪔', label: 'Festivals', desc: 'Diwali, Holi & more' },
];

export const FAQS = [
  {
    id: 1,
    question: 'Is Naturyis jaggery powder completely chemical-free?',
    answer: 'Yes, absolutely. We do not use sulphur dioxide, artificial whiteners, or any preservatives at any stage of production. Our jaggery is made using only traditional methods.',
  },
  {
    id: 2,
    question: 'Is Naturyis suitable for fasting (vrat/upvas)?',
    answer: 'Yes! Our jaggery powder is completely safe for fasting. It contains no chemical additives or artificial substances. It is widely used in fasting recipes across India.',
  },
  {
    id: 3,
    question: 'What is the shelf life of Naturyis Jaggery Powder?',
    answer: 'Our jaggery powder has a shelf life of 12 months from the date of manufacture when stored in a cool, dry place. We recommend keeping it in an airtight container after opening.',
  },
  {
    id: 4,
    question: 'Do you offer bulk or event orders?',
    answer: 'Yes! We offer special pricing for bulk orders for weddings, corporate events, Diwali gifting, and more. Please reach out via our Contact page or WhatsApp for a custom quote.',
  },
  {
    id: 5,
    question: 'How long does delivery take?',
    answer: 'We ship across India. Standard delivery takes 3–5 business days. Free delivery is available on orders above ₹500. You will receive a tracking link once your order is dispatched.',
  },
  {
    id: 6,
    question: 'What makes jaggery powder healthier than refined sugar?',
    answer: 'Unlike refined white sugar, jaggery retains iron, magnesium, potassium, and B-vitamins naturally present in sugarcane. It has a lower glycaemic index and is a far more natural sweetener choice.',
  },
];
