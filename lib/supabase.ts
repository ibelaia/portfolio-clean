import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://zuvlslccrtalsbaukqi.supabase.co';

const supabaseAnonKey = 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1dmx2c2xjY3J0YWxzYmF1a3FpIiwicm9sZSI6InBhcnNlZCIsImlhdCI6MTc4OTI5MjUxMywiZXhwIjoyMTA0ODY4NTEzf0.bFjEgfzgxAL8aXrVlxzrR0bTaMcCxCMGoVQk1XiSXvo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);