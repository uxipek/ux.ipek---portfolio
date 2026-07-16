const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Find all instances where px-6 is applied to <section> or <div> that also has container-app or page-container,
  // or is the immediate parent of it.
  
  // Since it's tricky to parse HTML, let's just safely remove px-6 from common layout classes.
  // We'll remove ' px-6' from lines that contain 'container-app' or 'page-container'.
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('container-app') || lines[i].includes('page-container')) {
      lines[i] = lines[i].replace(/ px-6/g, '').replace(/px-6 /g, '');
    }
  }
  content = lines.join('\n');

  // Also remove px-6 from all <section ...> since sections should generally either use container-app directly 
  // or wrap a container-app. If a section wraps a container-app, it shouldn't have px-6 itself.
  const sectionRegex = /<section[^>]*className="[^"]*"/g;
  content = content.replace(sectionRegex, (match) => {
    return match.replace(/ px-6/g, '').replace(/px-6 /g, '');
  });

  // What about `<div className="bg-background w-full min-h-screen pt-32 pb-24 px-6">`?
  const divRegex = /<div[^>]*className="[^"]*min-h-screen[^"]*"/g;
  content = content.replace(divRegex, (match) => {
    return match.replace(/ px-6/g, '').replace(/px-6 /g, '');
  });

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

walkDir('src/pages');
