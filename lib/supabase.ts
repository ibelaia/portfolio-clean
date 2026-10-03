// Objek tiruan universal yang mendukung seluruh rantai query admin dashboard secara aman
export const supabase = {
  from: (table?: string) => ({
    select: (query?: string) => ({
      eq: (...args: any[]) => ({
        single: async () => ({ data: null, error: null }),
        maybeSingle: async () => ({ data: null, error: null }),
        order: (...orderArgs: any[]) => Promise.resolve({ data: [], error: null }),
      }),
      order: (...orderArgs: any[]) => ({
        range: async () => ({ data: [], error: null }),
        then: (resolve: any) => resolve({ data: [], error: null }),
      }),
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
      then: (resolve: any) => resolve({ data: null, error: null }),
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