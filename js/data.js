const products = [
  {
    id: 1,
    name: 'Ergonomic Pet Carrier Backpack',
    category: 'Travel',
    price: 2499,
    originalPrice: 3499,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&h=400&fit=crop',
    badge: 'Bestseller',
    description: 'Ventilated pet carrier backpack with adjustable straps, fleece lining, and safety tether. Perfect for hiking, travel, and vet visits. Fits cats and small dogs up to 15kg.',
    features: ['Airline-approved design', 'Breathable mesh panels', 'Removable & washable fleece bed', 'Safety tether inside', 'Storage pockets', 'Reflective strips for night safety']
  },
  {
    id: 2,
    name: 'Interactive Treat Dispensing Ball',
    category: 'Toys',
    price: 899,
    originalPrice: 1299,
    rating: 4.6,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop',
    badge: 'Hot',
    description: 'Smart treat-dispensing ball that keeps your pet engaged for hours. Adjustable difficulty levels. Made from non-toxic, durable food-grade silicone.',
    features: ['Adjustable treat opening', 'Non-toxic silicone', 'Dishwasher safe', 'Bounces irregularly for fun', 'Suitable for dry treats', 'Stimulates mental activity']
  },
  {
    id: 3,
    name: 'Orthopedic Memory Foam Pet Bed',
    category: 'Bedding',
    price: 3999,
    originalPrice: 5499,
    rating: 4.9,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop',
    badge: 'Best Quality',
    description: 'Luxury orthopedic memory foam bed with bolstered edges for joint support. Waterproof liner and removable machine-washable cover.',
    features: ['4-inch memory foam', 'Bolstered edges for head support', 'Waterproof inner liner', 'Machine washable cover', 'Non-skid bottom', 'Available in 5 sizes']
  },
  {
    id: 4,
    name: 'Adjustable No-Pull Dog Harness',
    category: 'Accessories',
    price: 1299,
    originalPrice: 1799,
    rating: 4.7,
    reviews: 1456,
    image: 'https://images.unsplash.com/photo-1553882809-a4f57e595701?w=400&h=400&fit=crop',
    badge: 'Popular',
    description: 'No-pull dog harness with padded chest plate and dual clip attachment. Reflective stitching for visibility. Ergonomic design prevents choking.',
    features: ['Padded chest & belly', 'Dual leash attachment points', 'Reflective stitching', 'Quick-snap buckles', 'Adjustable 4 points', 'Breathable mesh lining']
  },
  {
    id: 5,
    name: 'Automatic Pet Feeder with Camera',
    category: 'Feeders',
    price: 5499,
    originalPrice: 6999,
    rating: 4.5,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1565708097881-bbf4a1c12cee?w=400&h=400&fit=crop',
    badge: 'New',
    description: 'WiFi-enabled automatic pet feeder with 1080p camera, two-way audio, and scheduled feeding. Dispenses up to 10 meals per day. Works with Alexa.',
    features: ['1080p HD camera with night vision', 'Two-way audio', 'Programmable meal schedule', 'Portion control (1-10 cups)', 'Low food alert', 'Battery backup']
  },
  {
    id: 6,
    name: 'Cat Tree Tower with Scratching Posts',
    category: 'Furniture',
    price: 4599,
    originalPrice: 5999,
    rating: 4.4,
    reviews: 345,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop',
    badge: 'Trending',
    description: '62-inch multi-level cat tree with sisal scratching posts, plush perches, hideaway cave, and dangling toys. Sturdy base supports up to 15kg.',
    features: ['62-inch height', '5 levels + cave', 'Sisal rope scratching posts', 'Dangling toys', 'Removable & washable cushion', 'Stable base with anti-tip bracket']
  },
  {
    id: 7,
    name: 'Pet Grooming Kit - Professional 10-Piece',
    category: 'Grooming',
    price: 1899,
    originalPrice: 2599,
    rating: 4.6,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=400&fit=crop',
    badge: 'Value Pack',
    description: 'Complete professional grooming kit with stainless steel tools. Includes brush, comb, nail clippers, grooming scissors, dematting tool, and more in a travel case.',
    features: ['Stainless steel blades', 'Ergonomic non-slip handles', 'Includes 10 tools', 'Travel storage case', 'Suitable for all coat types', 'Safety-stop on clippers']
  },
  {
    id: 8,
    name: 'Cooling Pet Mat - Self-Cooling Gel Pad',
    category: 'Bedding',
    price: 1499,
    originalPrice: 1999,
    rating: 4.3,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1523480717984-24cba35ae1ef?w=400&h=400&fit=crop',
    badge: 'Summer Special',
    description: 'Pressure-activated cooling gel mat that stays 10-15°F cooler than room temperature. No refrigeration or water needed. Non-toxic and chew-resistant.',
    features: ['No refrigeration needed', 'Re-activates automatically', 'Non-toxic gel', 'Chew-resistant cover', 'Easy to clean', 'Portable & foldable']
  },
  {
    id: 9,
    name: 'Personalized Pet ID Tag - Engraved',
    category: 'Accessories',
    price: 499,
    originalPrice: 699,
    rating: 4.9,
    reviews: 2134,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop',
    badge: 'Top Rated',
    description: 'Premium stainless steel ID tag with custom laser engraving. Rust-proof, fade-proof. Includes silent rubber silencer ring.',
    features: ['Laser engraved - never fades', 'Stainless steel 316L', 'Rust & tarnish proof', 'Includes silencer ring', 'Free customization', 'Lifetime warranty']
  },
  {
    id: 10,
    name: 'Slow Feeder Dog Bowl - Maze Design',
    category: 'Feeders',
    price: 699,
    originalPrice: 999,
    rating: 4.7,
    reviews: 987,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop',
    badge: 'Health',
    description: 'Slow feeder bowl with maze pattern to prevent bloat, improve digestion, and extend eating time by 5-10x. Non-slip base. Dishwasher safe.',
    features: ['Maze pattern slows eating', 'Non-slip rubber base', 'Food-grade melamine', 'Dishwasher safe', 'Reduces bloating risk', 'Suitable for wet & dry food']
  },
  {
    id: 11,
    name: 'Pet Stroller - Jogging Edition',
    category: 'Travel',
    price: 7999,
    originalPrice: 9999,
    rating: 4.4,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1553882809-a4f57e595701?w=400&h=400&fit=crop',
    badge: 'Premium',
    description: 'All-terrain pet stroller with 360° swivel wheels, adjustable handlebar, mesh ventilation, and one-hand fold. Suitable for pets up to 20kg.',
    features: ['All-terrain wheels', 'One-hand fold mechanism', 'Adjustable handlebar height', 'Multi-position canopy', 'Storage basket underneath', 'Safety tether inside']
  },
  {
    id: 12,
    name: 'Dental Care Chew Toy Set',
    category: 'Toys',
    price: 599,
    originalPrice: 899,
    rating: 4.5,
    reviews: 1234,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop',
    badge: 'Sale',
    description: 'Set of 3 dental chew toys with ridges and nubs that clean teeth, massage gums, and freshen breath. Made from natural, non-toxic rubber.',
    features: ['Cleans teeth while playing', 'Massages gums', 'Natural rubber material', '3 different textures', 'Floats in water', 'BPA & phthalate free']
  }
];

