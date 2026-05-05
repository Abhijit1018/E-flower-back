import pg from 'pg';
const { Pool } = pg;

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/eflower';

console.log('Database URL:', connectionString);

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

// Add error handling for connection failures
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

export default pool;
