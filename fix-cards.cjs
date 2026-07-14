const fs = require('fs');
const path = require('path');

function replaceFile(file, replacements) {
  let content = fs.readFileSync(file, 'utf8');
  for (let r of replacements) {
    content = content.replace(r.search, r.replace);
  }
  fs.writeFileSync(file, content, 'utf8');
}

// Home.tsx
replaceFile('src/pages/Home.tsx', [
  {
    search: /className="btn-light-solid w-full sm:w-auto col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 hover:shadow-\[0_20px_40px_rgba\(0,0,0,0\.04\)\] hover:border-dark\/10 overflow-hidden"/g,
    replace: 'className="rounded-[2rem] bg-white border border-dark/5 transition-all duration-500 col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-dark/10 overflow-hidden"'
  },
  {
    search: /className="btn-light-solid w-full sm:w-auto group flex flex-col overflow-hidden hover:border-white\/20 hover:shadow-\[0_8px_30px_rgb\(0,0,0,0\.5\)\]"/g,
    replace: 'className="group flex flex-col rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-500 overflow-hidden hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]"'
  }
]);

// About.tsx
replaceFile('src/pages/About.tsx', [
  {
    search: /className="btn-light-solid w-full sm:w-auto flex-1 relative z-10 p-8 group hover:-translate-y-2"/g,
    replace: 'className="flex-1 relative z-10 bg-white border border-dark/5 shadow-xl shadow-dark/5 rounded-[2rem] p-8 transition-all duration-500 group hover:-translate-y-2"'
  }
]);

// ProjectDetail.tsx
replaceFile('src/pages/ProjectDetail.tsx', [
  {
    search: /className="btn-light-solid w-full sm:w-auto flex"/g,
    replace: 'className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white border border-dark/10 px-8 py-4 text-sm font-bold text-dark transition-all hover:bg-[#FDFBF8] hover:border-dark/20 shadow-sm"'
  }
]);

// Contact.tsx
replaceFile('src/pages/Contact.tsx', [
  {
    search: /className="btn-light-solid w-full sm:w-auto w-16 h-16 shrink-0 flex group-hover:text-\[#ca006c\] group-hover:scale-105"/g,
    replace: 'className="w-16 h-16 rounded-2xl bg-white border border-dark/10 flex items-center justify-center text-dark/60 transition-all duration-300 group-hover:text-[#ca006c] group-hover:scale-105 shadow-sm"'
  },
  {
    search: /className="btn-light-solid w-full sm:w-auto flex p-4 hover:border-blue-500\/30 hover:shadow-md group"/g,
    replace: 'className="rounded-2xl bg-white border border-dark/10 flex items-center justify-center p-4 transition-all duration-300 hover:border-blue-500/30 hover:shadow-md group"'
  },
  {
    search: /className="btn-light-solid w-full sm:w-auto flex p-4 hover:border-\[#1769FF\]\/30 hover:shadow-md group"/g,
    replace: 'className="rounded-2xl bg-white border border-dark/10 flex items-center justify-center p-4 transition-all duration-300 hover:border-[#1769FF]/30 hover:shadow-md group"'
  },
  {
    search: /className="btn-light-solid w-full sm:w-auto flex p-4 hover:border-dark\/30 hover:shadow-md group"/g,
    replace: 'className="rounded-2xl bg-white border border-dark/10 flex items-center justify-center p-4 transition-all duration-300 hover:border-dark/30 hover:shadow-md group"'
  },
  {
    search: /className="btn-light-solid w-full sm:w-auto flex p-4 hover:border-pink-500\/30 hover:shadow-md group"/g,
    replace: 'className="rounded-2xl bg-white border border-dark/10 flex items-center justify-center p-4 transition-all duration-300 hover:border-pink-500/30 hover:shadow-md group"'
  },
  {
    search: /className="btn-light-solid w-full sm:w-auto flex-1 relative z-10 backdrop-blur-xl p-8 group hover:-translate-y-2 duration-500"/g,
    replace: 'className="flex-1 relative z-10 bg-white/60 border border-white backdrop-blur-xl shadow-xl shadow-dark/5 rounded-[2rem] p-8 transition-all duration-500 group hover:-translate-y-2"'
  }
]);

console.log('Fixed cards!');