const categories = [
  { name: 'All', icon: '📦', count: products.length },
  { name: 'Toys', icon: '🎾', count: products.filter(p => p.category === 'Toys').length },
  { name: 'Bedding', icon: '🛏️', count: products.filter(p => p.category === 'Bedding').length },
  { name: 'Travel', icon: '🎒', count: products.filter(p => p.category === 'Travel').length },
  { name: 'Feeders', icon: '🍽️', count: products.filter(p => p.category === 'Feeders').length },
  { name: 'Accessories', icon: '🧷', count: products.filter(p => p.category === 'Accessories').length },
  { name: 'Furniture', icon: '🪑', count: products.filter(p => p.category === 'Furniture').length },
  { name: 'Grooming', icon: '✂️', count: products.filter(p => p.category === 'Grooming').length }
];

const testimonials = [
  { name: 'Priya S.', location: 'Mumbai', text: 'Amazing quality! My Labrador loves the orthopedic bed. Delivered in 3 days.', rating: 5, product: 'Orthopedic Pet Bed' },
  { name: 'Rahul K.', location: 'Delhi', text: 'The treat ball is genius. Keeps my cat entertained for hours. Worth every penny!', rating: 5, product: 'Treat Dispensing Ball' },
  { name: 'Ananya M.', location: 'Bangalore', text: 'Great quality harness at this price. Reflective stitching is perfect for evening walks.', rating: 4, product: 'No-Pull Dog Harness' },
  { name: 'Vikram P.', location: 'Pune', text: 'The grooming kit has everything I need. Saved so much money on professional grooming.', rating: 5, product: 'Grooming Kit' }
];

const siteInfo = {
  name: 'PawPals India',
  tagline: 'Premium Pet Products, Zero Investment',
  description: 'India\'s trusted destination for quality pet supplies. We source directly from manufacturers and deliver across India with free shipping on orders above ₹499.',
  email: 'hello@pawpals.in',
  phone: '+91 98765 43210',
  address: 'Mumbai, Maharashtra, India',
  features: [
    { icon: '🚚', title: 'Free Shipping', desc: 'On orders above ₹499' },
    { icon: '🔒', title: 'Secure Payment', desc: '100% secure checkout' },
    { icon: '↩️', title: 'Easy Returns', desc: '7-day return policy' },
    { icon: '💬', title: '24/7 Support', desc: 'Always here to help' }
  ],
  social: {
    instagram: '#',
    youtube: '#',
    facebook: '#',
    whatsapp: '#'
  }
};
