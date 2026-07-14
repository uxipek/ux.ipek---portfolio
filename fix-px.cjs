const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

content = content.replace(/className="relative overflow-hidden bg-\[#FDFBF8\] pt-\[80px\] pb-\[48px\] md:pt-\[104px\] md:pb-\[72px\] lg:pt-\[104px\] lg:pb-\[88px\]"/g, 'className="relative overflow-hidden bg-[#FDFBF8] pt-[80px] pb-[48px] md:pt-[104px] md:pb-[72px] lg:pt-[104px] lg:pb-[88px]"');

content = content.replace(/className="px-6 py-\[48px\] md:py-\[64px\] lg:py-\[88px\] bg-base border-y border-dark\/5"/g, 'className="py-[48px] md:py-[64px] lg:py-[88px] bg-base border-y border-dark/5"');

content = content.replace(/className="relative px-6 py-\[48px\] md:py-\[64px\] lg:py-\[88px\] bg-cream overflow-hidden"/g, 'className="relative py-[48px] md:py-[64px] lg:py-[88px] bg-cream overflow-hidden"');

content = content.replace(/className="px-6 py-\[48px\] md:py-\[64px\] lg:py-\[88px\] bg-\[#1E293B\] relative overflow-hidden"/g, 'className="py-[48px] md:py-[64px] lg:py-[88px] bg-[#1E293B] relative overflow-hidden"');

content = content.replace(/className="px-6 py-\[48px\] md:py-\[64px\] lg:py-\[88px\] bg-cream"/g, 'className="py-[48px] md:py-[64px] lg:py-[88px] bg-cream"');

// Fix contact section container
content = content.replace(
  /<div className="mx-auto max-w-4xl text-center">/,
  '<div className="page-container"><div className="max-w-4xl mx-auto text-center">'
);
content = content.replace(
  /<\/div>\n        <\/section>/,
  '</div>\n          </div>\n        </section>'
);

// Remove w-[min(100%-32px,... from inside page-container as page-container handles it
content = content.replace(/w-\[min\(100\%-32px,1000px\)\]/g, 'max-w-[1000px]');
content = content.replace(/w-\[min\(100\%-32px,850px\)\]/g, 'max-w-[850px]');

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
