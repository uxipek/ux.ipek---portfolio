import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Nav({ lang, setLang }: { lang: "en" | "tr", setLang: (l: "en" | "tr") => void }) {
  const location = useLocation();
  const pathname = location.pathname;
  const hash = location.hash;
  
  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/tr' || pathname === '/en/' || pathname === '/tr/';
  const isHome = isHomePage; // Keep for href logic

  const isAboutActive = isHomePage && (!hash || hash === '#about');
  const isServicesActive = pathname.includes('/services');
  const isUxAuditActive = pathname.includes('/ux-audit');
  const isProcessActive = pathname.includes('/process');
  const isPortfolioActive = pathname.includes('/portfolio') || pathname.includes('/case-study') || pathname.toLowerCase().includes('eventgo');
  const isContactActive = (isHomePage && hash === '#contact') || pathname.includes('/contact');

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-dark/5 bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href={`/${lang}`} className="flex items-center gap-2 text-dark">
          <Logo className="h-10 w-auto text-dark" />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-dark/70">
          <a 
            href={isHome ? "#about" : `/${lang}#about`} 
            className={`transition-colors ${isAboutActive ? "text-pink font-semibold" : "hover:text-pink"}`}
            aria-current={isAboutActive ? "page" : undefined}
          >
            {lang === 'en' ? 'About' : 'Hakk\u0131nda'}
          </a>
          <a 
            href={`/${lang}/services`} 
            className={`transition-colors ${isServicesActive ? "text-pink font-semibold" : "hover:text-pink"}`}
            aria-current={isServicesActive ? "page" : undefined}
          >
            {lang === 'en' ? 'Services' : 'Hizmetler'}
          </a>
          <a 
            href={`/${lang}/ux-audit`} 
            className={`transition-colors ${isUxAuditActive ? "text-pink font-semibold" : "hover:text-pink"}`}
            aria-current={isUxAuditActive ? "page" : undefined}
          >
            {lang === 'en' ? 'UX Audit' : 'UX Analizi'}
          </a>
          <a 
            href={`/${lang}/process`} 
            className={`transition-colors ${isProcessActive ? "text-pink font-semibold" : "hover:text-pink"}`}
            aria-current={isProcessActive ? "page" : undefined}
          >
            {lang === 'en' ? 'Process' : 'S\u00FCre\u00E7'}
          </a>
          <a 
            href={`/${lang}/portfolio`} 
            className={`transition-colors ${isPortfolioActive ? "text-pink font-semibold" : "hover:text-pink"}`}
            aria-current={isPortfolioActive ? "page" : undefined}
          >
            {lang === 'en' ? 'Portfolio' : 'Portfolyo'}
          </a>
          <a 
            href={`/${lang}/contact`} 
            className={`transition-colors ${isContactActive ? "text-pink font-semibold" : "hover:text-pink"}`}
            aria-current={isContactActive ? "page" : undefined}
          >
            {lang === 'en' ? 'Contact' : '\u0130leti\u015Fim'}
          </a>
        </div>
        
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center font-bold text-[13px] tracking-wide bg-dark/5 p-1 rounded-full">
            <button onClick={() => setLang('en')} className={`px-3 py-1.5 rounded-full transition-colors ${lang === 'en' ? 'bg-white text-dark shadow-sm' : 'text-dark/50 hover:text-dark'}`}>EN</button>
            <button onClick={() => setLang('tr')} className={`px-3 py-1.5 rounded-full transition-colors ${lang === 'tr' ? 'bg-white text-dark shadow-sm' : 'text-dark/50 hover:text-dark'}`}>TR</button>
          </div>
          <a href={`/${lang}/ux-audit`} className="hidden lg:flex items-center gap-2 rounded-full bg-[#F75BA8] px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 shadow-lg shadow-[#F75BA8]/20">
            {lang === 'en' ? 'Book a UX Audit' : 'UX Analizi Randevusu'}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <a href={`/${lang}/ux-audit`} className="hidden sm:flex items-center gap-2 rounded-full bg-[#F75BA8] px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 shadow-lg shadow-[#F75BA8]/20">
            {lang === 'en' ? 'Book' : 'Randevu'}
          </a>
          <button className="p-2 text-dark/70 hover:text-dark focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-dark/5 shadow-2xl flex flex-col px-6 py-6 space-y-5 font-medium text-dark/80 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <a 
            href={isHome ? "#about" : `/${lang}#about`} 
            onClick={toggleMenu} 
            className={`transition-colors text-lg ${isAboutActive ? "text-pink font-semibold" : "hover:text-pink"}`}
            aria-current={isAboutActive ? "page" : undefined}
          >
            {lang === 'en' ? 'About' : 'Hakk\u0131nda'}
          </a>
          <a 
            href={`/${lang}/services`} 
            onClick={toggleMenu} 
            className={`transition-colors text-lg ${isServicesActive ? "text-pink font-semibold" : "hover:text-pink"}`}
            aria-current={isServicesActive ? "page" : undefined}
          >
            {lang === 'en' ? 'Services' : 'Hizmetler'}
          </a>
          <a 
            href={`/${lang}/ux-audit`} 
            onClick={toggleMenu} 
            className={`transition-colors text-lg ${isUxAuditActive ? "text-pink font-semibold" : "hover:text-pink"}`}
            aria-current={isUxAuditActive ? "page" : undefined}
          >
            {lang === 'en' ? 'UX Audit' : 'UX Analizi'}
          </a>
          <a 
            href={`/${lang}/process`} 
            onClick={toggleMenu} 
            className={`transition-colors text-lg ${isProcessActive ? "text-pink font-semibold" : "hover:text-pink"}`}
            aria-current={isProcessActive ? "page" : undefined}
          >
            {lang === 'en' ? 'Process' : 'S\u00FCre\u00E7'}
          </a>
          <a 
            href={`/${lang}/portfolio`} 
            onClick={toggleMenu} 
            className={`transition-colors text-lg ${isPortfolioActive ? "text-pink font-semibold" : "hover:text-pink"}`}
            aria-current={isPortfolioActive ? "page" : undefined}
          >
            {lang === 'en' ? 'Portfolio' : 'Portfolyo'}
          </a>
          <a 
            href={`/${lang}/contact`} 
            onClick={toggleMenu} 
            className={`transition-colors text-lg ${isContactActive ? "text-pink font-semibold" : "hover:text-pink"}`}
            aria-current={isContactActive ? "page" : undefined}
          >
            {lang === 'en' ? 'Contact' : '\u0130leti\u015Fim'}
          </a>
          
          <div className="flex sm:hidden items-center justify-between pt-4 border-t border-dark/10">
            <div className="flex items-center font-bold text-[13px] tracking-wide bg-dark/5 p-1 rounded-full w-max">
              <button onClick={() => {setLang('en'); toggleMenu()}} className={`px-5 py-2 rounded-full transition-colors ${lang === 'en' ? 'bg-white text-dark shadow-sm' : 'text-dark/50 hover:text-dark'}`}>EN</button>
              <button onClick={() => {setLang('tr'); toggleMenu()}} className={`px-5 py-2 rounded-full transition-colors ${lang === 'tr' ? 'bg-white text-dark shadow-sm' : 'text-dark/50 hover:text-dark'}`}>TR</button>
            </div>
          </div>
          
          <a href={`/${lang}/ux-audit`} onClick={toggleMenu} className="sm:hidden flex items-center justify-center gap-2 rounded-xl bg-[#F75BA8] w-full py-4 text-base font-semibold text-white transition-transform hover:scale-105 shadow-lg shadow-[#F75BA8]/20 mt-4">
            {lang === 'en' ? 'Book a UX Audit' : 'UX Analizi Randevusu'}
          </a>
        </div>
      )}
    </nav>
  );
}
