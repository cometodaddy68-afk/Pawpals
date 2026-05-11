const products = [
  {
    id: 1, name: 'Ergonomic Pet Carrier Backpack', category: 'Travel',
    price: 2499, originalPrice: 3499, rating: 4.8, reviews: 234,
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&h=400&fit=crop',
    badge: 'Bestseller',
    description: 'Ventilated pet carrier backpack with adjustable straps, fleece lining, and safety tether. Perfect for hiking, travel, and vet visits. Fits cats and small dogs up to 15kg.',
    features: ['Airline-approved design', 'Breathable mesh panels', 'Removable & washable fleece bed', 'Safety tether inside', 'Storage pockets', 'Reflective strips for night safety']
  },
  {
    id: 2, name: 'Interactive Treat Dispensing Ball', category: 'Toys',
    price: 899, originalPrice: 1299, rating: 4.6, reviews: 567,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop',
    badge: 'Hot',
    description: 'Smart treat-dispensing ball that keeps your pet engaged for hours. Adjustable difficulty levels. Made from non-toxic, durable food-grade silicone.',
    features: ['Adjustable treat opening', 'Non-toxic silicone', 'Dishwasher safe', 'Bounces irregularly for fun', 'Suitable for dry treats', 'Stimulates mental activity']
  },
  {
    id: 3, name: 'Orthopedic Memory Foam Pet Bed', category: 'Bedding',
    price: 3999, originalPrice: 5499, rating: 4.9, reviews: 892,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop',
    badge: 'Best Quality',
    description: 'Luxury orthopedic memory foam bed with bolstered edges for joint support. Waterproof liner and removable machine-washable cover.',
    features: ['4-inch memory foam', 'Bolstered edges for head support', 'Waterproof inner liner', 'Machine washable cover', 'Non-skid bottom', 'Available in 5 sizes']
  },
  {
    id: 4, name: 'Adjustable No-Pull Dog Harness', category: 'Accessories',
    price: 1299, originalPrice: 1799, rating: 4.7, reviews: 1456,
    image: 'https://images.unsplash.com/photo-1553882809-a4f57e595701?w=400&h=400&fit=crop',
    badge: 'Popular',
    description: 'No-pull dog harness with padded chest plate and dual clip attachment. Reflective stitching for visibility. Ergonomic design prevents choking.',
    features: ['Padded chest & belly', 'Dual leash attachment points', 'Reflective stitching', 'Quick-snap buckles', 'Adjustable 4 points', 'Breathable mesh lining']
  },
  {
    id: 5, name: 'Automatic Pet Feeder with Camera', category: 'Feeders',
    price: 5499, originalPrice: 6999, rating: 4.5, reviews: 178,
    image: 'https://images.unsplash.com/photo-1565708097881-bbf4a1c12cee?w=400&h=400&fit=crop',
    badge: 'New',
    description: 'WiFi-enabled automatic pet feeder with 1080p camera, two-way audio, and scheduled feeding. Dispenses up to 10 meals per day.',
    features: ['1080p HD camera with night vision', 'Two-way audio', 'Programmable meal schedule', 'Portion control (1-10 cups)', 'Low food alert', 'Battery backup']
  },
  {
    id: 6, name: 'Cat Tree Tower with Scratching Posts', category: 'Furniture',
    price: 4599, originalPrice: 5999, rating: 4.4, reviews: 345,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop',
    badge: 'Trending',
    description: '62-inch multi-level cat tree with sisal scratching posts, plush perches, hideaway cave, and dangling toys. Sturdy base supports up to 15kg.',
    features: ['62-inch height', '5 levels + cave', 'Sisal rope scratching posts', 'Dangling toys', 'Removable & washable cushion', 'Stable base with anti-tip bracket']
  },
  {
    id: 7, name: 'Professional Pet Grooming Kit 10-Piece', category: 'Grooming',
    price: 1899, originalPrice: 2599, rating: 4.6, reviews: 678,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=400&fit=crop',
    badge: 'Value Pack',
    description: 'Complete professional grooming kit with stainless steel tools. Includes brush, comb, nail clippers, grooming scissors, dematting tool, and more.',
    features: ['Stainless steel blades', 'Ergonomic non-slip handles', 'Includes 10 tools', 'Travel storage case', 'Suitable for all coat types', 'Safety-stop on clippers']
  },
  {
    id: 8, name: 'Self-Cooling Gel Pet Mat', category: 'Bedding',
    price: 1499, originalPrice: 1999, rating: 4.3, reviews: 234,
    image: 'https://images.unsplash.com/photo-1523480717984-24cba35ae1ef?w=400&h=400&fit=crop',
    badge: 'Summer Special',
    description: 'Pressure-activated cooling gel mat that stays 10-15°F cooler than room temperature. No refrigeration or water needed. Non-toxic and chew-resistant.',
    features: ['No refrigeration needed', 'Re-activates automatically', 'Non-toxic gel', 'Chew-resistant cover', 'Easy to clean', 'Portable & foldable']
  },
  {
    id: 9, name: 'Personalized Pet ID Tag Engraved', category: 'Accessories',
    price: 499, originalPrice: 699, rating: 4.9, reviews: 2134,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop',
    badge: 'Top Rated',
    description: 'Premium stainless steel ID tag with custom laser engraving. Rust-proof, fade-proof. Includes silent rubber silencer ring.',
    features: ['Laser engraved - never fades', 'Stainless steel 316L', 'Rust & tarnish proof', 'Includes silencer ring', 'Free customization', 'Lifetime warranty']
  },
  {
    id: 10, name: 'Slow Feeder Dog Bowl Maze Design', category: 'Feeders',
    price: 699, originalPrice: 999, rating: 4.7, reviews: 987,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop',
    badge: 'Health',
    description: 'Slow feeder bowl with maze pattern to prevent bloat, improve digestion, and extend eating time by 5-10x. Non-slip base. Dishwasher safe.',
    features: ['Maze pattern slows eating', 'Non-slip rubber base', 'Food-grade melamine', 'Dishwasher safe', 'Reduces bloating risk', 'Suitable for wet & dry food']
  },
  {
    id: 11, name: 'Pet Stroller Jogging Edition', category: 'Travel',
    price: 7999, originalPrice: 9999, rating: 4.4, reviews: 156,
    image: 'https://images.unsplash.com/photo-1553882809-a4f57e595701?w=400&h=400&fit=crop',
    badge: 'Premium',
    description: 'All-terrain pet stroller with 360° swivel wheels, adjustable handlebar, mesh ventilation, and one-hand fold. Suitable for pets up to 20kg.',
    features: ['All-terrain wheels', 'One-hand fold mechanism', 'Adjustable handlebar height', 'Multi-position canopy', 'Storage basket underneath', 'Safety tether inside']
  },
  {
    id: 12, name: 'Dental Care Chew Toy Set', category: 'Toys',
    price: 599, originalPrice: 899, rating: 4.5, reviews: 1234,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop',
    badge: 'Sale',
    description: 'Set of 3 dental chew toys with ridges and nubs that clean teeth, massage gums, and freshen breath. Made from natural, non-toxic rubber.',
    features: ['Cleans teeth while playing', 'Massages gums', 'Natural rubber material', '3 different textures', 'Floats in water', 'BPA & phthalate free']
  },
  {
    id: 13, name: 'Foldable Pet Travel Water Bottle', category: 'Travel',
    price: 349, originalPrice: 499, rating: 4.6, reviews: 876,
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&h=400&fit=crop',
    badge: 'Trending',
    description: 'Leak-proof portable water bottle with built-in drinking bowl. One-hand operation. BPA-free silicone. Holds 500ml. Perfect for walks and travel.',
    features: ['Built-in drinking bowl', 'Leak-proof design', 'One-hand operation', 'BPA-free silicone', '500ml capacity', 'Carabiner clip included']
  },
  {
    id: 14, name: 'Squeaky Plush Toy Set 5-Pack', category: 'Toys',
    price: 449, originalPrice: 699, rating: 4.4, reviews: 1567,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop',
    badge: 'Value Pack',
    description: 'Set of 5 assorted squeaky plush toys. Each toy has a different animal shape and sound. Double-stitched seams for durability. Machine washable.',
    features: ['5 assorted animal shapes', 'Squeaker inside each toy', 'Double-stitched seams', 'Machine washable', 'Non-toxic polyester fill', 'Suitable for small & medium dogs']
  },
  {
    id: 15, name: 'Heated Pet Bed Self-Warming', category: 'Bedding',
    price: 2299, originalPrice: 2999, rating: 4.7, reviews: 445,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop',
    badge: 'Winter Special',
    description: 'Self-warming pet bed with heat-reflective interior lining. No electricity needed. Soft faux fur exterior with non-slip bottom. Machine washable cover.',
    features: ['Heat-reflective lining', 'No electricity needed', 'Soft faux fur exterior', 'Non-slip bottom', 'Machine washable cover', 'Available in 3 sizes']
  },
  {
    id: 16, name: 'Retractable Dog Leash Heavy Duty', category: 'Accessories',
    price: 899, originalPrice: 1299, rating: 4.5, reviews: 2345,
    image: 'https://images.unsplash.com/photo-1553882809-a4f57e595701?w=400&h=400&fit=crop',
    badge: 'Popular',
    description: 'Heavy-duty retractable leash with 5m nylon tape. Ergonomic handle with brake/lock system. Suitable for dogs up to 40kg. Reflective tape for visibility.',
    features: ['5-meter retractable length', 'One-button brake & lock', 'Ergonomic non-slip handle', 'Reflective nylon tape', 'Quick-stop button', 'Durable metal clip']
  },
  {
    id: 17, name: 'Pet Nail Grinder Electric', category: 'Grooming',
    price: 1299, originalPrice: 1799, rating: 4.5, reviews: 789,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=400&fit=crop',
    badge: 'New',
    description: 'Low-noise electric nail grinder with 2-speed settings and 4 grinding ports. LED light for visibility. Safe guard prevents over-grinding. Rechargeable battery.',
    features: ['Low-noise motor', '2-speed settings', '4 interchangeable ports', 'LED light', 'Safe guard', 'USB rechargeable']
  },
  {
    id: 18, name: 'Cat Tunnel Toy Collapsible', category: 'Toys',
    price: 699, originalPrice: 999, rating: 4.6, reviews: 654,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop',
    badge: 'Fun',
    description: 'Collapsible cat tunnel with crinkle texture, dangling toy ball, and peek-a-boo holes. 150cm length. Folds flat for storage. Stimulates natural hunting instincts.',
    features: ['150cm length', 'Crinkle texture interior', 'Dangling toy ball', 'Peek-a-boo holes', 'Folds flat for storage', 'Lightweight & portable']
  },
  {
    id: 19, name: 'Elevated Dog Bed Cot-Style', category: 'Bedding',
    price: 2799, originalPrice: 3599, rating: 4.6, reviews: 567,
    image: 'https://images.unsplash.com/photo-1523480717984-24cba35ae1ef?w=400&h=400&fit=crop',
    badge: 'Best Quality',
    description: 'Elevated cot-style dog bed with breathable mesh fabric. Keeps pet cool in summer and warm in winter. Rust-proof steel frame. Easy to assemble.',
    features: ['Elevated design for airflow', 'Breathable mesh fabric', 'Rust-proof steel frame', 'Easy tool-free assembly', 'UV-resistant fabric', 'Weight capacity 50kg']
  },
  {
    id: 20, name: 'Pet Car Seat Cover Waterproof', category: 'Travel',
    price: 1899, originalPrice: 2499, rating: 4.4, reviews: 345,
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&h=400&fit=crop',
    badge: 'Popular',
    description: 'Waterproof pet car seat cover with non-slip backing. Protects seats from dirt, hair, and scratches. Includes mesh window. Fits most car models.',
    features: ['Waterproof & scratch-proof', 'Non-slip backing', 'Side flaps protect doors', 'Mesh window for ventilation', 'Easy installation', 'Machine washable']
  },
  {
    id: 21, name: 'Treat Training Pouch Bag', category: 'Accessories',
    price: 399, originalPrice: 599, rating: 4.7, reviews: 1234,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop',
    badge: 'Top Rated',
    description: 'Hands-free treat training pouch with belt clip and waist belt. Waterproof interior. Drawstring closure keeps treats fresh. Multiple pockets for phone and keys.',
    features: ['Belt clip & waist belt', 'Waterproof interior', 'Drawstring closure', 'Front pocket for phone', 'Magnetic closure', 'Machine washable']
  },
  {
    id: 22, name: 'Cat Wand Toy Feather Set', category: 'Toys',
    price: 299, originalPrice: 449, rating: 4.5, reviews: 2134,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop',
    badge: 'Value Pack',
    description: 'Set of 3 cat wand toys with interchangeable attachments. Natural feathers, bells, and crinkle materials. Telescopic wand extends to 80cm.',
    features: ['3 interchangeable attachments', 'Natural feathers', 'Telescopic wand 80cm', 'Bells & crinkle paper', 'Encourages exercise', 'Lightweight & easy to store']
  },
  {
    id: 23, name: 'Stainless Steel Pet Bowls Set', category: 'Feeders',
    price: 599, originalPrice: 849, rating: 4.8, reviews: 3456,
    image: 'https://images.unsplash.com/photo-1565708097881-bbf4a1c12cee?w=400&h=400&fit=crop',
    badge: 'Bestseller',
    description: 'Set of 2 stainless steel bowls with non-slip silicone base. Heavy-gauge steel resists rust and chewing. Dishwasher safe. Available in 3 sizes.',
    features: ['Heavy-gauge stainless steel', 'Non-slip silicone base', 'Rust & chew resistant', 'Dishwasher safe', '2-bowl set', 'Available in 3 sizes']
  },
  {
    id: 24, name: 'Pet Hair Remover Roller', category: 'Grooming',
    price: 249, originalPrice: 399, rating: 4.6, reviews: 5678,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=400&fit=crop',
    badge: 'Bestseller',
    description: 'Reusable lint roller for removing pet hair from clothes and furniture. Self-cleaning base lifts hair off easily. Compact design for travel.',
    features: ['Reusable - no sticky sheets', 'Self-cleaning base', 'Compact travel size', 'Works on fabric & upholstery', 'Easy to clean', 'Long-lasting']
  },
  {
    id: 25, name: 'Pet First Aid Kit 40-Piece', category: 'Accessories',
    price: 799, originalPrice: 1199, rating: 4.7, reviews: 456,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop',
    badge: 'Essential',
    description: 'Complete pet first aid kit with 40 essential items. Includes bandages, antiseptic wipes, tweezers, scissors, emergency blanket, and pet-specific medical guide.',
    features: ['40-piece complete kit', 'Pet-specific medical guide', 'Waterproof carrying case', 'Antiseptic supplies', 'Bandages & dressings', 'Emergency tools included']
  },
  {
    id: 26, name: 'Automatic Pet Water Fountain', category: 'Feeders',
    price: 1499, originalPrice: 1999, rating: 4.7, reviews: 1234,
    image: 'https://images.unsplash.com/photo-1565708097881-bbf4a1c12cee?w=400&h=400&fit=crop',
    badge: 'Popular',
    description: 'Triple-action filtered water fountain with 2L capacity. Quiet pump, carbon filter, and free-falling water stream encourages pets to drink more.',
    features: ['2L capacity', 'Quiet pump', 'Carbon filter included', 'Free-falling water stream', 'Dishwasher safe parts', 'LED water level indicator']
  },
  {
    id: 27, name: 'Pet Window Perch Bed', category: 'Bedding',
    price: 1799, originalPrice: 2399, rating: 4.5, reviews: 456,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop',
    badge: 'Cat Favorite',
    description: 'Window-mounted pet bed with sturdy metal frame and plush cushion. Supports up to 15kg. Easy to install with suction cups. Removable machine-washable cover.',
    features: ['Window-mounted design', 'Sturdy metal frame', 'Plush washable cushion', 'Strong suction cups', 'Weight limit 15kg', 'Easy installation']
  },
  {
    id: 28, name: 'Dog Life Jacket Safety Vest', category: 'Travel',
    price: 1599, originalPrice: 2199, rating: 4.6, reviews: 678,
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&h=400&fit=crop',
    badge: 'Safety',
    description: 'Pet life jacket with bright neon color and reflective strips. Built-in handle for easy rescue. Adjustable straps for secure fit. Suitable for swimming and boating.',
    features: ['Neon color + reflective strips', 'Built-in rescue handle', 'Adjustable neck & belly straps', 'Buoyant foam panels', 'D-ring for leash', 'Sizes for 2-30kg pets']
  },
  {
    id: 29, name: 'Cat Scratching Pad Cardboard', category: 'Furniture',
    price: 399, originalPrice: 599, rating: 4.6, reviews: 2345,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop',
    badge: 'Best Value',
    description: 'Recycled cardboard scratching pad with catnip infused. 2-sided design doubles lifespan. Includes loose catnip sachet. Helps redirect scratching from furniture.',
    features: ['Recycled cardboard', 'Catnip infused', '2-sided for double life', 'Includes loose catnip', 'Helps protect furniture', 'Lightweight & portable']
  },
  {
    id: 30, name: 'Pet Cooling Bandana Scarf', category: 'Accessories',
    price: 349, originalPrice: 499, rating: 4.4, reviews: 1234,
    image: 'https://images.unsplash.com/photo-1553882809-a4f57e595701?w=400&h=400&fit=crop',
    badge: 'Summer Special',
    description: 'Evaporative cooling bandana for pets. Soak in water, wring out, and tie around neck. Stays cool for hours. Stylish patterned design. One size fits most.',
    features: ['Evaporative cooling technology', 'Soak & wear design', 'Stylish patterns', 'One size fits most', 'Reusable', 'Lightweight & comfortable']
  },
  {
    id: 31, name: 'Tug of War Rope Toy', category: 'Toys',
    price: 349, originalPrice: 499, rating: 4.7, reviews: 3456,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop',
    badge: 'Durable',
    description: 'Heavy-duty cotton rope toy with knots. Cleans teeth while playing. 100% natural cotton fibers. Durable enough for aggressive chewers. Great for interactive play.',
    features: ['100% natural cotton', 'Reinforced knots', 'Cleans teeth during play', 'Flosses gums', 'Suitable for aggressive chewers', 'Machine washable']
  },
  {
    id: 32, name: 'PetSuit Raincoat Waterproof', category: 'Accessories',
    price: 999, originalPrice: 1399, rating: 4.5, reviews: 567,
    image: 'https://images.unsplash.com/photo-1553882809-a4f57e595701?w=400&h=400&fit=crop',
    badge: 'New',
    description: 'Waterproof pet raincoat with hood and reflective strips. Adjustable leg straps. Breathable polyester fabric. Keeps your pet dry during rainy walks.',
    features: ['Waterproof polyester', 'Detachable hood', 'Reflective piping', 'Adjustable leg straps', 'Breathable lining', 'Available in 5 sizes']
  },
  {
    id: 33, name: 'Silicone Food Topper Lick Mat', category: 'Feeders',
    price: 449, originalPrice: 649, rating: 4.8, reviews: 2345,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop',
    badge: 'Trending',
    description: 'Food-grade silicone lick mat with suction cup base. Spread peanut butter, yogurt, or wet food for enrichment. Keeps pets busy and mentally stimulated.',
    features: ['Food-grade silicone', 'Suction cup base', 'Dishwasher safe', 'Enrichment activity', 'Slows down eating', 'Suitable for dogs & cats']
  },
  {
    id: 34, name: 'Pet Hair Dryer Low Noise', category: 'Grooming',
    price: 2499, originalPrice: 3299, rating: 4.4, reviews: 234,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=400&fit=crop',
    badge: 'Premium',
    description: 'Professional pet hair dryer with adjustable speed and heat settings. Low-noise motor reduces pet anxiety. Includes 2 nozzle attachments. Suitable for all coat types.',
    features: ['Low-noise motor', 'Adjustable speed & heat', '2 nozzle attachments', 'Overheat protection', '8ft power cord', 'Lightweight design']
  },
  {
    id: 35, name: 'Cat Harness and Leash Set', category: 'Accessories',
    price: 799, originalPrice: 1099, rating: 4.5, reviews: 3456,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop',
    badge: 'Popular',
    description: 'Escape-proof cat harness with matching leash. Soft breathable mesh. Adjustable neck and chest straps. Reflective stitching. Perfect for cat walks and travel.',
    features: ['Escape-proof design', 'Soft breathable mesh', 'Adjustable neck & chest', 'Matching leash included', 'Reflective stitching', 'Lightweight']
  },
  {
    id: 36, name: 'Puzzle Feeder Dog Toy', category: 'Toys',
    price: 799, originalPrice: 1099, rating: 4.6, reviews: 987,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop',
    badge: 'Brain Game',
    description: 'Interactive puzzle feeder with sliding compartments and treat hiding spots. Adjustable difficulty levels. Made from durable, non-toxic ABS plastic.',
    features: ['Sliding compartments', 'Hide & seek design', 'Adjustable difficulty', 'Non-toxic ABS plastic', 'Dishwasher safe', 'Stimulates problem-solving']
  },
  {
    id: 37, name: 'Pet Stairs with Storage', category: 'Furniture',
    price: 3299, originalPrice: 4299, rating: 4.6, reviews: 345,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop',
    badge: 'Space Saver',
    description: 'Pet stairs with built-in storage drawers. Helps small pets reach beds and sofas safely. Non-slip steps. Sturdy particleboard with easy-clean laminate finish.',
    features: ['Built-in storage drawers', 'Non-slip steps', 'Particleboard construction', 'Easy-clean laminate', 'Supports up to 25kg', 'Assembles in minutes']
  },
  {
    id: 38, name: 'Pet Toothbrush and Toothpaste Kit', category: 'Grooming',
    price: 399, originalPrice: 599, rating: 4.3, reviews: 3456,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=400&fit=crop',
    badge: 'Health',
    description: 'Complete dental care kit with dual-headed toothbrush and enzymatic toothpaste. Finger brush for easy cleaning. Poultry flavor toothpaste pets love.',
    features: ['Dual-headed toothbrush', 'Finger brush included', 'Enzymatic toothpaste', 'Poultry flavor', 'No-rinse formula', 'Removes plaque & tartar']
  },
  {
    id: 39, name: 'Collapsible Pet Playpen', category: 'Furniture',
    price: 3999, originalPrice: 4999, rating: 4.7, reviews: 456,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop',
    badge: 'Popular',
    description: 'Foldable metal playpen with 8 panels. Includes carrying bag. Waterproof floor mat. Use indoors or outdoors. Creates a safe play area for your pet.',
    features: ['8 metal panels', 'Foldable design', 'Waterproof floor mat', 'Carrying bag included', 'Indoor/outdoor use', 'Height 60cm']
  },
  {
    id: 40, name: 'Dog Muzzle Soft Mesh', category: 'Accessories',
    price: 449, originalPrice: 649, rating: 4.4, reviews: 1234,
    image: 'https://images.unsplash.com/photo-1553882809-a4f57e595701?w=400&h=400&fit=crop',
    badge: 'Safety',
    description: 'Soft mesh muzzle with adjustable straps. Allows panting and drinking. Padded for comfort. Perfect for vet visits, grooming, and training.',
    features: ['Soft breathable mesh', 'Allows panting & drinking', 'Padded nose area', 'Adjustable head strap', 'Quick-snap buckle', 'Machine washable']
  },
  {
    id: 41, name: 'Snuffle Mat Foraging Toy', category: 'Toys',
    price: 549, originalPrice: 799, rating: 4.8, reviews: 3456,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop',
    badge: 'Top Rated',
    description: 'Snuffle mat with fleece strips for hide-and-seek treat games. Encourages natural foraging instincts. Slows down eating. Machine washable. Non-slip rubber base.',
    features: ['Encourages natural foraging', 'Slows down eating', 'Non-slip rubber base', 'Machine washable', 'Fleece fabric strips', 'Suitable for dogs & cats']
  },
  {
    id: 42, name: 'Pet Waste Station with Bags', category: 'Grooming',
    price: 299, originalPrice: 449, rating: 4.5, reviews: 5678,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=400&fit=crop',
    badge: 'Essential',
    description: 'Poop bag dispenser with 100 compostable bags included. Clip attaches to leash. Easy one-hand dispensing. Refillable. Eco-friendly materials.',
    features: ['100 compostable bags', 'Leash clip attachment', 'One-hand dispensing', 'Refillable', 'Eco-friendly materials', 'Compact & lightweight']
  },
  {
    id: 43, name: 'Pet Bed Blanket Fleece', category: 'Bedding',
    price: 699, originalPrice: 999, rating: 4.7, reviews: 4567,
    image: 'https://images.unsplash.com/photo-1523480717984-24cba35ae1ef?w=400&h=400&fit=crop',
    badge: 'Popular',
    description: 'Ultra-soft double-sided fleece blanket for pets. Large size perfect for beds, sofas, and car seats. Warm yet breathable. Machine washable. Anti-static.',
    features: ['Double-sided fleece', 'Large 120x90cm size', 'Warm & breathable', 'Machine washable', 'Anti-static treatment', 'Available in 5 colors']
  },
  {
    id: 44, name: 'Pet Carrier Tote Bag', category: 'Travel',
    price: 1899, originalPrice: 2499, rating: 4.5, reviews: 678,
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&h=400&fit=crop',
    badge: 'Stylish',
    description: 'Fashionable pet tote bag with breathable mesh windows. Padded shoulder strap. Fits small dogs and cats up to 6kg. Machine washable lining.',
    features: ['Breathable mesh windows', 'Padded shoulder strap', 'Safety tether inside', 'Machine washable lining', 'Front storage pocket', 'Fits pets up to 6kg']
  },
  {
    id: 45, name: 'Pet Waterproof Blanket', category: 'Bedding',
    price: 1299, originalPrice: 1799, rating: 4.6, reviews: 2345,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop',
    badge: 'Protection',
    description: 'Waterproof blanket for furniture protection. Soft flannel top, waterproof middle layer, non-slip bottom. Protects sofas and beds from spills and accidents.',
    features: ['3-layer construction', 'Soft flannel top', 'Waterproof middle layer', 'Non-slip bottom', 'Large 150x120cm size', 'Machine washable']
  },
  {
    id: 46, name: 'Dog Chew Bones Set 4-Pack', category: 'Toys',
    price: 499, originalPrice: 749, rating: 4.5, reviews: 6789,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=400&fit=crop',
    badge: 'Value Pack',
    description: 'Set of 4 durable nylon chew bones in different flavors (bacon, chicken, peanut butter, beef). Helps clean teeth and satisfy natural chewing instincts.',
    features: ['4 assorted flavors', 'Durable nylon material', 'Cleans teeth while chewing', 'Long-lasting', 'Non-toxic & BPA free', 'Suitable for medium-large dogs']
  },
  {
    id: 47, name: 'Pet Feeding Mat Silicone', category: 'Feeders',
    price: 449, originalPrice: 649, rating: 4.7, reviews: 3456,
    image: 'https://images.unsplash.com/photo-1565708097881-bbf4a1c12cee?w=400&h=400&fit=crop',
    badge: 'Best Value',
    description: 'Waterproof silicone feeding mat with raised edges to catch spills. Non-slip surface keeps bowls in place. Easy to clean. Fits two bowls.',
    features: ['Food-grade silicone', 'Raised edges catch spills', 'Non-slip surface', 'Easy to clean', 'Fits 2 bowls', 'Available in 4 colors']
  },
  {
    id: 48, name: 'Pet Seat Belt Tether', category: 'Accessories',
    price: 349, originalPrice: 499, rating: 4.5, reviews: 2345,
    image: 'https://images.unsplash.com/photo-1553882809-a4f57e595701?w=400&h=400&fit=crop',
    badge: 'Safety',
    description: 'Adjustable pet seat belt tether that attaches to car seat buckle. 360° swivel prevents tangling. Padded chest plate for comfort. Crash-tested design.',
    features: ['Adjustable length', '360° swivel top', 'Padded chest plate', 'Universal car fit', 'Crash-tested', 'Suitable for 5-30kg pets']
  },
  {
    id: 49, name: 'Plush Donut Cat Bed', category: 'Bedding',
    price: 1599, originalPrice: 2199, rating: 4.8, reviews: 3456,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop',
    badge: 'Cat Favorite',
    description: 'Round donut-style cat bed with raised edges for security and head support. Ultra-soft faux fur. Machine washable. Non-slip bottom. Calming design for anxious cats.',
    features: ['Donut shape with raised edges', 'Ultra-soft faux fur', 'Machine washable', 'Non-slip bottom', 'Calming design', 'Available in 4 sizes']
  },
  {
    id: 50, name: 'Pet Exercise Wheel for Cats', category: 'Furniture',
    price: 8999, originalPrice: 10999, rating: 4.3, reviews: 123,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop',
    badge: 'Premium',
    description: 'Large exercise wheel for indoor cats. Quiet bearing system. Track design with textured running surface. Helps prevent obesity and provides mental stimulation.',
    features: ['Large 110cm diameter', 'Quiet bearing system', 'Textured running surface', 'Sturdy base', 'Easy assembly', 'Weight limit 10kg']
  },
  {
    id: 51, name: 'Pet Camera Treat Dispenser', category: 'Feeders',
    price: 7499, originalPrice: 9499, rating: 4.4, reviews: 234,
    image: 'https://images.unsplash.com/photo-1565708097881-bbf4a1c12cee?w=400&h=400&fit=crop',
    badge: 'Premium',
    description: 'WiFi pet camera with treat tossing feature. 1080p HD video with night vision. Two-way audio. Motion & sound alerts. Works with Alexa.',
    features: ['Treat tossing mechanism', '1080p HD night vision', 'Two-way audio', 'Motion & sound alerts', 'Alexa compatible', 'App control']
  },
  {
    id: 52, name: 'Pet Bedside Crib Co-Sleeper', category: 'Bedding',
    price: 4499, originalPrice: 5999, rating: 4.5, reviews: 234,
    image: 'https://images.unsplash.com/photo-1523480717984-24cba35ae1ef?w=400&h=400&fit=crop',
    badge: 'Cozy',
    description: 'Pet co-sleeper bedside crib with mesh sides. Folds flat for travel. Removable machine-washable mattress cover. Includes safety tether. Fits small dogs and cats.',
    features: ['Mesh sides for visibility', 'Folds flat for storage', 'Removable mattress cover', 'Safety tether included', 'Portable design', 'Includes carrying bag']
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
