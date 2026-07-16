const fs = require('fs');

let content = fs.readFileSync('src/pages/EventGoCaseStudy.tsx', 'utf8');
content = content.replace(/bg-\[#F5F3EF\]/g, 'bg-background');
fs.writeFileSync('src/pages/EventGoCaseStudy.tsx', content, 'utf8');

