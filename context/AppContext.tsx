'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'EN' | 'ID';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  t: (en: string, id: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  // Baca preferensi tersimpan dari browser (localStorage) saat pertama kali dimuat
  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('app_lang') as Language;
    if (savedLang) setLanguage(savedLang);

    const savedTheme = localStorage.getItem('app_theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      // Cek preferensi sistem jika belum ada di localStorage
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Update class HTML & simpan status tema
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('app_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('app_theme', 'light');
    }
  }, [isDark, mounted]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('app_lang', lang);
  };

  // Helper fungsi terjemahan cepat: t('English text', 'Teks Indonesia')
  const t = (en: string, id: string) => (language === 'ID' ? id : en);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        isDark,
        setIsDark,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};