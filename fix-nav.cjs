const fs = require('fs');
const path = require('path');

const navPath = path.join(__dirname, 'src', 'components', 'Nav.tsx');
let content = fs.readFileSync(navPath, 'utf8');

content = content.replace(/className=\{`transition-colors \$\{isAboutActive \? "text-pink font-semibold" : "hover:text-pink"\}`\}/g,
  'className={`transition-colors relative pb-1 ${isAboutActive ? "text-[#ca006c] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#ca006c] after:rounded-full" : "hover:text-[#ca006c]"}`}');
content = content.replace(/className=\{`transition-colors \$\{isServicesActive \? "text-pink font-semibold" : "hover:text-pink"\}`\}/g,
  'className={`transition-colors relative pb-1 ${isServicesActive ? "text-[#ca006c] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#ca006c] after:rounded-full" : "hover:text-[#ca006c]"}`}');
content = content.replace(/className=\{`transition-colors \$\{isUxAuditActive \? "text-pink font-semibold" : "hover:text-pink"\}`\}/g,
  'className={`transition-colors relative pb-1 ${isUxAuditActive ? "text-[#ca006c] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#ca006c] after:rounded-full" : "hover:text-[#ca006c]"}`}');
content = content.replace(/className=\{`transition-colors \$\{isProcessActive \? "text-pink font-semibold" : "hover:text-pink"\}`\}/g,
  'className={`transition-colors relative pb-1 ${isProcessActive ? "text-[#ca006c] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#ca006c] after:rounded-full" : "hover:text-[#ca006c]"}`}');
content = content.replace(/className=\{`transition-colors \$\{isPortfolioActive \? "text-pink font-semibold" : "hover:text-pink"\}`\}/g,
  'className={`transition-colors relative pb-1 ${isPortfolioActive ? "text-[#ca006c] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#ca006c] after:rounded-full" : "hover:text-[#ca006c]"}`}');
content = content.replace(/className=\{`transition-colors \$\{isContactActive \? "text-pink font-semibold" : "hover:text-pink"\}`\}/g,
  'className={`transition-colors relative pb-1 ${isContactActive ? "text-[#ca006c] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#ca006c] after:rounded-full" : "hover:text-[#ca006c]"}`}');

// Mobile
content = content.replace(/className=\{`transition-colors text-lg \$\{isAboutActive \? "text-pink font-semibold" : "hover:text-pink"\}`\}/g,
  'className={`transition-colors text-lg ${isAboutActive ? "text-[#ca006c] font-semibold" : "hover:text-[#ca006c]"}`}');
content = content.replace(/className=\{`transition-colors text-lg \$\{isServicesActive \? "text-pink font-semibold" : "hover:text-pink"\}`\}/g,
  'className={`transition-colors text-lg ${isServicesActive ? "text-[#ca006c] font-semibold" : "hover:text-[#ca006c]"}`}');
content = content.replace(/className=\{`transition-colors text-lg \$\{isUxAuditActive \? "text-pink font-semibold" : "hover:text-pink"\}`\}/g,
  'className={`transition-colors text-lg ${isUxAuditActive ? "text-[#ca006c] font-semibold" : "hover:text-[#ca006c]"}`}');
content = content.replace(/className=\{`transition-colors text-lg \$\{isProcessActive \? "text-pink font-semibold" : "hover:text-pink"\}`\}/g,
  'className={`transition-colors text-lg ${isProcessActive ? "text-[#ca006c] font-semibold" : "hover:text-[#ca006c]"}`}');
content = content.replace(/className=\{`transition-colors text-lg \$\{isPortfolioActive \? "text-pink font-semibold" : "hover:text-pink"\}`\}/g,
  'className={`transition-colors text-lg ${isPortfolioActive ? "text-[#ca006c] font-semibold" : "hover:text-[#ca006c]"}`}');
content = content.replace(/className=\{`transition-colors text-lg \$\{isContactActive \? "text-pink font-semibold" : "hover:text-pink"\}`\}/g,
  'className={`transition-colors text-lg ${isContactActive ? "text-[#ca006c] font-semibold" : "hover:text-[#ca006c]"}`}');

fs.writeFileSync(navPath, content, 'utf8');
