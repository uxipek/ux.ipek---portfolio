const fs = require('fs');

let content = fs.readFileSync('src/index.css', 'utf8');

// Replace container-app or add page-container
if (!content.includes('.page-container')) {
  content = content.replace(
    /\/\* Shared Container \*\/\s*\.container-app\s*\{\s*@apply w-\[min\(100\%-32px,1200px\)\] mx-auto;\s*\}/,
    '/* Shared Container */\n  .page-container {\n    @apply w-[min(100%-40px,1200px)] mx-auto;\n  }'
  );
  fs.writeFileSync('src/index.css', content, 'utf8');
}
