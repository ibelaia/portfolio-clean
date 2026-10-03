// Objek tiruan universal yang menerima argumen dinamis untuk meloloskan semua tipe data dashboard admin
export const supabase = {
  from: (table?: string) => ({
    select: (query?: string) => ({
      eq: (...args: any[]) => ({
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
    insert: (payload?: any) => ({
      select: () => ({
        single: async () => ({ data: null, error: null }),
      }),
      then: (resolve: any) => resolve({ data: null, error: null }),
    }),
    update: (payload?: any) => ({
      eq: (...args: any[]) => ({ data: null, error: null }),
      select: async () => ({ data: null, error: null }),
      then: (resolve: any) => resolve({ data: null, error: null }),
    }),
    delete: () => ({
      eq: (...args: any[]) => ({ data: null, error: null }),
    }),
  }),
  auth: {
    signInWithPassword: async () => ({ data: { session: null }, error: { message: 'Disabled' } }),
    signOut: async () => ({ error: null }),
    getSession: async () => ({ data: { session: null } }),
  },
};