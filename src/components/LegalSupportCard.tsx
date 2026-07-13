import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Globe, Linkedin, ArrowUpRight } from "lucide-react";

export function LegalSupportCard({ lang }: { lang: "en" | "tr" }) {
  return (
    <div className="mt-16 p-8 md:p-10 rounded-[2rem] bg-white border border-dark/5 shadow-xl shadow-dark/5">
      <h3 className="text-2xl font-medium text-dark mb-4">
        {lang === 'en' ? 'Need assistance?' : 'Yardıma mı ihtiyacınız var?'}
      </h3>
      <p className="text-dark/70 font-light mb-8 max-w-2xl leading-relaxed">
        {lang === 'en'
          ? 'If you have questions regarding privacy, personal data or website usage, feel free to contact UXIPEK.'
          : 'Gizlilik, kişisel veriler veya web sitesi kullanımı ile ilgili sorularınız varsa UXIPEK ile iletişime geçmekten çekinmeyin.'}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <a href="mailto:uxdesigneripek@gmail.com" className="flex items-center gap-3 text-dark hover:text-pink transition-colors">
          <div className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center">
            <Mail className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">uxdesigneripek@gmail.com</span>
        </a>
        
        <a href="tel:+905462275264" className="flex items-center gap-3 text-dark hover:text-pink transition-colors">
          <div className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">+90 546 227 52 64</span>
        </a>

        <a href="https://www.uxipek.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-dark hover:text-pink transition-colors">
          <div className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center">
            <Globe className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">https://www.uxipek.com</span>
        </a>

        <a href="https://linkedin.com/in/ipekbolakca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-dark hover:text-pink transition-colors">
          <div className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center">
            <Linkedin className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
      </div>

      <Link 
        to={`/${lang}/contact`} 
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-dark px-8 py-4 text-sm font-bold text-white transition-all hover:bg-pink shadow-lg shadow-dark/10"
      >
        {lang === 'en' ? 'Contact UXIPEK' : 'UXIPEK İle İletişime Geçin'} <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
