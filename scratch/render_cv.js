const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const htmlPath = path.resolve('d:/proyecto/curriculum_guido_cassulo.html');
const pdfPath = path.resolve('d:/proyecto/scratch/cv_rendered.pdf');

const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');

const cmd = `"${edge}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${fileUrl}"`;
console.log('Rendering CV with Edge...');
execSync(cmd);
console.log('CV rendered! Size:', fs.statSync(pdfPath).size);
