const fs = require('fs');
const { execSync } = require('child_process');

console.log('=== EXTRACTING GUIDO AND GABY PROJECTS FROM PROYECTO PRUEBA ===\n');

function extractDocx(docxPath, outTxt) {
  const zipPath = 'd:\\proyecto\\scratch\\temp_' + Date.now() + '.zip';
  const zipDir = 'd:\\proyecto\\scratch\\unzipped_' + Date.now();
  
  fs.copyFileSync(docxPath, zipPath);
  const psCmd = `powershell -Command "Expand-Archive -Path '${zipPath}' -DestinationPath '${zipDir}' -Force"`;
  try {
    execSync(psCmd, { stdio: 'pipe' });
    const xmlFile = zipDir + '\\word\\document.xml';
    if (fs.existsSync(xmlFile)) {
      const xml = fs.readFileSync(xmlFile, 'utf8');
      const text = xml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      fs.writeFileSync(outTxt, text, 'utf8');
      console.log(`Successfully extracted ${docxPath} -> ${outTxt} (${text.length} chars)`);
      return text;
    }
  } catch (e) {
    console.error('Error extracting:', docxPath, e.message);
  }
}

const pGuido = 'd:\\proyecto\\proyecto prueba\\proyecto reducido.docx';
const pGaby = 'd:\\proyecto\\proyecto prueba\\Plan_Trabajo_Concurso_Jefatura_Software_GabrielaLopez.docx';

const txtGuido = extractDocx(pGuido, 'd:\\proyecto\\scratch\\proyecto_guido_reducido.txt');
const txtGaby = extractDocx(pGaby, 'd:\\proyecto\\scratch\\proyecto_gaby.txt');

console.log('\n=== STATS ===');
console.log('Guido (proyecto reducido.docx) chars:', txtGuido ? txtGuido.length : 0);
console.log('Gaby (Plan_Trabajo...GabrielaLopez.docx) chars:', txtGaby ? txtGaby.length : 0);
