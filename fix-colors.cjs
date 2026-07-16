const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Colors
  content = content.replace(/#28002[Cc]/g, '#28002C'); // uppercase for consistency
  content = content.replace(/#ca006[Cc]/g, '#CA006C');
  content = content.replace(/#1E293[Bb]/g, '#28002C'); // Replace dark slate with brand-primary
  content = content.replace(/#FDFBF8/g, '#F7F4F2'); // Replace warm ivory with background
  content = content.replace(/bg-dark/g, 'bg-brand-primary');
  content = content.replace(/text-dark/g, 'text-text-primary');
  content = content.replace(/border-dark/g, 'border-brand-primary');
  
  content = content.replace(/bg-pink/g, 'bg-brand-transformation');
  content = content.replace(/text-pink/g, 'text-brand-transformation');
  content = content.replace(/border-pink/g, 'border-brand-transformation');
  content = content.replace(/shadow-pink/g, 'shadow-brand-transformation');
  content = content.replace(/from-pink/g, 'from-brand-transformation');
  
  content = content.replace(/bg-purple/g, 'bg-brand-secondary');
  content = content.replace(/text-purple/g, 'text-brand-secondary');
  content = content.replace(/to-purple/g, 'to-brand-secondary');
  
  content = content.replace(/bg-cream/g, 'bg-background');
  content = content.replace(/bg-base/g, 'bg-surface');

  // Explicit hex replacements in classes
  content = content.replace(/bg-\[#28002C\]/g, 'bg-brand-primary');
  content = content.replace(/text-\[#28002C\]/g, 'text-brand-primary');
  content = content.replace(/bg-\[#CA006C\]/g, 'bg-brand-transformation');
  content = content.replace(/text-\[#CA006C\]/g, 'text-brand-transformation');
  content = content.replace(/bg-\[#F7F4F2\]/g, 'bg-background');

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
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir('src');
