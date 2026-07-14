const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

content = content.replace(
  /<div className="w-full mt-\[-80px\]">/,
  '<div className="w-full">'
);

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
