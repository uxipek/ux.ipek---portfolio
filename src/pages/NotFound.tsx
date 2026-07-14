import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function NotFoundPage({ lang }: { lang: 'en' | 'tr' }) {
  useEffect(() => {
    document.title = lang === 'en' ? '404 - Page Not Found | UXIPEK' : '404 - Sayfa Bulunamadı | UXIPEK';
  }, [lang]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-9xl font-bold text-dark/10 mb-4 tracking-tighter">404</h1>
      <h2 className="text-h2 mb-6">
        {lang === 'en' ? 'Page Not Found' : 'Sayfa Bulunamadı'}
      </h2>
      <p className="text-dark/60 text-lg mb-10 max-w-md">
        {lang === 'en' 
          ? "The page you are looking for doesn't exist or has been moved." 
          : "Aradığınız sayfa mevcut değil veya taşınmış."}
      </p>
      <Link 
        to={`/${lang}`} 
        className="inline-flex items-center gap-2 rounded-full bg-pink px-8 py-4 text-sm font-bold text-white transition-all hover:bg-pink/90 hover:-translate-y-1 hover:shadow-lg"
      >
        <ArrowLeft className="w-4 h-4" />
        {lang === 'en' ? 'Back to Home' : 'Ana Sayfaya Dön'}
      </Link>
    </div>
  );
}
