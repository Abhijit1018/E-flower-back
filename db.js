import pg from 'pg';
const { Pool } = pg;

// Connection string with @ converted to %40 for the password
const connectionString = 'postgresql://postgres:Abhijeetisso%401018@db.kbpeexrusdbisviqedoj.supabase.co:5432/postgres';

const pool = new Pool({
  connectionString,
});

export default pool;
