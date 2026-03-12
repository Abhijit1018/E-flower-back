import pg from 'pg';
const { Pool } = pg;

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:Abhijeetisso%401018@db.kbpeexrusdbisviqedoj.supabase.co:5432/postgres';

const pool = new Pool({
  connectionString,
});

export default pool;
