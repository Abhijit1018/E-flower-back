import pool from './db.js';

const products = [
  // ── Roses ──
  { id: 1, name: 'Classic Red Rose Bouquet', price: 899, category: 'roses', image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=400&h=400&fit=crop', rating: 4.9 },
  { id: 2, name: 'Pink Rose Romance', price: 749, category: 'roses', image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop', rating: 4.7 },
  { id: 3, name: 'White Rose Elegance', price: 849, category: 'roses', image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 4, name: 'Yellow Rose Sunshine', price: 649, category: 'roses', image: 'https://images.unsplash.com/photo-1548460397-fba0fdeb3097?w=400&h=400&fit=crop', rating: 4.6 },
  { id: 5, name: 'Mixed Rose Carnival', price: 999, category: 'roses', image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 6, name: '50 Red Roses Grand Bouquet', price: 2499, category: 'roses', image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=400&fit=crop', rating: 5.0 },
  { id: 7, name: 'Preserved Forever Roses', price: 1499, category: 'roses', image: 'https://images.unsplash.com/photo-1518882460395-e6e2f1e6ba36?w=400&h=400&fit=crop', rating: 4.9 },
  { id: 8, name: 'Rose & Baby Breath Combo', price: 1099, category: 'roses', image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400&h=400&fit=crop', rating: 4.7 },

  // ── Lilies ──
  { id: 9, name: 'White Lily Purity Bunch', price: 799, category: 'lilies', image: 'https://images.unsplash.com/photo-1600000545580-6618a09d3db2?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 10, name: 'Stargazer Lily Arrangement', price: 999, category: 'lilies', image: 'https://images.unsplash.com/photo-1588628566587-30d8e5294025?w=400&h=400&fit=crop', rating: 4.7 },
  { id: 11, name: 'Calla Lily Elegance', price: 1199, category: 'lilies', image: 'https://images.unsplash.com/photo-1585553616435-2dc46a3d3a60?w=400&h=400&fit=crop', rating: 4.9 },
  { id: 12, name: 'Asiatic Lily Mix', price: 699, category: 'lilies', image: 'https://images.unsplash.com/photo-1469259943454-aa100abba749?w=400&h=400&fit=crop', rating: 4.5 },

  // ── Orchids ──
  { id: 13, name: 'Purple Phalaenopsis Orchid', price: 1299, category: 'orchids', image: 'https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=400&h=400&fit=crop', rating: 4.9 },
  { id: 14, name: 'White Orchid Cascade', price: 1499, category: 'orchids', image: 'https://images.unsplash.com/photo-1524598171347-ac834c3fba47?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 15, name: 'Blue Dendrobium Orchid', price: 1599, category: 'orchids', image: 'https://images.unsplash.com/photo-1590333748338-d629e4564ad9?w=400&h=400&fit=crop', rating: 4.9 },
  { id: 16, name: 'Cattleya Orchid Plant', price: 999, category: 'orchids', image: 'https://images.unsplash.com/photo-1610397648930-477b8c7f0943?w=400&h=400&fit=crop', rating: 4.7 },

  // ── Tulips ──
  { id: 17, name: 'Rainbow Tulip Bouquet', price: 899, category: 'tulips', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 18, name: 'Red Tulip Love Bundle', price: 749, category: 'tulips', image: 'https://images.unsplash.com/photo-1518701005037-d53b1aeac7aa?w=400&h=400&fit=crop', rating: 4.6 },
  { id: 19, name: 'Pink Tulip Spring', price: 699, category: 'tulips', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop', rating: 4.7 },
  { id: 20, name: 'Yellow Tulip Joy', price: 649, category: 'tulips', image: 'https://images.unsplash.com/photo-1525310555-5801a516c8e2?w=400&h=400&fit=crop', rating: 4.5 },

  // ── Sunflowers ──
  { id: 21, name: 'Sunflower Happiness Bunch', price: 599, category: 'sunflowers', image: 'https://images.unsplash.com/photo-1551945378-c1b01bd15eb6?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 22, name: 'Giant Sunflower Bouquet', price: 899, category: 'sunflowers', image: 'https://images.unsplash.com/photo-1548460397-fba0fdeb3097?w=400&h=400&fit=crop', rating: 4.7 },
  { id: 23, name: 'Sunflower & Daisy Mix', price: 749, category: 'sunflowers', image: 'https://images.unsplash.com/photo-1469259943454-aa100abba749?w=400&h=400&fit=crop', rating: 4.6 },
  { id: 24, name: 'Mini Sunflower Pot', price: 449, category: 'sunflowers', image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&h=400&fit=crop', rating: 4.5 },

  // ── Love & Romance ──
  { id: 25, name: 'Romantic Red Heart Bouquet', price: 1299, category: 'love', image: 'https://images.unsplash.com/photo-1518882460395-e6e2f1e6ba36?w=400&h=400&fit=crop', rating: 5.0 },
  { id: 26, name: 'Valentine Special Arrangement', price: 1599, category: 'love', image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=400&h=400&fit=crop', rating: 4.9 },
  { id: 27, name: 'Eternal Love Rose Box', price: 1999, category: 'love', image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=400&fit=crop', rating: 4.9 },
  { id: 28, name: 'Romance in Pink', price: 1099, category: 'love', image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 29, name: 'Couple Night Flower Pack', price: 1799, category: 'love', image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop', rating: 4.7 },
  { id: 30, name: 'Proposal Rose Arrangement', price: 2999, category: 'love', image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop', rating: 5.0 },

  // ── Friendship ──
  { id: 31, name: 'Friendship Day Bouquet', price: 699, category: 'friendship', image: 'https://images.unsplash.com/photo-1469259943454-aa100abba749?w=400&h=400&fit=crop', rating: 4.7 },
  { id: 32, name: 'Yellow Friendship Roses', price: 599, category: 'friendship', image: 'https://images.unsplash.com/photo-1548460397-fba0fdeb3097?w=400&h=400&fit=crop', rating: 4.6 },
  { id: 33, name: 'Colorful BFF Bouquet', price: 799, category: 'friendship', image: 'https://images.unsplash.com/photo-1525310555-5801a516c8e2?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 34, name: 'Sunflower Friendship Bundle', price: 549, category: 'friendship', image: 'https://images.unsplash.com/photo-1551945378-c1b01bd15eb6?w=400&h=400&fit=crop', rating: 4.5 },

  // ── Wedding ──
  { id: 35, name: 'Bridal White Rose Bouquet', price: 2499, category: 'wedding', image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=400&h=400&fit=crop', rating: 5.0 },
  { id: 36, name: 'Wedding Arch Flower Set', price: 4999, category: 'wedding', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop', rating: 4.9 },
  { id: 37, name: 'Bridesmaid Bouquet Set (4)', price: 1999, category: 'wedding', image: 'https://images.unsplash.com/photo-1522776851755-3914469f0ca2?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 38, name: 'Wedding Table Centerpiece', price: 1499, category: 'wedding', image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=400&h=400&fit=crop', rating: 4.7 },
  { id: 39, name: 'Boutonniere & Corsage Set', price: 599, category: 'wedding', image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&h=400&fit=crop', rating: 4.6 },

  // ── Anniversary ──
  { id: 40, name: '25th Anniversary Silver Bouquet', price: 1799, category: 'anniversary', image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop', rating: 4.9 },
  { id: 41, name: 'Golden Anniversary Arrangement', price: 2199, category: 'anniversary', image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 42, name: 'First Anniversary Rose Box', price: 1299, category: 'anniversary', image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=400&h=400&fit=crop', rating: 4.7 },
  { id: 43, name: 'Anniversary Premium Mix', price: 1599, category: 'anniversary', image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=400&fit=crop', rating: 4.9 },

  // ── Birthday ──
  { id: 44, name: 'Birthday Celebration Bouquet', price: 899, category: 'birthday', image: 'https://images.unsplash.com/photo-1525310555-5801a516c8e2?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 45, name: 'Happy Birthday Rose Mix', price: 749, category: 'birthday', image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop', rating: 4.6 },
  { id: 46, name: 'Birthday Flower Basket', price: 1099, category: 'birthday', image: 'https://images.unsplash.com/photo-1469259943454-aa100abba749?w=400&h=400&fit=crop', rating: 4.7 },
  { id: 47, name: 'Milestone Birthday Bouquet', price: 1399, category: 'birthday', image: 'https://images.unsplash.com/photo-1518882460395-e6e2f1e6ba36?w=400&h=400&fit=crop', rating: 4.9 },

  // ── Sympathy & Condolence ──
  { id: 48, name: 'Sympathy White Lily Wreath', price: 1499, category: 'sympathy', image: 'https://images.unsplash.com/photo-1600000545580-6618a09d3db2?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 49, name: 'Peaceful Remembrance Flowers', price: 1199, category: 'sympathy', image: 'https://images.unsplash.com/photo-1585553616435-2dc46a3d3a60?w=400&h=400&fit=crop', rating: 4.7 },
  { id: 50, name: 'Condolence Arrangement', price: 999, category: 'sympathy', image: 'https://images.unsplash.com/photo-1524598171347-ac834c3fba47?w=400&h=400&fit=crop', rating: 4.9 },

  // ── Thank You & Gratitude ──
  { id: 51, name: 'Thank You Flower Basket', price: 799, category: 'thankyou', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=400&fit=crop', rating: 4.7 },
  { id: 52, name: 'Gratitude Sunflower Bunch', price: 649, category: 'thankyou', image: 'https://images.unsplash.com/photo-1551945378-c1b01bd15eb6?w=400&h=400&fit=crop', rating: 4.6 },
  { id: 53, name: 'Teacher Appreciation Bouquet', price: 599, category: 'thankyou', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop', rating: 4.5 },

  // ── Bouquets (Mixed) ──
  { id: 54, name: 'Spring Garden Bouquet', price: 849, category: 'bouquets', image: 'https://images.unsplash.com/photo-1469259943454-aa100abba749?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 55, name: 'Wildflower Meadow Mix', price: 699, category: 'bouquets', image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop', rating: 4.6 },
  { id: 56, name: 'Peony & Rose Luxury', price: 1299, category: 'bouquets', image: 'https://images.unsplash.com/photo-1518882460395-e6e2f1e6ba36?w=400&h=400&fit=crop', rating: 4.9 },
  { id: 57, name: 'Pastel Dream Arrangement', price: 949, category: 'bouquets', image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400&h=400&fit=crop', rating: 4.7 },
  { id: 58, name: 'Garden Fresh Mixed Bouquet', price: 599, category: 'bouquets', image: 'https://images.unsplash.com/photo-1525310555-5801a516c8e2?w=400&h=400&fit=crop', rating: 4.5 },
  { id: 59, name: 'Exotic Tropical Bouquet', price: 1199, category: 'bouquets', image: 'https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 60, name: 'Lavender Dreams Bouquet', price: 799, category: 'bouquets', image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=400&h=400&fit=crop', rating: 4.7 },

  // ── Flower Arrangements ──
  { id: 61, name: 'Glass Vase Rose Arrangement', price: 1099, category: 'arrangements', image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 62, name: 'Ceramic Pot Flower Mix', price: 899, category: 'arrangements', image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop', rating: 4.6 },
  { id: 63, name: 'Luxury Box Arrangement', price: 1499, category: 'arrangements', image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=400&h=400&fit=crop', rating: 4.9 },
  { id: 64, name: 'Basket Flower Arrangement', price: 999, category: 'arrangements', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop', rating: 4.7 },

  // ── Carnations ──
  { id: 65, name: 'Pink Carnation Delight', price: 499, category: 'carnations', image: 'https://images.unsplash.com/photo-1588628566587-30d8e5294025?w=400&h=400&fit=crop', rating: 4.6 },
  { id: 66, name: 'Red Carnation Love', price: 549, category: 'carnations', image: 'https://images.unsplash.com/photo-1518701005037-d53b1aeac7aa?w=400&h=400&fit=crop', rating: 4.5 },
  { id: 67, name: 'Mixed Carnation Bouquet', price: 599, category: 'carnations', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop', rating: 4.7 },

  // ── Gerberas ──
  { id: 68, name: 'Rainbow Gerbera Bouquet', price: 649, category: 'gerberas', image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&h=400&fit=crop', rating: 4.7 },
  { id: 69, name: 'Pink Gerbera Sunshine', price: 549, category: 'gerberas', image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&h=400&fit=crop', rating: 4.6 },
  { id: 70, name: 'Orange Gerbera Cheer', price: 499, category: 'gerberas', image: 'https://images.unsplash.com/photo-1522776851755-3914469f0ca2?w=400&h=400&fit=crop', rating: 4.5 },

  // ── Get Well Soon ──
  { id: 71, name: 'Get Well Soon Flower Basket', price: 749, category: 'getwellsoon', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=400&fit=crop', rating: 4.7 },
  { id: 72, name: 'Recovery Wishes Bouquet', price: 699, category: 'getwellsoon', image: 'https://images.unsplash.com/photo-1551945378-c1b01bd15eb6?w=400&h=400&fit=crop', rating: 4.6 },

  // ── Congratulations ──
  { id: 73, name: 'Congratulations Grand Bouquet', price: 1199, category: 'congratulations', image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 74, name: 'Success Celebration Flowers', price: 999, category: 'congratulations', image: 'https://images.unsplash.com/photo-1469259943454-aa100abba749?w=400&h=400&fit=crop', rating: 4.7 },

  // ── Dried & Preserved ──
  { id: 75, name: 'Dried Flower Bouquet', price: 549, category: 'dried', image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=400&h=400&fit=crop', rating: 4.5 },
  { id: 76, name: 'Preserved Rose in Glass', price: 899, category: 'dried', image: 'https://images.unsplash.com/photo-1610397648930-477b8c7f0943?w=400&h=400&fit=crop', rating: 4.8 },
  { id: 77, name: 'Dried Lavender Bundle', price: 399, category: 'dried', image: 'https://images.unsplash.com/photo-1590333748338-d629e4564ad9?w=400&h=400&fit=crop', rating: 4.6 },

  // ── Plants ──
  { id: 78, name: 'Peace Lily Indoor Plant', price: 549, category: 'plants', image: 'https://images.unsplash.com/photo-1524598171347-ac834c3fba47?w=400&h=400&fit=crop', rating: 4.7 },
  { id: 79, name: 'Snake Plant Gift', price: 449, category: 'plants', image: 'https://images.unsplash.com/photo-1600000545580-6618a09d3db2?w=400&h=400&fit=crop', rating: 4.5 },
  { id: 80, name: 'Monstera Deliciosa', price: 699, category: 'plants', image: 'https://images.unsplash.com/photo-1585553616435-2dc46a3d3a60?w=400&h=400&fit=crop', rating: 4.8 },
];

const categories = [
  { id: 1, name: 'Roses', icon: '🌹', image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=200&h=200&fit=crop' },
  { id: 2, name: 'Lilies', icon: '🪷', image: 'https://images.unsplash.com/photo-1600000545580-6618a09d3db2?w=200&h=200&fit=crop' },
  { id: 3, name: 'Orchids', icon: '🌸', image: 'https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=200&h=200&fit=crop' },
  { id: 4, name: 'Tulips', icon: '🌷', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=200&h=200&fit=crop' },
  { id: 5, name: 'Sunflowers', icon: '🌻', image: 'https://images.unsplash.com/photo-1551945378-c1b01bd15eb6?w=200&h=200&fit=crop' },
  { id: 6, name: 'Love', icon: '❤️', image: 'https://images.unsplash.com/photo-1518882460395-e6e2f1e6ba36?w=200&h=200&fit=crop' },
  { id: 7, name: 'Friendship', icon: '🤝', image: 'https://images.unsplash.com/photo-1548460397-fba0fdeb3097?w=200&h=200&fit=crop' },
  { id: 8, name: 'Wedding', icon: '💒', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=200&h=200&fit=crop' },
  { id: 9, name: 'Anniversary', icon: '💍', image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=200&h=200&fit=crop' },
  { id: 10, name: 'Birthday', icon: '🎂', image: 'https://images.unsplash.com/photo-1525310555-5801a516c8e2?w=200&h=200&fit=crop' },
  { id: 11, name: 'Bouquets', icon: '💐', image: 'https://images.unsplash.com/photo-1469259943454-aa100abba749?w=200&h=200&fit=crop' },
  { id: 12, name: 'Arrangements', icon: '🏵️', image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=200&h=200&fit=crop' },
  { id: 13, name: 'Carnations', icon: '🌺', image: 'https://images.unsplash.com/photo-1588628566587-30d8e5294025?w=200&h=200&fit=crop' },
  { id: 14, name: 'Gerberas', icon: '🌼', image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=200&h=200&fit=crop' },
  { id: 15, name: 'Plants', icon: '🌿', image: 'https://images.unsplash.com/photo-1524598171347-ac834c3fba47?w=200&h=200&fit=crop' },
  { id: 16, name: 'Dried Flowers', icon: '🌾', image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=200&h=200&fit=crop' },
];

const coupons = [
  { id: 1, code: 'WELCOME15', description: '15% OFF for New Users', discount: 15 },
  { id: 2, code: 'LOVE20', description: '20% OFF Love & Romance Bouquets', discount: 20 },
  { id: 3, code: 'FIRST10', description: '10% OFF First Order', discount: 10 },
  { id: 4, code: 'WEDDING25', description: '25% OFF Wedding Flowers', discount: 25 },
];

async function seed() {
  try {
    console.log('Starting flower-themed seeder for Supabase PostgreSQL...');

    // Drop existing tables
    await pool.query('DROP TABLE IF EXISTS orders');
    await pool.query('DROP TABLE IF EXISTS coupons');
    await pool.query('DROP TABLE IF EXISTS categories');
    await pool.query('DROP TABLE IF EXISTS products');
    console.log('Tables dropped (if existed).');

    // Create tables
    await pool.query(`
      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price NUMERIC NOT NULL,
        category VARCHAR(100) NOT NULL,
        image VARCHAR(500),
        rating NUMERIC
      )
    `);

    await pool.query(`
      CREATE TABLE categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        icon VARCHAR(50),
        image VARCHAR(500)
      )
    `);

    await pool.query(`
      CREATE TABLE coupons (
        id SERIAL PRIMARY KEY,
        code VARCHAR(50) UNIQUE NOT NULL,
        description TEXT,
        discount NUMERIC NOT NULL
      )
    `);

    await pool.query(`
      CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        items JSONB NOT NULL,
        total NUMERIC NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Tables created.');

    // Insert data
    for (const p of products) {
      await pool.query(
        'INSERT INTO products (id, name, price, category, image, rating) VALUES ($1, $2, $3, $4, $5, $6)',
        [p.id, p.name, p.price, p.category, p.image, p.rating]
      );
    }
    console.log(`Inserted ${products.length} products.`);

    for (const c of categories) {
      await pool.query(
        'INSERT INTO categories (id, name, icon, image) VALUES ($1, $2, $3, $4)',
        [c.id, c.name, c.icon, c.image]
      );
    }
    console.log(`Inserted ${categories.length} categories.`);

    for (const c of coupons) {
      await pool.query(
        'INSERT INTO coupons (id, code, description, discount) VALUES ($1, $2, $3, $4)',
        [c.id, c.code, c.description, c.discount]
      );
    }
    console.log(`Inserted ${coupons.length} coupons.`);

    // Reset sequences
    await pool.query(`SELECT setval('products_id_seq', (SELECT MAX(id) FROM products))`);
    await pool.query(`SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories))`);
    await pool.query(`SELECT setval('coupons_id_seq', (SELECT MAX(id) FROM coupons))`);
    console.log('Sequences reset.');

    console.log('Flower-themed database seeded successfully!');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    pool.end();
  }
}

seed();
