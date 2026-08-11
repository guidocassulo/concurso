const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const htmlPath = path.resolve('scratch/test.html');
const pdfPath = path.resolve('scratch/test.pdf');
const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');

const cmd = `"${edge}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${fileUrl}"`;
console.log('Running command:', cmd);
execSync(cmd);

if (fs.existsSync(pdfPath)) {
  console.log('PDF CREATED SUCCESSFULLY! Size:', fs.statSync(pdfPath).size, 'bytes');
} else {
  console.log('PDF NOT CREATED');
}
