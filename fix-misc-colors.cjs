const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  content = content.replace(/bg-\[#F8F7F4\]/g, 'bg-background');
  content = content.replace(/hover:bg-\[#FDFBF8\]/g, 'hover:bg-background');
  content = content.replace(/bg-\[#F75BA8\]/g, 'bg-brand-transformation');
  content = content.replace(/shadow-\[#F75BA8\]/g, 'shadow-brand-transformation');
  content = content.replace(/fill="#a00055"/g, 'fill="var(--color-brand-secondary)"');
  content = content.replace(/stroke="#0B0014"/g, 'stroke="var(--color-brand-primary)"');
  content = content.replace(/fill="#0B0014"/g, 'fill="var(--color-brand-primary)"');
  content = content.replace(/stopColor="#0B0014"/g, 'stopColor="var(--color-brand-primary)"');
  content = content.replace(/stopColor="#0f0011"/g, 'stopColor="var(--color-brand-primary)"');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir('src');
