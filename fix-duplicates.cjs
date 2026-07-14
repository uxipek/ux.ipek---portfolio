const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

content = content.replace(
  /className="text-h1 text-white mb-8 md:text-5xl lg:text-6xl mb-6"/,
  'className="text-h1 text-white md:text-5xl lg:text-6xl mb-6"'
);

content = content.replace(
  /className="text-h1 text-dark mb-8 md:text-5xl lg:text-6xl mb-8"/,
  'className="text-h1 text-dark md:text-5xl lg:text-6xl mb-8"'
);

content = content.replace(
  /className="text-h1 text-dark mb-6 md:text-5xl lg:text-6xl mb-6"/,
  'className="text-h1 text-dark md:text-5xl lg:text-6xl mb-6"'
);

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
