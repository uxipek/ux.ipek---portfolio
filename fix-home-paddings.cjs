const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Hero
content = content.replace(
  /className="relative overflow-hidden bg-\[#FDFBF8\] pt-\[120px\] pb-\[64px\] lg:pt-\[140px\] lg:pb-\[88px\]"/,
  'className="relative overflow-hidden bg-[#FDFBF8] pt-[80px] pb-[48px] md:pt-[104px] md:pb-[72px] lg:pt-[120px] lg:pb-[88px]"' // Increased pt to account for nav
);

// Services
content = content.replace(
  /className="px-6 py-\[64px\] lg:py-\[88px\] bg-base border-y border-dark\/5"/,
  'className="px-6 py-[48px] md:py-[64px] lg:py-[88px] bg-base border-y border-dark/5"'
);

// Process
content = content.replace(
  /className="relative px-6 py-\[64px\] lg:py-\[88px\] bg-cream overflow-hidden"/,
  'className="relative px-6 py-[48px] md:py-[64px] lg:py-[88px] bg-cream overflow-hidden"'
);

// Portfolio
content = content.replace(
  /className="px-6 py-\[64px\] lg:py-\[88px\] bg-\[#1E293B\] relative overflow-hidden"/,
  'className="px-6 py-[48px] md:py-[64px] lg:py-[88px] bg-[#1E293B] relative overflow-hidden"'
);

// Contact
content = content.replace(
  /className="px-6 py-\[64px\] lg:py-\[88px\] bg-cream"/,
  'className="px-6 py-[48px] md:py-[64px] lg:py-[88px] bg-cream"'
);

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
