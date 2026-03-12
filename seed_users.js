import pool from './db.js';
import bcrypt from 'bcryptjs';

async function seedUsers() {
  try {
    console.log('Starting exact seeder for Users/Addresses...');

    // Drop existing tables
    await pool.query('DROP TABLE IF EXISTS addresses');
    await pool.query('DROP TABLE IF EXISTS users');
    console.log('Tables dropped (if existed).');

    // Create tables
    await pool.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await pool.query(`
      CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        street VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        state VARCHAR(100) NOT NULL,
        zip VARCHAR(20) NOT NULL,
        country VARCHAR(100) DEFAULT 'USA',
        is_default BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Tables created.');

    // Seed a test user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);
    
    const userResult = await pool.query(
      'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id',
      ['Test User', 'test@example.com', hashedPassword]
    );

    const userId = userResult.rows[0].id;
    console.log(`Inserted test user with ID: ${userId}`);

    // Seed a test address
    await pool.query(
      'INSERT INTO addresses (user_id, street, city, state, zip, is_default) VALUES ($1, $2, $3, $4, $5, $6)',
      [userId, '123 Flower Ave', 'Bloomington', 'IN', '47401', true]
    );
    console.log(`Inserted test address for user ${userId}.`);

    console.log('Database users seeded successfully!');
  } catch (err) {
    console.error('Error seeding users database:', err);
  } finally {
    pool.end();
  }
}

seedUsers();
