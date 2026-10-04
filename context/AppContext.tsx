'use client';

import React, { createContext, useContext } from 'react';

interface AppContextType {
  t: (key: string, fallback?: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  // Fungsi t menerima key dan fallback, mengembalikan fallback atau key-nya
  const t = (key: string, fallback?: string) => fallback || key;

  return (
    <AppContext.Provider value={{ t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}