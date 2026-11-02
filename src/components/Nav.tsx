import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const CAL_COM_URL = "https://cal.com/ipek-bolakca-s41eqm/ucretsiz-ux-audit";

export function Nav({ lang, setLang }: { lang: "en" | "tr", setLang: (l: "en" | "tr") => void }) {

  const location = useLocation();
  const pathname = location.pathname;
  const hash = location.hash;

  const currentPath = pathname.replace(/^\/(en|tr)/, '') || '/';

  const isHomePage = currentPath === '/';

  const isAboutActive = currentPath.startsWith('/about');
  const isServicesActive = currentPath.startsWith('/services') || (isHomePage && hash === '#services');
  const isUxAuditActive = currentPath.startsWith('/ux-audit');
  const isProcessActive = currentPath.startsWith('/process') || (isHomePage && hash === '#process');
  const isPortfolioActive = currentPath.startsWith('/portfolio') || currentPath.startsWith('/case-study') || currentPath.includes('eventgo');
  const isContactActive = currentPath.startsWith('/contact') || (isHomePage && hash === '#contact');

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-brand-primary/5 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12">
        <Link to={`/${lang}`} className="flex items-center gap-2 text-ink">
          <Logo className="h-10 w-auto text-ink" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-small font-medium text-ink-muted">
          <Link
            to={`/${lang}/about`}
            className={`transition-colors relative pb-1 ${isAboutActive ? "text-accent font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-transformation after:rounded-full" : "hover:text-accent"}`}
            aria-current={isAboutActive ? "page" : undefined}
          >
            {lang === 'en' ? 'About' : 'Hakk\u0131nda'}
          </Link>
          <Link 
            to={`/${lang}/services`} 
            className={`transition-colors relative pb-1 ${isServicesActive ? "text-accent font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-transformation after:rounded-full" : "hover:text-accent"}`}
            aria-current={isServicesActive ? "page" : undefined}
          >
            {lang === 'en' ? 'Services' : 'Hizmetler'}
          </Link>
          <Link 
            to={`/${lang}/ux-audit`} 
            className={`transition-colors relative pb-1 ${isUxAuditActive ? "text-accent font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-transformation after:rounded-full" : "hover:text-accent"}`}
            aria-current={isUxAuditActive ? "page" : undefined}
          >
            {lang === 'en' ? 'UX Audit' : 'UX Analizi'}
          </Link>
          <Link 
            to={`/${lang}/process`} 
            className={`transition-colors relative pb-1 ${isProcessActive ? "text-accent font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-transformation after:rounded-full" : "hover:text-accent"}`}
            aria-current={isProcessActive ? "page" : undefined}
          >
            {lang === 'en' ? 'Process' : 'S\u00FCre\u00E7'}
          </Link>
          <Link 
            to={`/${lang}/portfolio`} 
            className={`transition-colors relative pb-1 ${isPortfolioActive ? "text-accent font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-transformation after:rounded-full" : "hover:text-accent"}`}
            aria-current={isPortfolioActive ? "page" : undefined}
          >
            {lang === 'en' ? 'Portfolio' : 'Portfolyo'}
          </Link>
          <Link 
            to={`/${lang}/contact`} 
            className={`transition-colors relative pb-1 ${isContactActive ? "text-accent font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-transformation after:rounded-full" : "hover:text-accent"}`}
            aria-current={isContactActive ? "page" : undefined}
          >
            {lang === 'en' ? 'Contact' : '\u0130leti\u015Fim'}
          </Link>
        </div>
        
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center font-bold text-small tracking-wide bg-brand-primary/5 p-1 rounded-full">
            <button onClick={() => setLang('en')} className={`px-3 py-1.5 rounded-full transition-colors ${lang === 'en' ? 'bg-white text-ink shadow-sm' : 'text-ink-muted hover:text-ink'}`}>EN</button>
            <button onClick={() => setLang('tr')} className={`px-3 py-1.5 rounded-full transition-colors ${lang === 'tr' ? 'bg-white text-ink shadow-sm' : 'text-ink-muted hover:text-ink'}`}>TR</button>
          </div>
          <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 rounded-full bg-brand-transformation px-6 py-2.5 text-small font-semibold text-white transition-transform hover:scale-105 shadow-lg shadow-brand-transformation/20">
            {lang === 'en' ? 'Book a 15-Min Call' : '15 Dakikalık Görüşme'}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 rounded-full bg-brand-transformation px-4 py-2 text-small font-semibold text-white transition-transform hover:scale-105 shadow-lg shadow-brand-transformation/20">
            {lang === 'en' ? 'Call' : 'Görüşme'}
          </a>
          <button className="p-2 text-ink-muted hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-transformation/50" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-brand-primary/5 shadow-2xl flex flex-col px-6 md:px-8 lg:px-12 py-6 space-y-5 font-medium text-ink max-h-[calc(100vh-5rem)] overflow-y-auto">
          <Link
            to={`/${lang}/about`}
            onClick={toggleMenu}
            className={`transition-colors text-lead ${isAboutActive ? "text-accent font-semibold" : "hover:text-accent"}`}
            aria-current={isAboutActive ? "page" : undefined}
          >
            {lang === 'en' ? 'About' : 'Hakk\u0131nda'}
          </Link>
          <Link 
            to={`/${lang}/services`} 
            onClick={toggleMenu} 
            className={`transition-colors text-lead ${isServicesActive ? "text-accent font-semibold" : "hover:text-accent"}`}
            aria-current={isServicesActive ? "page" : undefined}
          >
            {lang === 'en' ? 'Services' : 'Hizmetler'}
          </Link>
          <Link 
            to={`/${lang}/ux-audit`} 
            onClick={toggleMenu} 
            className={`transition-colors text-lead ${isUxAuditActive ? "text-accent font-semibold" : "hover:text-accent"}`}
            aria-current={isUxAuditActive ? "page" : undefined}
          >
            {lang === 'en' ? 'UX Audit' : 'UX Analizi'}
          </Link>
          <Link 
            to={`/${lang}/process`} 
            onClick={toggleMenu} 
            className={`transition-colors text-lead ${isProcessActive ? "text-accent font-semibold" : "hover:text-accent"}`}
            aria-current={isProcessActive ? "page" : undefined}
          >
            {lang === 'en' ? 'Process' : 'S\u00FCre\u00E7'}
          </Link>
          <Link 
            to={`/${lang}/portfolio`} 
            onClick={toggleMenu} 
            className={`transition-colors text-lead ${isPortfolioActive ? "text-accent font-semibold" : "hover:text-accent"}`}
            aria-current={isPortfolioActive ? "page" : undefined}
          >
            {lang === 'en' ? 'Portfolio' : 'Portfolyo'}
          </Link>
          <Link 
            to={`/${lang}/contact`} 
            onClick={toggleMenu} 
            className={`transition-colors text-lead ${isContactActive ? "text-accent font-semibold" : "hover:text-accent"}`}
            aria-current={isContactActive ? "page" : undefined}
          >
            {lang === 'en' ? 'Contact' : '\u0130leti\u015Fim'}
          </Link>
          
          <div className="flex sm:hidden items-center justify-between pt-4 border-t border-brand-primary/10">
            <div className="flex items-center font-bold text-small tracking-wide bg-brand-primary/5 p-1 rounded-full w-max">
              <button onClick={() => {setLang('en'); toggleMenu()}} className={`px-5 py-2 rounded-full transition-colors ${lang === 'en' ? 'bg-white text-ink shadow-sm' : 'text-ink-muted hover:text-ink'}`}>EN</button>
              <button onClick={() => {setLang('tr'); toggleMenu()}} className={`px-5 py-2 rounded-full transition-colors ${lang === 'tr' ? 'bg-white text-ink shadow-sm' : 'text-ink-muted hover:text-ink'}`}>TR</button>
            </div>
          </div>
          
          <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="sm:hidden flex items-center justify-center gap-2 rounded-xl bg-brand-transformation w-full py-4 text-body font-semibold text-white transition-transform hover:scale-105 shadow-lg shadow-brand-transformation/20 mt-4">
            {lang === 'en' ? 'Book a 15-Min Call' : '15 Dakikalık Görüşme'}
          </a>
        </div>
      )}
    </nav>
  );
}
