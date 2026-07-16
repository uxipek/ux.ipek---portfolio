const fs = require('fs');

let cssContent = fs.readFileSync('src/index.css', 'utf8');
cssContent = cssContent.replace(
  /body {\n\s*overflow-x: hidden;\n}/,
  `body {\n  overflow-x: hidden;\n  @apply font-sans text-text-primary bg-background;\n}`
);

fs.writeFileSync('src/index.css', cssContent, 'utf8');
