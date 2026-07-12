import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ArrowUpRight, Lock, Menu, X } from "lucide-react";
import { Logo } from "./components/Logo";

const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const ServicesPage = lazy(() => import("./pages/Services").then(module => ({ default: module.ServicesPage })));
const UXAuditPage = lazy(() => import("./pages/UXAudit").then(module => ({ default: module.UXAuditPage })));
const ContactPage = lazy(() => import("./pages/Contact").then(module => ({ default: module.ContactPage })));
const AboutPage = lazy(() => import("./pages/About").then(module => ({ default: module.AboutPage })));
const PortfolioPage = lazy(() => import("./pages/Portfolio").then(module => ({ default: module.PortfolioPage })));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetail").then(module => ({ default: module.ProjectDetailPage })));

// Legal Pages
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicy").then(module => ({ default: module.PrivacyPolicyPage })));
const KVKKPage = lazy(() => import("./pages/KVKK").then(module => ({ default: module.KVKKPage })));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicy").then(module => ({ default: module.CookiePolicyPage })));
const TermsOfUsePage = lazy(() => import("./pages/TermsOfUse").then(module => ({ default: module.TermsOfUsePage })));

import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";

function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-dark/5 flex items-center justify-center mb-6 text-dark/40">
        <Lock className="w-8 h-8" />
      </div>
      <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-dark mb-4">Coming Soon</h1>
      <p className="text-dark/60 max-w-md mx-auto">This area is currently under development. Check back later for updates on our new client dashboard and subscription services.</p>
    </div>
  );
}

function Nav({ lang, setLang }: { lang: "en" | "tr", setLang: (l: "en" | "tr") => void }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-dark/5 bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2 text-dark">
          <Logo className="h-10 w-auto text-dark" />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-dark/70">
          <a href={isHome ? "#about" : "/#about"} className="hover:text-dark transition-colors">{lang === 'en' ? 'About' : 'Hakk\u0131nda'}</a>
          <a href="/services" className="hover:text-dark transition-colors">{lang === 'en' ? 'Services' : 'Hizmetler'}</a>
          <a href="/ux-audit" className="hover:text-dark transition-colors font-semibold text-pink">{lang === 'en' ? 'UX Audit' : 'UX Analizi'}</a>
          <a href={isHome ? "#process" : "/#process"} className="hover:text-dark transition-colors">{lang === 'en' ? 'Process' : 'S\u00FCre\u00E7'}</a>
          <a href="/portfolio" className="hover:text-dark transition-colors">{lang === 'en' ? 'Portfolio' : 'Portfolyo'}</a>
          <a href={isHome ? "#contact" : "/#contact"} className="hover:text-dark transition-colors">{lang === 'en' ? 'Contact' : '\u0130leti\u015Fim'}</a>
        </div>
        
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center font-bold text-[13px] tracking-wide bg-dark/5 p-1 rounded-full">
            <button onClick={() => setLang('en')} className={`px-3 py-1.5 rounded-full transition-colors ${lang === 'en' ? 'bg-white text-dark shadow-sm' : 'text-dark/50 hover:text-dark'}`}>EN</button>
            <button onClick={() => setLang('tr')} className={`px-3 py-1.5 rounded-full transition-colors ${lang === 'tr' ? 'bg-white text-dark shadow-sm' : 'text-dark/50 hover:text-dark'}`}>TR</button>
          </div>
          <a href="/ux-audit" className="hidden lg:flex items-center gap-2 rounded-full bg-[#F75BA8] px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 shadow-lg shadow-[#F75BA8]/20">
            {lang === 'en' ? 'Book a UX Audit' : 'UX Analizi Randevusu'}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <a href="/ux-audit" className="hidden sm:flex items-center gap-2 rounded-full bg-[#F75BA8] px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 shadow-lg shadow-[#F75BA8]/20">
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
          <a href={isHome ? "#about" : "/#about"} onClick={toggleMenu} className="hover:text-pink transition-colors text-lg">{lang === 'en' ? 'About' : 'Hakk\u0131nda'}</a>
          <a href="/services" onClick={toggleMenu} className="hover:text-pink transition-colors text-lg">{lang === 'en' ? 'Services' : 'Hizmetler'}</a>
          <a href="/ux-audit" onClick={toggleMenu} className="hover:text-pink transition-colors font-semibold text-pink text-lg">{lang === 'en' ? 'UX Audit' : 'UX Analizi'}</a>
          <a href={isHome ? "#process" : "/#process"} onClick={toggleMenu} className="hover:text-pink transition-colors text-lg">{lang === 'en' ? 'Process' : 'S\u00FCre\u00E7'}</a>
          <a href="/portfolio" onClick={toggleMenu} className="hover:text-pink transition-colors text-lg">{lang === 'en' ? 'Portfolio' : 'Portfolyo'}</a>
          <a href={isHome ? "#contact" : "/#contact"} onClick={toggleMenu} className="hover:text-pink transition-colors text-lg">{lang === 'en' ? 'Contact' : '\u0130leti\u015Fim'}</a>
          
          <div className="flex sm:hidden items-center justify-between pt-4 border-t border-dark/10">
            <div className="flex items-center font-bold text-[13px] tracking-wide bg-dark/5 p-1 rounded-full w-max">
              <button onClick={() => {setLang('en'); toggleMenu()}} className={`px-5 py-2 rounded-full transition-colors ${lang === 'en' ? 'bg-white text-dark shadow-sm' : 'text-dark/50 hover:text-dark'}`}>EN</button>
              <button onClick={() => {setLang('tr'); toggleMenu()}} className={`px-5 py-2 rounded-full transition-colors ${lang === 'tr' ? 'bg-white text-dark shadow-sm' : 'text-dark/50 hover:text-dark'}`}>TR</button>
            </div>
          </div>
          
          <a href="/ux-audit" onClick={toggleMenu} className="sm:hidden flex items-center justify-center gap-2 rounded-xl bg-[#F75BA8] w-full py-4 text-base font-semibold text-white transition-transform hover:scale-105 shadow-lg shadow-[#F75BA8]/20 mt-4">
            {lang === 'en' ? 'Book a UX Audit' : 'UX Analizi Randevusu'}
          </a>
        </div>
      )}
    </nav>
  );
}

