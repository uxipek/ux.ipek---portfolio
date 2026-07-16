const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// remove what I just added
css = css.replace(/}\s*\.container-app {\s*@apply w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12;\s*}/, '}');

// add it inside @layer components
css = css.replace(
  /\.page-container {/,
  `.page-container {\n    @apply w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12;\n  }\n  .container-app {\n    @apply w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12;\n  }\n  .page-container-old {`
);

fs.writeFileSync('src/index.css', css, 'utf8');
