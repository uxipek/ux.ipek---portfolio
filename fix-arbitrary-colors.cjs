const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace class attributes
  content = content.replace(/from-\[#CA006C\]/g, 'from-brand-transformation');
  content = content.replace(/via-\[#CA006C\]/g, 'via-brand-transformation');
  content = content.replace(/to-\[#CA006C\]/g, 'to-brand-transformation');
  
  content = content.replace(/ring-\[#CA006C\]/g, 'ring-brand-transformation');
  content = content.replace(/shadow-\[#CA006C\]/g, 'shadow-brand-transformation');
  content = content.replace(/border-\[#CA006C\]/g, 'border-brand-transformation');
  content = content.replace(/shadow-\[0_0_10px_#CA006C\]/g, 'shadow-[0_0_10px_var(--color-brand-transformation)]');
  content = content.replace(/shadow-\[0_0_15px_#CA006C\]/g, 'shadow-[0_0_15px_var(--color-brand-transformation)]');

  content = content.replace(/ring-\[#28002C\]/g, 'ring-brand-primary');
  content = content.replace(/shadow-\[#28002C\]/g, 'shadow-brand-primary');
  content = content.replace(/from-\[#28002C\]/g, 'from-brand-primary');
  
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
