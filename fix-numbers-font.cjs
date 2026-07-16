const fs = require('fs');

let content = fs.readFileSync('src/pages/About.tsx', 'utf8');
content = content.replace(
  /<p className="text-2xl font-semibold text-text-primary">/g,
  '<p className="text-2xl font-semibold text-text-primary font-mono">'
);
content = content.replace(
  /<div className="text-4xl md:text-5xl font-medium text-white mb-4">/g,
  '<div className="text-4xl md:text-5xl font-medium text-white mb-4 font-mono">'
);
fs.writeFileSync('src/pages/About.tsx', content, 'utf8');

let notFound = fs.readFileSync('src/pages/NotFound.tsx', 'utf8');
notFound = notFound.replace(/className="text-9xl font-bold/g, 'className="text-9xl font-bold font-mono');
fs.writeFileSync('src/pages/NotFound.tsx', notFound, 'utf8');

