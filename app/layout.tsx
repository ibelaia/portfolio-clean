import React from 'react';
import AboutPage from './(public)/about/page';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--bg-primary)] text-[var(--text-main)]">
      {/* Header / Top Navigation Sederhana (bisa dikembangkan nanti) */}
      <header className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="font-mono font-bold tracking-wider text-sm text-accent">
          IBE LAIA // PORTFOLIO
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-xs font-mono text-[var(--text-muted)]">
          <a href="/about" className="hover:text-[var(--text-main)] transition-colors">About</a>
          <a href="/projects" className="hover:text-[var(--text-main)] transition-colors">Projects</a>
          <a href="/certificates" className="hover:text-[var(--text-main)] transition-colors">Certificates</a>
          <a href="/contact" className="hover:text-[var(--text-main)] transition-colors">Contact</a>
        </nav>
      </header>

      {/* Konten Utama (Langsung menampilkan Bento Grid About yang interaktif) */}
      <div className="flex-grow flex items-center">
        <AboutPage />
      </div>

      {/* Footer Sederhana */}
      <footer className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-[var(--card-border)] text-center text-xs text-[var(--text-muted)] font-mono">
        &copy; {new Date().getFullYear()} Ibe Laia. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}