const fs = require('fs');
const code = fs.readFileSync('lovable_app.js', 'utf8');

// The text is likely inside React components. 
// A very crude way is to find string literals or JSX text.
// We can just dump any sequence of words that is reasonably long.
const words = code.match(/[\w\sğüşıöçĞÜŞİÖÇ.,!?\:\;\-\'\"()]{20,}/g);
if (words) {
  const unique = [...new Set(words.map(w => w.trim()))].filter(w => w.length > 20 && /[a-zA-Z]/.test(w));
  fs.writeFileSync('lovable_extracted.txt', unique.join('\n'));
}