export default function App() {
  const [lang, setLang] = useState<"en" | "tr">("en");

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-base font-sans text-dark/90 selection:bg-pink/30 flex flex-col">
        <Nav lang={lang} setLang={setLang} />
        <main className="pt-20 flex-grow">
          <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center text-dark/40"><Logo className="h-8 w-auto animate-pulse" /></div>}>
            <Routes>
              <Route path="/" element={<Home lang={lang} />} />
              <Route path="/services" element={<ServicesPage lang={lang} />} />
              <Route path="/ux-audit" element={<UXAuditPage lang={lang} />} />
              <Route path="/contact" element={<ContactPage lang={lang} />} />
              <Route path="/about" element={<AboutPage lang={lang} />} />
              <Route path="/portfolio" element={<PortfolioPage lang={lang} />} />
              <Route path="/projects/:id" element={<ProjectDetailPage lang={lang} />} />
              <Route path="/dashboard" element={<ComingSoon />} />
              <Route path="/reports" element={<ComingSoon />} />
              <Route path="/monthly-ux" element={<ComingSoon />} />
              {/* Legal Routes */}
              <Route path="/privacy-policy" element={<PrivacyPolicyPage lang={lang} />} />
              <Route path="/kvkk" element={<KVKKPage lang={lang} />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage lang={lang} />} />
              <Route path="/terms-of-use" element={<TermsOfUsePage lang={lang} />} />
            </Routes>
          </Suspense>
        </main>
        <Footer lang={lang} />
        <CookieBanner lang={lang} />
      </div>
    </BrowserRouter>
  );
}
