import { neon } from '@neondatabase/serverless';

const connectionString = import.meta.env.VITE_NEON_DB_URL;

export const sql = neon(connectionString);
