const fs = require('fs');

let content = fs.readFileSync('src/components/Nav.tsx', 'utf8');

// The old active logic had bugs like pathname.includes('/portfolio') being true for everything? Wait, no.
// But we need strict matching or at least better matching.

const newLogic = `
  const location = useLocation();
  const pathname = location.pathname;
  const hash = location.hash;

  const currentPath = pathname.replace(/^\\/(en|tr)/, '') || '/';
  
  const isHomePage = currentPath === '/';
  const isHome = isHomePage;
  
  const isAboutActive = isHomePage && (!hash || hash === '#about');
  const isServicesActive = currentPath.startsWith('/services') || (isHomePage && hash === '#services');
  const isUxAuditActive = currentPath.startsWith('/ux-audit');
  const isProcessActive = currentPath.startsWith('/process') || (isHomePage && hash === '#process');
  const isPortfolioActive = currentPath.startsWith('/portfolio') || currentPath.startsWith('/case-study') || currentPath.includes('eventgo');
  const isContactActive = currentPath.startsWith('/contact') || (isHomePage && hash === '#contact');
`;

content = content.replace(
  /const location = useLocation\(\);[\s\S]*?const \[isMenuOpen, setIsMenuOpen\] = useState\(false\);/,
  newLogic + '\n  const [isMenuOpen, setIsMenuOpen] = useState(false);'
);

fs.writeFileSync('src/components/Nav.tsx', content, 'utf8');
