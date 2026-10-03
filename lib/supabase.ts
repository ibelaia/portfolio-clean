import { createClient } from '@supabase/supabase-js';

// Menggunakan fallback URL aman agar tidak error ERR_NAME_NOT_RESOLVED
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);