import React from 'react';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Metadata SEO Statis yang Aman & Cepat
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Ibe Laia | Software Engineer & Full-Stack Developer',
    description: 'Portfolio modern karya Ibe Laia - Software Engineering & Digital Solutions',
    keywords: 'Ibe Laia, Software Engineer, Full-Stack Developer',
    authors: [{ name: 'Ibe Laia' }],
    openGraph: {
      title: 'Ibe Laia | Software Engineer & Full-Stack Developer',
      description: 'Portfolio modern karya Ibe Laia - Software Engineering & Digital Solutions',
      images: [{ url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80' }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Ibe Laia | Software Engineer & Full-Stack Developer',
      description: 'Portfolio modern karya Ibe Laia - Software Engineering & Digital Solutions',
      images: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80'],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Menggunakan konfigurasi tampilan default yang aman dan stabil
  const themeMode = 'dark';
  const accentColor = 'cyan';
  const fontFamily = 'font-sans';

  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`${inter.variable} ${jetbrainsMono.variable} ${themeMode} scroll-smooth`}
      data-accent={accentColor}
    >
      <body 
        suppressHydrationWarning 
        className={`min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] ${fontFamily} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}