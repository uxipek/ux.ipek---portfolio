const fs = require('fs');
const path = require('path');

const fileExtensions = ['.tsx', '.ts'];
const directories = [
  path.join(__dirname, 'src', 'pages'),
  path.join(__dirname, 'src', 'components')
];

function processFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processFiles(fullPath);
    } else if (fileExtensions.some(ext => fullPath.endsWith(ext))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      // H1 text patterns
      content = content.replace(/className="[^"]*text-\[clamp\(2\.5rem,5vw,4\.75rem\)\][^"]*"/g, (match) => {
          let classes = match.replace(/className="/, '').replace(/"$/, '').split(' ');
          // remove old ones
          classes = classes.filter(c => !c.match(/^(text-\[clamp|leading-\[1\.02\]|tracking-\[-0\.045em\]|font-bold|max-w-\[900px\]|mx-auto|text-5xl|text-6xl|text-7xl|sm:text-|md:text-|lg:text-|tracking-tight|font-medium|leading-none)$/));
          return `className="text-h1 ${classes.join(' ')} mx-auto"`.replace(/\s+/g, ' ');
      });

      // Replace missed H1s
      content = content.replace(/className="[^"]*text-4xl[^"]*md:text-5xl[^"]*lg:text-6xl[^"]*"/g, (match) => {
          if (content.includes('h1')) { // rough check
            let classes = match.replace(/className="/, '').replace(/"$/, '').split(' ');
            classes = classes.filter(c => !c.match(/^(text-|leading-|tracking-|font-|max-w-)/));
            return `className="text-h1 text-dark mb-8 ${classes.join(' ')}"`.replace(/\s+/g, ' ');
          }
          return match;
      });

      // H2 text patterns
      content = content.replace(/className="[^"]*text-\[clamp\(2rem,3\.5vw,3\.25rem\)\][^"]*"/g, (match) => {
          let classes = match.replace(/className="/, '').replace(/"$/, '').split(' ');
          classes = classes.filter(c => !c.match(/^(text-\[clamp|leading-\[1\.1\]|tracking-\[-0\.035em\]|font-bold|max-w-\[850px\]|mx-auto|text-4xl|text-5xl|text-6xl|sm:text-|md:text-|lg:text-|tracking-tight|font-medium|leading-none)$/));
          return `className="text-h2 ${classes.join(' ')}"`.replace(/\s+/g, ' ');
      });

      // missed h2s
      content = content.replace(/<h2[^>]*className="([^"]*text-4xl[^"]*)"/g, (match, p1) => {
          let classes = p1.split(' ');
          classes = classes.filter(c => !c.match(/^(text-|leading-|tracking-|font-|max-w-|sm:|md:|lg:|xl:)/));
          return `<h2 className="text-h2 ${classes.join(' ')}"` .replace(/\s+/g, ' ');
      });
      content = content.replace(/<h2[^>]*className="([^"]*text-3xl[^"]*)"/g, (match, p1) => {
          let classes = p1.split(' ');
          classes = classes.filter(c => !c.match(/^(text-|leading-|tracking-|font-|max-w-|sm:|md:|lg:|xl:)/));
          return `<h2 className="text-h2 ${classes.join(' ')}"` .replace(/\s+/g, ' ');
      });

      // Container
      content = content.replace(/className="[^"]*w-\[min\(100%-32px,1200px\)\][^"]*"/g, (match) => {
          let classes = match.replace(/className="/, '').replace(/"$/, '').split(' ');
          classes = classes.filter(c => !c.match(/^(w-\[min|mx-auto|max-w-6xl|max-w-7xl)/));
          return `className="container-app ${classes.join(' ')}"`.replace(/\s+/g, ' ');
      });

      // Buttons - primary
      content = content.replace(/className="[^"]*bg-\[#ca006c\][^"]*text-white[^"]*transition-all[^"]*"/g, (match) => {
          let classes = match.replace(/className="/, '').replace(/"$/, '').split(' ');
          classes = classes.filter(c => !c.match(/^(bg-\[#ca006c\]|text-white|hover:bg|focus-visible:|shadow|rounded|px-|py-|text-sm|font-bold|min-h-|gap|inline-flex|items-center|justify-center|transition|w-full|sm:w-auto|hover:-translate-y-1|leading-|font-semibold)/));
          return `className="btn-primary-pink w-full sm:w-auto ${classes.join(' ')}"`.replace(/\s+/g, ' ');
      });
      
      // Buttons - light
      content = content.replace(/className="[^"]*bg-white[^"]*border[^"]*transition-all[^"]*"/g, (match) => {
          if (match.includes('btn-light-solid') || match.includes('bg-[#FDFBF8]')) return match;
          let classes = match.replace(/className="/, '').replace(/"$/, '').split(' ');
          classes = classes.filter(c => !c.match(/^(bg-white|border|text-|hover:bg|focus-visible:|shadow|rounded|px-|py-|text-sm|font-bold|min-h-|gap|inline-flex|items-center|justify-center|transition|w-full|sm:w-auto|hover:-translate-y-1|leading-|font-semibold|backdrop-blur-sm|bg-white\/50)/));
          return `className="btn-light-solid w-full sm:w-auto ${classes.join(' ')}"`.replace(/\s+/g, ' ');
      });

      // Large body
      content = content.replace(/className="[^"]*text-\[clamp\(1rem,1\.5vw,1\.2rem\)\][^"]*"/g, (match) => {
          let classes = match.replace(/className="/, '').replace(/"$/, '').split(' ');
          classes = classes.filter(c => !c.match(/^(text-\[clamp|leading-\[1\.7\])/));
          return `className="text-body-lg ${classes.join(' ')}"`.replace(/\s+/g, ' ');
      });

      // H3
      content = content.replace(/className="[^"]*text-\[clamp\(1\.25rem,2vw,1\.65rem\)\][^"]*"/g, (match) => {
          let classes = match.replace(/className="/, '').replace(/"$/, '').split(' ');
          classes = classes.filter(c => !c.match(/^(text-\[clamp|leading-\[1\.25\]|tracking-\[-0\.015em\]|font-semibold)/));
          return `className="text-h3 ${classes.join(' ')}"`.replace(/\s+/g, ' ');
      });

      // Legal pages
      if (file.match(/(PrivacyPolicy|TermsOfUse|KVKK|CookiePolicy).tsx/)) {
        content = content.replace(/max-w-3xl/g, 'max-w-[800px]');
        content = content.replace(/max-w-4xl/g, 'max-w-[800px]');
        content = content.replace(/text-dark\/60/g, 'text-dark/80'); // higher contrast
        content = content.replace(/leading-relaxed/g, 'leading-[1.7]');
      }

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated components in', fullPath);
      }
    }
  }
}

for (const dir of directories) {
  processFiles(dir);
}
