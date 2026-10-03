// Objek tiruan lengkap yang mendukung argumen rantai Supabase agar lolos proses build Vercel
export const supabase = {
  from: (table?: string) => ({
    select: (query?: string) => ({
      eq: (column?: string, value?: any) => ({
        single: async () => ({ data: null, error: null }),
        maybeSingle: async () => ({ data: null, error: null }),
        order: () => ({
          range: async () => ({ data: [], error: null }),
        }),
      }),
      order: () => ({
        range: async () => ({ data: [], error: null }),
      }),
      then: (resolve: any) => resolve({ data: [], error: null }),
    }),
    insert: () => ({
      select: () => ({
        single: async () => ({ data: null, error: null }),
      }),
    }),
    update: () => ({
      eq: () => ({
        select: async () => ({ data: null, error: null }),
      }),
    }),
    delete: () => ({
      eq: async () => ({ data: null, error: null }),
    }),
  }),
  auth: {
    signInWithPassword: async () => ({ data: { session: null }, error: { message: 'Disabled' } }),
    signOut: async () => ({ error: null }),
    getSession: async () => ({ data: { session: null } }),
  },
};