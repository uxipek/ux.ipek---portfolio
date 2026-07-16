const fs = require('fs');
const code = fs.readFileSync('lovable_app.js', 'utf8');

// Match jsx text nodes or strings that look like human text
// For example: `children:"some text"` or just `"some text"`
const matches = code.match(/[\"\`\']([^\"\`\']{10,})[\"\`\']/g);
if (matches) {
  const texts = matches.map(m => m.slice(1, -1).trim())
    .filter(t => t.length > 20 && !t.includes('function') && !t.includes('return') && !t.includes('var ') && !t.includes('import '));
  fs.writeFileSync('lovable_extracted2.txt', texts.join('\n'));
}
