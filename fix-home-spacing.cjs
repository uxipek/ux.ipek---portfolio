const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Fix spacing on About section (Hero)
content = content.replace(
  /className="relative overflow-hidden bg-\[#FDFBF8\] min-h-\[100vh\] flex items-center pt-24 pb-16"/,
  'className="relative overflow-hidden bg-[#FDFBF8] pt-[120px] pb-[64px] lg:pt-[140px] lg:pb-[88px]"'
);

// Fix spacing on Services section
content = content.replace(
  /className="px-6 py-24 md:py-32 bg-base border-y border-dark\/5"/,
  'className="px-6 py-[64px] lg:py-[88px] bg-base border-y border-dark/5"'
);

// Fix spacing on Process section
content = content.replace(
  /className="relative px-6 py-20 bg-cream overflow-hidden"/,
  'className="relative px-6 py-[64px] lg:py-[88px] bg-cream overflow-hidden"'
);

// Fix spacing on Portfolio section
content = content.replace(
  /className="px-6 py-24 bg-\[#1E293B\] relative overflow-hidden"/,
  'className="px-6 py-[64px] lg:py-[88px] bg-[#1E293B] relative overflow-hidden"'
);

// Fix spacing on Contact section
content = content.replace(
  /className="px-6 py-16 bg-cream"/,
  'className="px-6 py-[64px] lg:py-[88px] bg-cream"'
);

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
