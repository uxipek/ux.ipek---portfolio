import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TR_UX_AUDIT_PATH, toInternalPath, toPublicPath } from '../../lib/paths';

type Language = 'en' | 'tr';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  // /ux-analiz is the public URL of /tr/ux-audit; treat it as Turkish internally.
  const pathParts = toInternalPath(location.pathname).split('/').filter(Boolean);
  const pathLang = pathParts[0] as Language | undefined;
  
  const isValidLang = pathLang === 'en' || pathLang === 'tr';
  const lang = isValidLang ? pathLang : 'en';

  useEffect(() => {
    if (location.pathname === '/') {
      const savedLang = localStorage.getItem('uxipek_lang') as Language;
      if (savedLang === 'en' || savedLang === 'tr') {
        navigate(`/${savedLang}`, { replace: true });
        return;
      }
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('tr')) {
        navigate('/tr', { replace: true });
      } else {
        navigate('/en', { replace: true });
      }
    } else if (location.pathname === '/tr/ux-audit' || location.pathname === '/tr/ux-analiz') {
      navigate(TR_UX_AUDIT_PATH + location.search + location.hash, { replace: true });
    } else if (!isValidLang) {
      // Add 'en' prefix if missing language
      navigate(`/en${location.pathname}`, { replace: true });
    } else {
      localStorage.setItem('uxipek_lang', lang);
      document.documentElement.lang = lang;
      
      // Update SEO tags here could also be done if needed, but react-helmet is better.
      // We can do it manually for now.
    }
  }, [location.pathname, lang, isValidLang, navigate]);

  const handleSetLang = (newLang: Language) => {
    localStorage.setItem('uxipek_lang', newLang);
    if (isValidLang) {
      const newPath = '/' + newLang + (pathParts.slice(1).length > 0 ? '/' + pathParts.slice(1).join('/') : '');
      const hash = location.hash;
      const search = location.search;
      navigate(toPublicPath(newPath) + search + hash);
    } else {
      navigate(`/${newLang}`);
    }
  };

  if (!isValidLang && location.pathname !== '/') {
    return null; // will redirect
  }
  
  if (location.pathname === '/') {
    return null; // will redirect
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
