import { createClient } from '@supabase/supabase-js';

// Menggunakan klien asli Supabase dengan URL placeholder agar lolos pengecekan tipe TypeScript Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key-safe';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);