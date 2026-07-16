const fs = require('fs');

let cssContent = fs.readFileSync('src/index.css', 'utf8');

// Update typography to use correct fonts
cssContent = cssContent.replace(
  /\.text-h1 {\n\s*@apply text-\[clamp\(2\.5rem,5vw,4\.75rem\)\] leading-\[1\.02\] tracking-\[-0\.045em\] font-bold;\n\s*}/,
  `.text-h1 {\n    @apply text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.02] tracking-[-0.045em] font-bold font-serif text-brand-primary;\n  }`
);

cssContent = cssContent.replace(
  /\.text-h2 {\n\s*@apply text-\[clamp\(2rem,3\.5vw,3\.25rem\)\] leading-\[1\.1\] tracking-\[-0\.035em\] font-bold;\n\s*}/,
  `.text-h2 {\n    @apply text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.1] tracking-[-0.035em] font-bold font-serif text-brand-primary;\n  }`
);

// Body text colors
cssContent = cssContent.replace(
  /\.text-body-lg {\n\s*@apply text-\[clamp\(1rem,1\.5vw,1\.2rem\)\] leading-\[1\.7\];\n\s*}/,
  `.text-body-lg {\n    @apply text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.7] text-text-muted;\n  }`
);

// Buttons
cssContent = cssContent.replace(/bg-\[#ca006c\]/g, 'bg-brand-transformation');
cssContent = cssContent.replace(/hover:bg-\[#a80058\]/g, 'hover:bg-brand-transformation/90');
cssContent = cssContent.replace(/ring-\[#ca006c\]/g, 'ring-brand-transformation');

cssContent = cssContent.replace(/bg-\[#1E293B\]/g, 'bg-brand-primary');
cssContent = cssContent.replace(/hover:bg-\[#2A3B54\]/g, 'hover:bg-brand-primary/90');
cssContent = cssContent.replace(/ring-\[#1E293B\]/g, 'ring-brand-primary');

// Replaces in .btn-light-solid
cssContent = cssContent.replace(/text-\[#1E293B\]/g, 'text-brand-primary');

fs.writeFileSync('src/index.css', cssContent, 'utf8');
