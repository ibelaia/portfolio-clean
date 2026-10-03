// Objek tiruan aman agar tidak pernah error malformed URL saat build Vercel
export const supabase = {
  from: () => ({
    select: () => ({
      eq: () => ({
        single: async () => ({ data: null, error: null }),
        maybeSingle: async () => ({ data: null, error: null }),
      }),
    }),
  }),
  auth: {
    signInWithPassword: async () => ({ data: { session: null }, error: { message: 'Disabled' } }),
  },
};