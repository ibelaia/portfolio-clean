'use client';

import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  // Fungsi sederhana untuk translasi teks
  const t = (key: string) => key;

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