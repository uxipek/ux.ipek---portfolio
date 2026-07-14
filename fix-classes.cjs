const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'pages');

const replacements = [
  // Container
  { regex: /max-w-7xl mx-auto px-4 sm:px-6 lg:px-8/g, replacement: 'w-[min(100%-32px,1200px)] mx-auto' },
  { regex: /max-w-3xl mx-auto px-4 sm:px-6 lg:px-8/g, replacement: 'w-[min(100%-32px,850px)] mx-auto' },
  { regex: /max-w-5xl mx-auto px-4 sm:px-6 lg:px-8/g, replacement: 'w-[min(100%-32px,1000px)] mx-auto' },
  { regex: /max-w-4xl mx-auto px-4 sm:px-6 lg:px-8/g, replacement: 'w-[min(100%-32px,1000px)] mx-auto' },
  
  // H1
  { regex: /text-5xl sm:text-7xl lg:text-\[5\.5rem\] font-medium tracking-tight text-dark mb-6 leading-none/g, replacement: 'text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.02] tracking-[-0.045em] font-bold text-dark mb-6 max-w-[900px] mx-auto' },
  { regex: /text-6xl sm:text-7xl lg:text-\[4\.5rem\] font-medium tracking-tight text-dark mb-8 leading-\[1\.05\]/g, replacement: 'text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.02] tracking-[-0.045em] font-bold text-dark mb-6 max-w-[900px]' },
  { regex: /text-4xl sm:text-6xl lg:text-\[4\.5rem\] font-medium tracking-tight text-white mb-6 leading-\[1\.1\]/g, replacement: 'text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.02] tracking-[-0.045em] font-bold text-white mb-6 max-w-[900px] mx-auto' },
  { regex: /text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-dark mb-6 leading-\[1\.1\]/g, replacement: 'text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.02] tracking-[-0.045em] font-bold text-dark mb-6 max-w-[900px] mx-auto' },

  // H2
  { regex: /text-4xl md:text-5xl lg:text-\[56px\] font-medium text-dark tracking-tight leading-\[1\.1\]/g, replacement: 'text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.1] tracking-[-0.035em] font-bold text-dark max-w-[850px]' },
  { regex: /text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-dark mb-6 leading-\[1\.1\]/g, replacement: 'text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.1] tracking-[-0.035em] font-bold text-dark mb-6 max-w-[850px]' },
  { regex: /text-3xl md:text-4xl font-medium text-dark tracking-tight leading-\[1\.2\] mb-8/g, replacement: 'text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.1] tracking-[-0.035em] font-bold text-dark mb-6 max-w-[850px]' },
  { regex: /text-3xl sm:text-4xl md:text-5xl font-medium text-dark tracking-tight leading-\[1\.1\] mb-6/g, replacement: 'text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.1] tracking-[-0.035em] font-bold text-dark mb-6 max-w-[850px]' },

  // H3
  { regex: /text-2xl lg:text-\[28px\] font-medium text-dark tracking-tight leading-\[1\.2\]/g, replacement: 'text-[clamp(1.25rem,2vw,1.65rem)] leading-[1.25] tracking-[-0.015em] font-semibold text-dark' },
  { regex: /text-xl font-medium text-dark mb-2/g, replacement: 'text-[clamp(1.25rem,2vw,1.65rem)] leading-[1.25] tracking-[-0.015em] font-semibold text-dark mb-3' },
  { regex: /text-xl font-medium text-dark mb-4/g, replacement: 'text-[clamp(1.25rem,2vw,1.65rem)] leading-[1.25] tracking-[-0.015em] font-semibold text-dark mb-4' },

  // Large Body
  { regex: /text-xl text-dark\/60 max-w-2xl mx-auto leading-relaxed/g, replacement: 'text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.7] text-dark/70 max-w-[680px] mx-auto' },
  { regex: /text-lg sm:text-xl text-dark\/60 max-w-3xl mx-auto leading-relaxed/g, replacement: 'text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.7] text-dark/70 max-w-[680px] mx-auto' },
  { regex: /text-lg sm:text-xl text-white\/60 max-w-2xl mx-auto leading-relaxed/g, replacement: 'text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.7] text-white/80 max-w-[680px] mx-auto' },
  { regex: /text-lg sm:text-lg text-dark\/70 mb-12 leading-relaxed font-light max-w-\[480px\]/g, replacement: 'text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.7] text-dark/70 max-w-[680px] mb-8' },
  { regex: /text-lg text-dark\/60 leading-relaxed/g, replacement: 'text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.7] text-dark/70 max-w-[680px]' },

  // Normal Body
  { regex: /text-base text-dark\/60 leading-relaxed/g, replacement: 'text-base leading-[1.65] text-dark/70' },

  // Buttons (Primary)
  { regex: /rounded-2xl bg-pink px-8 py-4 text-sm font-bold text-white transition-all shadow-\[0_8px_30px_rgb\(202,0,108,0\.3\)\] hover:shadow-\[0_8px_40px_rgb\(202,0,108,0\.5\)\] hover:-translate-y-1 hover:bg-pink\/90/g, replacement: 'min-h-[48px] px-6 rounded-2xl bg-[#ca006c] text-white text-[0.9375rem] font-semibold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-[#a80058] focus-visible:ring-4 focus-visible:ring-[#ca006c]/30 shadow-lg' },
  { regex: /rounded-2xl bg-[#ca006c] px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#a80058] shadow-lg/g, replacement: 'min-h-[48px] px-6 rounded-2xl bg-[#ca006c] text-white text-[0.9375rem] font-semibold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-[#a80058] focus-visible:ring-4 focus-visible:ring-[#ca006c]/30 shadow-lg' },
  
  // Buttons (Light)
  { regex: /rounded-2xl border border-dark\/10 bg-white\/50 backdrop-blur-sm px-8 py-4 text-sm font-bold text-dark transition-all hover:bg-white hover:-translate-y-1 shadow-sm/g, replacement: 'min-h-[48px] px-6 rounded-2xl bg-white border border-dark/10 text-[#1E293B] text-[0.9375rem] font-semibold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-[#FDFBF8] focus-visible:ring-4 focus-visible:ring-[#1E293B]/10 shadow-sm' },
  
  // Buttons (Dark)
  { regex: /rounded-2xl bg-dark px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-dark\/90 shadow-lg/g, replacement: 'min-h-[48px] px-6 rounded-2xl bg-[#1E293B] text-white text-[0.9375rem] font-semibold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-[#2A3B54] focus-visible:ring-4 focus-visible:ring-[#1E293B]/30 shadow-lg' },

  // Sections
  { regex: /py-20 sm:py-32/g, replacement: 'py-16 md:py-24 lg:py-32' },
  { regex: /py-24 sm:py-32/g, replacement: 'py-16 md:py-24 lg:py-32' },
  { regex: /py-16 sm:py-24/g, replacement: 'py-16 md:py-24 lg:py-32' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      
      for (const replacement of replacements) {
        content = content.replace(replacement.regex, replacement.replacement);
      }

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(directoryPath);
processDirectory(path.join(__dirname, 'src', 'components'));

