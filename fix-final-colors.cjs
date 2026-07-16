const fs = require('fs');

let uxAudit = fs.readFileSync('src/pages/UXAudit.tsx', 'utf8');
uxAudit = uxAudit.replace(/hover:bg-\[#2A3B54\]/g, 'hover:bg-brand-primary/90');
uxAudit = uxAudit.replace(/bg-\[#0F172A\]/g, 'bg-brand-primary');
fs.writeFileSync('src/pages/UXAudit.tsx', uxAudit, 'utf8');

let projectDetail = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');
projectDetail = projectDetail.replace(/bg-\[#F5F3EF\]/g, 'bg-background');
fs.writeFileSync('src/pages/ProjectDetail.tsx', projectDetail, 'utf8');

