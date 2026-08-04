import { createClient } from '@supabase/supabase-js';

// Mengambil URL dan Key dari environment variables Vite (.env)
// Variabel Vite harus diawali dengan VITE_
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
