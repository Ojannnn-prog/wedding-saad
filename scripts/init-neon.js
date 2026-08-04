import { neon } from '@neondatabase/serverless';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, '..', '.env');
const envContent = fs.readFileSync(envPath, 'utf8');

let connectionString = '';
for (const line of envContent.split('\n')) {
  if (line.startsWith('VITE_NEON_DB_URL=')) {
    connectionString = line.split('=').slice(1).join('=').trim();
    break;
  }
}

if (!connectionString) {
  console.error("VITE_NEON_DB_URL not found in .env");
  process.exit(1);
}

const sql = neon(connectionString);

async function init() {
  console.log("Connecting to Neon PostgreSQL...");
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS guestbook (
        id SERIAL PRIMARY KEY,
        nama TEXT NOT NULL,
        pesan TEXT NOT NULL,
        tanggal TIMESTAMPTZ DEFAULT NOW()
      );
    `;
    console.log("✓ Table 'guestbook' successfully created / verified in Neon DB!");

    const rows = await sql`SELECT COUNT(*) FROM guestbook;`;
    console.log(`Current guestbook count: ${rows[0].count}`);
  } catch (error) {
    console.error("Error initializing Neon DB table:", error);
    process.exit(1);
  }
}

init();
