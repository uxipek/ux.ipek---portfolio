import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer({ lang }: { lang: "en" | "tr" }) {
  return (
    <footer className="bg-dark text-white py-16 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 lg:gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="inline-block mb-6">
            <Logo className="h-8 w-auto text-white" />
          </Link>
          <p className="text-white/60 font-light text-sm mb-6 max-w-xs">
            {lang === 'en' 
              ? 'AI-Native Product Design Studio focused on user experience and growth.' 
              : 'Kullanıcı deneyimi ve büyüme odaklı Yapay Zeka-Destekli Ürün Tasarım Stüdyosu.'}
          </p>
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} UXIPEK. {lang === 'en' ? 'All rights reserved.' : 'Tüm hakları saklıdır.'}
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm text-pink">UXIPEK</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">{lang === 'en' ? 'About' : 'Hakkında'}</Link></li>
            <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">{lang === 'en' ? 'Services' : 'Hizmetler'}</Link></li>
            <li><Link to="/ux-audit" className="text-white/70 hover:text-white transition-colors">{lang === 'en' ? 'UX Audit' : 'UX Analizi'}</Link></li>
            <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">{lang === 'en' ? 'Contact' : 'İletişim'}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm text-pink">Portfolio</h4>
          <ul className="space-y-4">
            <li><a href="/#portfolio" className="text-white/70 hover:text-white transition-colors">{lang === 'en' ? 'Featured Projects' : 'Öne Çıkanlar'}</a></li>
            <li><Link to="/portfolio" className="text-white/70 hover:text-white transition-colors">{lang === 'en' ? 'Portfolio' : 'Portfolyo'}</Link></li>
            <li><a href="https://www.behance.net/ipekbolakca" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Behance</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm text-pink">Connect</h4>
          <ul className="space-y-4">
            <li><a href="https://www.linkedin.com/in/ipekbolakca" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="https://medium.com/@ipekbolakca" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Medium</a></li>
            <li><a href="https://www.instagram.com/ux.ipek/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Instagram</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm text-pink">Legal</h4>
          <ul className="space-y-4">
            <li><Link to="/privacy-policy" className="text-white/70 hover:text-white transition-colors">{lang === 'en' ? 'Privacy Policy' : 'Gizlilik Politikası'}</Link></li>
            <li><Link to="/kvkk" className="text-white/70 hover:text-white transition-colors">KVKK Aydınlatma Metni</Link></li>
            <li><Link to="/cookie-policy" className="text-white/70 hover:text-white transition-colors">{lang === 'en' ? 'Cookie Policy' : 'Çerez Politikası'}</Link></li>
            <li><Link to="/terms-of-use" className="text-white/70 hover:text-white transition-colors">{lang === 'en' ? 'Terms of Use' : 'Kullanım Koşulları'}</Link></li>
            <li>
              <button 
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('openCookieSettings'));
                }}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                {lang === 'en' ? 'Cookie Preferences' : 'Çerez Tercihleri'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
