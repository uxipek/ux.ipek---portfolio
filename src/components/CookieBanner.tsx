import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function CookieBanner({ lang }: { lang: "en" | "tr" }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("uxipek-cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }

    // Listen for custom event to reopen settings
    const handleOpenSettings = () => {
      setIsVisible(true);
    };

    window.addEventListener("openCookieSettings", handleOpenSettings);
    return () => window.removeEventListener("openCookieSettings", handleOpenSettings);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("uxipek-cookie-consent", "all");
    setIsVisible(false);
    
    // In a real implementation, you would enable analytics here
    // e.g., if (window.gtag) window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
  };

  const handleRejectOptional = () => {
    localStorage.setItem("uxipek-cookie-consent", "necessary-only");
    setIsVisible(false);
    
    // In a real implementation, you would disable analytics here
    // e.g., if (window.gtag) window.gtag('consent', 'update', { 'analytics_storage': 'denied' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md w-full">
      <div className="bg-white rounded-2xl shadow-2xl border border-brand-primary/10 p-6 overflow-hidden relative">
        {/* Subtle accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-transformation"></div>
        
        <h3 className="text-lg font-bold text-text-primary mb-2">
          {lang === 'en' ? 'Cookie Preferences' : 'Çerez Tercihleri'}
        </h3>
        
        <p className="text-text-primary/70 text-sm mb-6 leading-relaxed">
          {lang === 'en' 
            ? 'We use cookies to improve your website experience and analyze usage data. You can change your preferences at any time.' 
            : 'Web sitesi deneyimini iyileştirmek ve kullanım verilerini analiz etmek için çerezlerden yararlanıyoruz. Tercihlerinizi dilediğiniz zaman değiştirebilirsiniz.'}
        </p>
        
        <div className="flex flex-col gap-3">
          <button 
            onClick={handleAcceptAll}
            className="w-full py-3 px-4 bg-brand-primary text-white text-sm font-bold rounded-xl hover:bg-brand-primary/90 transition-colors"
          >
            {lang === 'en' ? 'Accept All' : 'Tümünü Kabul Et'}
          </button>
          
          <button 
            onClick={handleRejectOptional}
            className="w-full py-3 px-4 bg-background text-text-primary border border-brand-primary/10 text-sm font-bold rounded-xl hover:bg-brand-primary/5 transition-colors"
          >
            {lang === 'en' ? 'Reject Non-Essential' : 'Zorunlu Olmayanları Reddet'}
          </button>
          
          <div className="flex justify-between items-center mt-2 pt-2 border-t border-brand-primary/10">
            <Link 
              to={`/${lang}/cookie-policy`} 
              onClick={() => setIsVisible(false)}
              className="text-brand-transformation hover:underline text-xs font-medium"
            >
              {lang === 'en' ? 'Cookie Policy' : 'Çerez Politikası'}
            </Link>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="text-text-primary/50 hover:text-text-primary text-xs font-medium transition-colors"
            >
              {lang === 'en' ? 'Manage Preferences' : 'Tercihleri Yönet'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
