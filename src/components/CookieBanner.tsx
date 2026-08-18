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
    <div
      role="dialog"
      aria-modal="false"
      aria-label={lang === 'en' ? 'Cookie preferences' : 'Çerez tercihleri'}
      className="fixed inset-x-0 bottom-0 z-50 sm:bottom-4 sm:right-4 sm:left-auto sm:inset-x-auto sm:max-w-[300px] w-full p-4 sm:p-0"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-brand-primary/10 p-5 overflow-hidden relative max-h-[45vh] sm:max-h-none overflow-y-auto">
        {/* Subtle accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-transformation"></div>

        <h3 className="text-base font-bold text-text-primary mb-2">
          {lang === 'en' ? 'Cookie Preferences' : 'Çerez Tercihleri'}
        </h3>

        <p className="text-text-primary/70 text-xs mb-4 leading-relaxed">
          {lang === 'en'
            ? 'We use cookies to improve your website experience and analyze usage data.'
            : 'Web sitesi deneyimini iyileştirmek ve kullanım verilerini analiz etmek için çerezlerden yararlanıyoruz.'}
        </p>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <button
              onClick={handleRejectOptional}
              className="flex-1 py-2.5 px-3 bg-background text-text-primary border border-brand-primary/10 text-xs font-bold rounded-xl hover:bg-brand-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-transformation/50"
            >
              {lang === 'en' ? 'Reject' : 'Reddet'}
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 py-2.5 px-3 bg-brand-primary text-white text-xs font-bold rounded-xl hover:bg-brand-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-transformation/50"
            >
              {lang === 'en' ? 'Accept All' : 'Tümünü Kabul Et'}
            </button>
          </div>

          <div className="flex justify-between items-center mt-1 pt-2 border-t border-brand-primary/10">
            <Link
              to={`/${lang}/cookie-policy`}
              onClick={() => setIsVisible(false)}
              className="text-brand-transformation hover:underline text-[11px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-transformation/50 rounded"
            >
              {lang === 'en' ? 'Cookie Policy' : 'Çerez Politikası'}
            </Link>

            <button
              onClick={() => setIsVisible(false)}
              className="text-text-primary/50 hover:text-text-primary text-[11px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-transformation/50 rounded"
            >
              {lang === 'en' ? 'Manage Preferences' : 'Tercihleri Yönet'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
