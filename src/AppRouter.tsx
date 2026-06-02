import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { ServicesPage } from "./pages/Services";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";

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
          <a href="/about" className={`transition-colors ${location.pathname === '/about' ? 'font-semibold text-pink' : 'hover:text-dark'}`}>{lang === 'en' ? 'About' : 'Hakk\u0131nda'}</a>
          <a href="/services" className={`transition-colors ${location.pathname === '/services' ? 'font-semibold text-pink' : 'hover:text-dark'}`}>{lang === 'en' ? 'Services' : 'Hizmetler'}</a>
          <a href={isHome ? "#process" : "/#process"} className="hover:text-dark transition-colors">{lang === 'en' ? 'Process' : 'S\u00FCre\u00E7'}</a>
          <a href={isHome ? "#experience" : "/#experience"} className="hover:text-dark transition-colors">{lang === 'en' ? 'Experience' : 'Deneyim'}</a>
          <a href="/contact" className={`transition-colors ${location.pathname === '/contact' ? 'font-semibold text-pink' : 'hover:text-dark'}`}>{lang === 'en' ? 'Contact' : '\u0130leti\u015Fim'}</a>
        </div>
        <div className="hidden sm:flex items-center font-bold text-[13px] tracking-wide mr-2 bg-dark/5 p-1 rounded-full">
          <button onClick={() => setLang('en')} className={`px-3 py-1.5 rounded-full transition-colors ${lang === 'en' ? 'bg-white text-dark shadow-sm' : 'text-dark/50 hover:text-dark'}`}>EN</button>
          <button onClick={() => setLang('tr')} className={`px-3 py-1.5 rounded-full transition-colors ${lang === 'tr' ? 'bg-white text-dark shadow-sm' : 'text-dark/50 hover:text-dark'}`}>TR</button>
        </div>
        <a href="https://calendly.com/ipekbolakca/dijital-urun-yazilim-cozumleri-uzerine" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 rounded-full bg-[#F75BA8] px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 shadow-lg shadow-[#F75BA8]/20">
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
            <Route path="/about" element={<AboutPage lang={lang} />} />
            <Route path="/contact" element={<ContactPage lang={lang} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
