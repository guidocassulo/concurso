const fs = require('fs');
const zlib = require('zlib');
const { execSync } = require('child_process');

console.log('=== EXTRACTING DOCX TEXT VIA ZIP REGEX ===\n');

const docxPath = 'd:\\proyecto\\Plan_Trabajo_Concurso_Jefatura_Software.docx';

// Use powershell Expand-Archive or node unzipping
const psCmd = `powershell -Command "
  Expand-Archive -Path '${docxPath}' -DestinationPath 'd:\\proyecto\\scratch\\docx_unzipped' -Force
"`;

try {
  execSync(psCmd, { stdio: 'inherit' });
  const xmlContent = fs.readFileSync('d:\\proyecto\\scratch\\docx_unzipped\\word\\document.xml', 'utf8');
  // Strip XML tags to get raw text
  const rawText = xmlContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  fs.writeFileSync('d:\\proyecto\\scratch\\guido_project_text.txt', rawText, 'utf8');
  console.log('Extracted text saved to scratch/guido_project_text.txt! Total length:', rawText.length);
  console.log('\n=== FIRST 2000 CHARACTERS OF GUIDO PROJECT ===\n');
  console.log(rawText.substring(0, 2000));
} catch (e) {
  console.error('Error unzipping docx:', e.message);
}
