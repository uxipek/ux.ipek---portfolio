const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

content = content.replace(
  /className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-16"/,
  'className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12"'
);

content = content.replace(
  /className="text-center w-\[min\(100\%-32px,1000px\)\] mx-auto mb-16 md:mb-20"/,
  'className="text-center max-w-[1000px] mx-auto mb-12 md:mb-16"'
);

content = content.replace(
  /className="mt-20 mb-12 text-center lg:mt-24 relative z-30"/,
  'className="mt-12 mb-8 text-center lg:mt-16 relative z-30"'
);

content = content.replace(
  /className="mb-16 max-w-4xl"/,
  'className="mb-12 max-w-4xl"'
);

content = content.replace(
  /className="mt-16 text-center"/,
  'className="mt-12 text-center"'
);

content = content.replace(
  /className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"/,
  'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"'
);

content = content.replace(
  /className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"/,
  'className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"'
);

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
