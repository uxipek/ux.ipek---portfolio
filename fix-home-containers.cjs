const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Replace the 4 occurrences of max-w-7xl
content = content.replace(
  /className="mx-auto max-w-7xl px-6 w-full relative z-10 flex flex-col lg:flex-row items-center mt-6 lg:mt-0"/g,
  'className="page-container relative z-10 flex flex-col lg:flex-row items-center"'
);

content = content.replace(
  /className="mx-auto max-w-7xl"/g,
  'className="page-container"'
);

content = content.replace(
  /className="mx-auto max-w-7xl relative z-10"/g,
  'className="page-container relative z-10"'
);

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
