import { Link, useLocation } from 'react-router';
import { Menu, X, Mountain } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Route change closes the menu; Escape closes it and returns focus to the trigger.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  const isActive = (to: string, exact: boolean) =>
    exact ? location.pathname === to : location.pathname.startsWith(to);

  const navLink = (to: string, label: string, exact = false) => {
    const active = isActive(to, exact);
    return (
      <Link
        to={to}
        aria-current={active ? 'page' : undefined}
        className={`relative text-sm font-medium transition-colors pb-0.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c4622d] ${
          active
            ? 'text-[#c4622d]'
            : 'text-[#3b2a1a] hover:text-[#c4622d]'
        }`}
      >
        {label}
        {active && (
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c4622d] rounded-full" />
        )}
      </Link>
    );
  };

  const mobileNavLink = (to: string, label: string, exact = false) => {
    const active = isActive(to, exact);
    return (
      <Link
        to={to}
        aria-current={active ? 'page' : undefined}
        onClick={() => setMobileMenuOpen(false)}
        // min-h-11 keeps every tap target at 44px on touch.
        className={`flex items-center min-h-11 text-sm font-medium transition-colors border-l-2 pl-4 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#c4622d] ${
          active
            ? 'text-[#c4622d] border-[#c4622d]'
            : 'text-[#3b2a1a] border-transparent hover:text-[#c4622d] hover:border-[#c4622d]/40'
        }`}
      >
        {label}
      </Link>
    );
  };

  const langButton = (code: 'en' | 'es') => (
    <button
      type="button"
      onClick={() => setLanguage(code)}
      aria-pressed={language === code}
      lang={code}
      aria-label={
        code === 'es'
          ? language === 'es' ? 'Ver el sitio en español' : 'View the site in Spanish'
          : language === 'es' ? 'Ver el sitio en inglés' : 'View the site in English'
      }
      className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4622d] ${
        language === code
          ? 'bg-[#c4622d] text-white'
          : 'text-[#3b2a1a] hover:bg-[#e8e1d3]'
      }`}
    >
      {code.toUpperCase()}
    </button>
  );

  return (
    <nav
      aria-label={language === 'es' ? 'Principal' : 'Main'}
      className="sticky top-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-sm border-b border-[#3b2a1a]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-[#3b2a1a] rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c4622d]"
          >
            <Mountain className="w-7 h-7" aria-hidden="true" />
            {/* The wordmark stays visible at 375px: the icon alone carries no brand. */}
            <span className="heading font-black tracking-tight text-lg">SENDERO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLink('/', t('nav.home'), true)}
            {navLink('/gear', t('nav.gear'))}
            {navLink('/routes', t('nav.routes'))}
            {navLink('/safety', t('nav.safety'))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div
              role="group"
              aria-label={language === 'es' ? 'Idioma' : 'Language'}
              className="flex items-center gap-0.5 bg-white border border-[#3b2a1a]/10 rounded-lg p-1"
            >
              {langButton('en')}
              {langButton('es')}
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#3b2a1a] p-2.5 -mr-1 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4622d]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={
                mobileMenuOpen
                  ? language === 'es' ? 'Cerrar menú' : 'Close menu'
                  : language === 'es' ? 'Abrir menú' : 'Open menu'
              }
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-3 border-t border-[#3b2a1a]/10">
            <div className="flex flex-col">
              {mobileNavLink('/', t('nav.home'), true)}
              {mobileNavLink('/gear', t('nav.gear'))}
              {mobileNavLink('/routes', t('nav.routes'))}
              {mobileNavLink('/safety', t('nav.safety'))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
