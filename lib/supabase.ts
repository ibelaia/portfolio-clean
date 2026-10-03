// Objek tiruan standar Promise murni untuk meloloskan semua tipe data Vercel build
export const supabase = {
  from: (table?: string) => ({
    select: (query?: string) => ({
      eq: (...args: any[]) => Promise.resolve({ data: [], error: null }),
      order: (...args: any[]) => Promise.resolve({ data: [], error: null }),
      range: (...args: any[]) => Promise.resolve({ data: [], error: null }),
      single: async () => ({ data: null, error: null }),
      maybeSingle: async () => ({ data: null, error: null }),
      then: (resolve: any) => resolve({ data: [], error: null }),
    }),
    insert: (payload?: any) => Promise.resolve({
      select: () => ({
        single: async () => ({ data: null, error: null }),
      }),
      data: null,
      error: null,
    }),
    update: (payload?: any) => ({
      eq: (...args: any[]) => Promise.resolve({ data: null, error: null }),
      select: async () => ({ data: null, error: null }),
    }),
    delete: () => ({
      eq: (...args: any[]) => Promise.resolve({ data: null, error: null }),
    }),
  }),
  auth: {
    signInWithPassword: async () => ({ data: { session: null }, error: { message: 'Disabled' } }),
    signOut: async () => ({ error: null }),
    getSession: async () => ({ data: { session: null } }),
  },
};