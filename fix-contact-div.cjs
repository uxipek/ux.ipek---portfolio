const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');
content = content.replace(
  /<\/div>\n        <\/section>\n      <\/div>\n\n      {\/\* Hidden PDF Content \*\//,
  '</div>\n          </div>\n        </section>\n      </div>\n\n      {/* Hidden PDF Content */'
);

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
