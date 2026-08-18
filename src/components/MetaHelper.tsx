import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { STATIC_SEO, SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, SOCIAL_LINKS } from '../data/seo';
import { projects } from '../data/projects';

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setLinkTag(rel: string, href: string, extra?: Record<string, string>) {
  let tag = document.querySelector(`link[rel="${rel}"]${extra?.hreflang ? `[hreflang="${extra.hreflang}"]` : ''}`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    if (extra) {
      Object.entries(extra).forEach(([k, v]) => tag!.setAttribute(k, v));
    }
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

function setJsonLd(id: string, data: object | null) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  if (!data) return;
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

function resolveImageUrl(image: string) {
  return image.startsWith('http') ? image : `${SITE_URL}${image}`;
}

export function MetaHelper({ lang }: { lang: 'en' | 'tr' }) {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang;

    const canonicalUrl = `${SITE_URL}${location.pathname}`;
    setLinkTag('canonical', canonicalUrl);

    const alternateEnPath = location.pathname.replace(/^\/(tr|en)/, '/en');
    const alternateTrPath = location.pathname.replace(/^\/(tr|en)/, '/tr');
    setLinkTag('alternate', `${SITE_URL}${alternateEnPath}`, { hreflang: 'en' });
    setLinkTag('alternate', `${SITE_URL}${alternateTrPath}`, { hreflang: 'tr' });
    setLinkTag('alternate', `${SITE_URL}${alternateEnPath}`, { hreflang: 'x-default' });

    // Path with the /:lang segment stripped, e.g. "/en/services" -> "/services", "/en" -> "/"
    const routePath = location.pathname.replace(/^\/(tr|en)/, '') || '/';

    let title = `${SITE_NAME}`;
    let description = '';
    let image = DEFAULT_OG_IMAGE;
    let jsonLd: object | null = null;

    const projectMatch = routePath.match(/^\/(?:projects|case-study)\/([^/]+)/);
    const project = projectMatch ? projects.find((p) => p.id === projectMatch[1]) : undefined;

    if (project) {
      title = `${project.title} - ${project.category[lang]} | ${SITE_NAME}`;
      description = project.description[lang];
      image = project.coverImage;
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.title,
        headline: `${project.title} - ${project.category[lang]}`,
        description: project.description[lang],
        image: resolveImageUrl(project.coverImage),
        url: canonicalUrl,
        creator: {
          '@type': 'Person',
          name: 'İpek Bolakça',
          url: SITE_URL,
        },
      };
    } else {
      const entry = STATIC_SEO[routePath];
      if (entry) {
        title = entry[lang].title;
        description = entry[lang].description;
      }
      if (routePath === '/') {
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: SITE_NAME,
          description,
          url: SITE_URL,
          image: resolveImageUrl(DEFAULT_OG_IMAGE),
          founder: {
            '@type': 'Person',
            name: 'İpek Bolakça',
            jobTitle: 'UX/UI Designer & Growth Strategist',
            sameAs: SOCIAL_LINKS,
          },
        };
      }
    }

    if (title) document.title = title;

    if (description) {
      setMetaTag('name', 'description', description);
    }

    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:type', project ? 'article' : 'website');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:locale', lang === 'en' ? 'en_US' : 'tr_TR');
    if (title) setMetaTag('property', 'og:title', title);
    if (description) setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', resolveImageUrl(image));

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    if (title) setMetaTag('name', 'twitter:title', title);
    if (description) setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', resolveImageUrl(image));

    setJsonLd('seo-jsonld', jsonLd);
  }, [lang, location.pathname]);

  // Lazy-loaded route chunks mean the target section may not exist in the DOM
  // yet when the hash first matches, so retry briefly (max 20 x 100ms = 2s)
  // instead of scrolling once. The pending timer id is tracked so cleanup can
  // clearTimeout it directly, rather than relying only on a cancelled flag.
  useEffect(() => {
    if (!location.hash) return;
    const id = decodeURIComponent(location.hash.slice(1));
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    let attempts = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        return;
      }
      attempts += 1;
      if (attempts < 20) {
        timeoutId = setTimeout(tryScroll, 100);
      }
    };
    tryScroll();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [location.pathname, location.hash]);

  return null;
}
