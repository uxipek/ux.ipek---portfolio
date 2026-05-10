const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Hero spacing
c = c.replace(/pt-32 pb-24/g, 'pt-24 pb-16');
c = c.replace(/mb-20 md:mb-24/g, 'mb-12 md:mb-16');

// 2. Process section
c = c.replace(/py-32 bg-base/g, 'py-20 bg-base');
c = c.replace(/className="text-center max-w-4xl mx-auto mb-24 md:mb-32"/g, 'className="text-center max-w-4xl mx-auto mb-16 md:mb-20"');
// Phase 02 overlapping fix
c = c.replace(/lg:top-\[180px\]/g, 'lg:top-[20px]');
c = c.replace(/lg:-top-16/g, 'lg:-top-0');
// Quote spacing
c = c.replace(/className="mt-32 mb-16 text-center lg:mt-48 relative z-30"/g, 'className="mt-20 mb-12 text-center lg:mt-24 relative z-30"');
// Bottom CTA spacing
c = c.replace(/mt-16 text-center/g, 'mt-12 text-center');

// 3. Services section
c = c.replace(/id="services" className="px-6 py-24/g, 'id="services" className="px-6 py-16');
c = c.replace(/mb-16 max-w-2xl/g, 'mb-12 max-w-2xl');

// 4. Portfolio section
c = c.replace(/id="portfolio" className="px-6 py-24/g, 'id="portfolio" className="px-6 py-16');

// 5. Experience section
c = c.replace(/id="experience" className="px-6 py-32/g, 'id="experience" className="px-6 py-16');
c = c.replace(/mb-24 max-w-3xl/g, 'mb-12 max-w-3xl');
c = c.replace(/space-y-16/g, 'space-y-12');
c = c.replace(/pb-16 border-b/g, 'pb-10 border-b');
c = c.replace(/mt-24 pt-16 border-t/g, 'mt-16 pt-12 border-t');

// 6. Lead Magnet section
c = c.replace(/className="py-24 bg-base"/g, 'className="py-16 bg-base"');

// 7. Contact section
c = c.replace(/className="px-6 py-24 bg-cream"/g, 'className="px-6 py-16 bg-cream"');

fs.writeFileSync('src/App.tsx', c);
