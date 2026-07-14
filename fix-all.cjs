const fs = require('fs');
const path = require('path');

const fileExtensions = ['.tsx', '.ts'];

const directories = [
  path.join(__dirname, 'src', 'pages'),
  path.join(__dirname, 'src', 'components')
];

function processFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processFiles(fullPath);
    } else if (fileExtensions.some(ext => fullPath.endsWith(ext))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      // H1 Replacements
      content = content.replace(/text-4xl sm:text-6xl lg:text-\[4\.5rem\] font-medium tracking-tight text-white mb-6 leading-\[1\.1\]/g, 
        'text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.02] tracking-[-0.045em] font-bold text-white mb-6 max-w-[900px] mx-auto');
      content = content.replace(/text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-dark mb-8 leading-\[1\.05\]/g, 
        'text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.02] tracking-[-0.045em] font-bold text-dark mb-6 max-w-[900px] mx-auto');
      content = content.replace(/text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-dark mb-6 leading-\[1\.1\]/g, 
        'text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.02] tracking-[-0.045em] font-bold text-dark mb-6 max-w-[900px] mx-auto');

      // H2 Replacements
      content = content.replace(/text-3xl md:text-5xl font-medium text-dark mb-6 tracking-tight/g, 
        'text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.1] tracking-[-0.035em] font-bold text-dark mb-6 max-w-[850px]');
      content = content.replace(/text-4xl md:text-5xl font-medium text-dark tracking-tight/g, 
        'text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.1] tracking-[-0.035em] font-bold text-dark max-w-[850px]');

      // H3 Replacements
      content = content.replace(/text-\[15px\] font-semibold text-dark\/80 leading-snug/g, 
        'text-base font-semibold leading-[1.65] text-dark');
      content = content.replace(/text-xl md:text-2xl font-light text-dark\/70 leading-relaxed/g, 
        'text-[clamp(1.25rem,2vw,1.65rem)] leading-[1.25] tracking-[-0.015em] font-semibold text-dark');

      // Body replacements
      content = content.replace(/text-dark\/60 text-lg font-light leading-relaxed/g, 
        'text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.7] text-dark/70 max-w-[680px]');

      // Container
      content = content.replace(/max-w-6xl mx-auto/g, 'w-[min(100%-32px,1200px)] mx-auto');
      content = content.replace(/max-w-7xl mx-auto/g, 'w-[min(100%-32px,1200px)] mx-auto');
      content = content.replace(/max-w-4xl mx-auto/g, 'w-[min(100%-32px,1000px)] mx-auto');
      content = content.replace(/max-w-2xl mx-auto/g, 'w-[min(100%-32px,850px)] mx-auto');
      content = content.replace(/max-w-3xl mx-auto/g, 'w-[min(100%-32px,850px)] mx-auto');

      // Sections
      content = content.replace(/px-6 py-32/g, 'py-16 md:py-24 lg:py-32 w-full');
      content = content.replace(/py-20 sm:py-32/g, 'py-16 md:py-24 lg:py-32 w-full');

      // Buttons
      content = content.replace(/rounded-2xl bg-\[#ca006c\] px-8 py-4 text-sm font-bold text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-\[#ca006c\]\/90/g, 
        'min-h-[48px] px-6 rounded-2xl bg-[#ca006c] text-white text-[0.9375rem] font-semibold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-[#a80058] focus-visible:ring-4 focus-visible:ring-[#ca006c]/30 shadow-lg');
      content = content.replace(/rounded-2xl border border-white\/20 bg-white\/5 backdrop-blur-sm px-8 py-5 text-sm font-bold text-white transition-all hover:bg-white\/10 hover:-translate-y-1/g, 
        'min-h-[48px] px-6 rounded-2xl bg-transparent border border-white/20 text-white text-[0.9375rem] font-semibold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-white/5 focus-visible:ring-4 focus-visible:ring-white/20');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated', fullPath);
      }
    }
  }
}

for (const dir of directories) {
  processFiles(dir);
}
