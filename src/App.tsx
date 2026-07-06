import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ArrowUpRight, Lock } from "lucide-react";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { ServicesPage } from "./pages/Services";
import { UXAuditPage } from "./pages/UXAudit";

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

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-dark/5 bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2 text-dark">
          <Logo className="h-10 w-auto text-dark" />
        </a>
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-dark/70">
          <a href={isHome ? "#about" : "/#about"} className="hover:text-dark transition-colors">{lang === 'en' ? 'About' : 'Hakk\u0131nda'}</a>
          <a href="/services" className="hover:text-dark transition-colors">{lang === 'en' ? 'Services' : 'Hizmetler'}</a>
          <a href="/ux-audit" className="hover:text-dark transition-colors font-semibold text-pink">{lang === 'en' ? 'UX Audit' : 'UX Analizi'}</a>
          <a href={isHome ? "#process" : "/#process"} className="hover:text-dark transition-colors">{lang === 'en' ? 'Process' : 'S\u00FCre\u00E7'}</a>
          <a href={isHome ? "#experience" : "/#experience"} className="hover:text-dark transition-colors">{lang === 'en' ? 'Experience' : 'Deneyim'}</a>
          <a href={isHome ? "#contact" : "/#contact"} className="hover:text-dark transition-colors">{lang === 'en' ? 'Contact' : '\u0130leti\u015Fim'}</a>
        </div>
        <div className="hidden sm:flex items-center font-bold text-[13px] tracking-wide mr-2 bg-dark/5 p-1 rounded-full">
          <button onClick={() => setLang('en')} className={`px-3 py-1.5 rounded-full transition-colors ${lang === 'en' ? 'bg-white text-dark shadow-sm' : 'text-dark/50 hover:text-dark'}`}>EN</button>
          <button onClick={() => setLang('tr')} className={`px-3 py-1.5 rounded-full transition-colors ${lang === 'tr' ? 'bg-white text-dark shadow-sm' : 'text-dark/50 hover:text-dark'}`}>TR</button>
        </div>
        <a href="/ux-audit" className="hidden sm:flex items-center gap-2 rounded-full bg-[#F75BA8] px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 shadow-lg shadow-[#F75BA8]/20">
          {lang === 'en' ? 'Book a UX Audit' : 'UX Analizi Randevusu'}
        </a>
      </div>
    </nav>
  );
}

export default function App() {
  const [lang, setLang] = useState<"en" | "tr">("en");

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-base font-sans text-dark/90 selection:bg-pink/30">
        <Nav lang={lang} setLang={setLang} />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/services" element={<ServicesPage lang={lang} />} />
            <Route path="/ux-audit" element={<UXAuditPage lang={lang} />} />
            <Route path="/dashboard" element={<ComingSoon />} />
            <Route path="/reports" element={<ComingSoon />} />
            <Route path="/monthly-ux" element={<ComingSoon />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
