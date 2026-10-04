import { createClient } from '@supabase/supabase-js';

// Menggunakan nilai langsung agar terhindar dari error environment variable Vercel
const supabaseUrl = 'https://zuvlvslecrtalsbaukqi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1dmx2c2xjY3J0YWxzYmF1a3FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyOTI1MTMsImV4cCI6MjEwNDg2ODUxM30.bFjEgfzgxAL8aXrVlxzrR0bTaMcCxCMGoVQk1XiSXvo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);