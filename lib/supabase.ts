import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://zuvlslccrtalsbaukqi.supabase.co';

const supabaseAnonKey = 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_rIzePKk5iQp_N7eZg0tKng_ODNpaCJN';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);