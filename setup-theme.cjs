const fs = require('fs');

let cssContent = fs.readFileSync('src/index.css', 'utf8');

// Replace Google Fonts import
cssContent = cssContent.replace(
  /@import url\('https:\/\/fonts\.googleapis\.com\/css2\?family=[^']+'\);/,
  `@import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');`
);

// Update tokens in @theme
const themeReplacement = `@theme {
  --color-brand-primary: #28002C;
  --color-brand-transformation: #CA006C;
  --color-brand-secondary: #D60081;
  --color-brand-technology: #246B9A;
  --color-background: #F7F4F2;
  --color-surface: #FFFFFF;
  --color-text-primary: #28002C;
  --color-text-muted: #8F8787;

  /* Legacy mappings mapped to new semantic colors */
  --color-dark: #28002c; 
  --color-cream: #F7F4F2;
  --color-base: #FFFFFF;
  --color-pink: #CA006C;
  --color-purple: #D60081;
  --color-orange: #E0583A;
  --color-green: #198754;

  --font-sans: "DM Sans", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Playfair Display", ui-serif, Georgia, serif;
  --font-serif: "Playfair Display", ui-serif, Georgia, serif;
  --font-mono: "DM Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;`;

cssContent = cssContent.replace(/@theme\s*{[\s\S]*?--font-serif:[^;]+;/m, themeReplacement);

fs.writeFileSync('src/index.css', cssContent, 'utf8');
