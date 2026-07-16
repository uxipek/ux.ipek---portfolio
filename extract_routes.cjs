const fs = require('fs');
const code = fs.readFileSync('routes.js', 'utf8');

const matches = code.match(/[\"\`\']([^\"\`\']{10,})[\"\`\']/g);
if (matches) {
  const texts = matches.map(m => m.slice(1, -1).trim())
    .filter(t => t.length > 10 && !t.includes('function') && !t.includes('return') && !t.includes('var ') && !t.includes('import '));
  fs.writeFileSync('lovable_routes.txt', texts.join('\n'));
}
