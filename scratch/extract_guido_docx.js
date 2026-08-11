const fs = require('fs');
const { execSync } = require('child_process');

console.log('=== EXTRACTING DOCX TEXT VIA POWERSHELL ZIP ===\n');

function extractDocx(docxPath, outTxt) {
  const zipDir = 'd:\\proyecto\\scratch\\temp_zip_' + Date.now();
  const psCmd = `powershell -Command "Expand-Archive -Path '${docxPath}' -DestinationPath '${zipDir}' -Force"`;
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
    console.error('Error extracting:', e.message);
  }
}

const txt1 = extractDocx('d:\\proyecto\\Plan_Trabajo_Concurso_Jefatura_Software.docx', 'd:\\proyecto\\scratch\\plan_guido_extracted.txt');
const txt2 = extractDocx('d:\\proyecto\\Plan_Trabajo_Jefatura_Software_Version_Director.docx', 'd:\\proyecto\\scratch\\plan_director_extracted.txt');

if (txt1) {
  console.log('\n=== FIRST 2000 CHARS OF GUIDO PLAN DE TRABAJO ===\n');
  console.log(txt1.substring(0, 2000));
}
