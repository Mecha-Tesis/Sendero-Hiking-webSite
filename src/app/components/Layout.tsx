import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { useLanguage } from '../context/LanguageContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export function Layout() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#f5f0e8] flex flex-col">
      <ScrollToTop />

      {/* Keyboard users land here first and can jump past the nav. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-3 focus:left-3 focus:px-4 focus:py-2 focus:rounded-full focus:bg-[#3b2a1a] focus:text-[#f5f0e8] focus:font-bold focus:text-sm"
      >
        {language === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>

      <Navigation />
      <main id="main" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
