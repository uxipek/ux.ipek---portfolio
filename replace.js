import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace colors
content = content.replace(/bg-\[#1A1A1A\]/g, 'bg-void');
content = content.replace(/bg-\[#141414\]/g, 'bg-surface');
content = content.replace(/border-white\/5/g, 'border-gossamer');
content = content.replace(/border-white\/10/g, 'border-gossamer');
content = content.replace(/border-white\/20/g, 'border-gossamer');
content = content.replace(/border-\[#F27D26\]\/20/g, 'border-monarch/20');
content = content.replace(/border-\[#F27D26\]\/30/g, 'border-monarch/30');
content = content.replace(/border-\[#F27D26\]\/50/g, 'border-monarch/50');
content = content.replace(/bg-\[#F27D26\]/g, 'bg-monarch');
content = content.replace(/bg-\[#F27D26\]\/10/g, 'bg-monarch/10');
content = content.replace(/bg-\[#F27D26\]\/5/g, 'bg-monarch/5');
content = content.replace(/text-\[#F27D26\]/g, 'text-monarch');
content = content.replace(/hover:bg-\[#E06A15\]/g, 'hover:bg-monarch-hover');
content = content.replace(/hover:text-\[#E06A15\]/g, 'hover:text-monarch-hover');
content = content.replace(/text-white/g, 'text-silk');
content = content.replace(/text-zinc-300/g, 'text-silk/90');
content = content.replace(/text-zinc-400/g, 'text-ash');
content = content.replace(/text-zinc-500/g, 'text-ash/70');
content = content.replace(/selection:bg-\[#F27D26\]\/30/g, 'selection:bg-monarch/30');
content = content.replace(/ring-\[#F27D26\]/g, 'ring-aura');
content = content.replace(/focus:border-\[#F27D26\]/g, 'focus:border-aura');

// Add Logo import
content = content.replace('import html2pdf from "html2pdf.js";', 'import html2pdf from "html2pdf.js";\nimport { Logo } from "./components/Logo";');

// Replace Logo in Header
content = content.replace(
  /<span className="text-xl font-bold tracking-tight text-silk">\s*UX<span className="text-monarch">\.Ipek<\/span>\s*<\/span>/g,
  '<Logo className="h-10 w-auto" />'
);

fs.writeFileSync('src/App.tsx', content);
console.log('Done');
