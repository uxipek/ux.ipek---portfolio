import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function MetaHelper({ lang }: { lang: 'en' | 'tr' }) {
  const location = useLocation();

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Construct the canonical URL
    const canonicalUrl = `${window.location.origin}${location.pathname}`;
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Update or create hreflang links
    const alternateEnPath = location.pathname.replace(/^\/(tr|en)/, '/en');
    const alternateTrPath = location.pathname.replace(/^\/(tr|en)/, '/tr');

    const setHrefLang = (hreflang: string, href: string) => {
      let link = document.querySelector(`link[hreflang="${hreflang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', `${window.location.origin}${href}`);
    };

    setHrefLang('en', alternateEnPath);
    setHrefLang('tr', alternateTrPath);
    setHrefLang('x-default', alternateEnPath);

  }, [lang, location.pathname]);

  return null;
}
