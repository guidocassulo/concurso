const fs = require('fs');

const guidoTxt = fs.readFileSync('d:\\proyecto\\scratch\\proyecto_guido_reducido.txt', 'utf8');
const gabyTxt = fs.readFileSync('d:\\proyecto\\scratch\\proyecto_gaby.txt', 'utf8');

console.log('=== SECTIONS AND HEADINGS COMPARISON ===\n');

function extractHeadings(text, label) {
  console.log(`\n==================== ${label} ====================`);
  // Match lines with numbers like 1. 2. 2.1 3. 3.1 etc.
  const regex = /(?:\d+\.|\d+\.\d+\.|\d+\.\d+|\b[A-ZÁÉÍÓÚÑ\s]{4,}\b)/g;
  const lines = text.split(/(?=\d+\.\s|\d+\.\d+\s|[A-ZÁÉÍÓÚÑ]{4,}\s)/);
  lines.forEach(l => {
    const trimmed = l.trim().substring(0, 120);
    if (trimmed.length > 5 && (trimmed.match(/^\d+\./) || trimmed.match(/^[A-ZÁÉÍÓÚÑ]{3,}/))) {
      console.log('  ', trimmed);
    }
  });
}

extractHeadings(guidoTxt, 'GUIDO PROJECT (proyecto reducido.docx)');
extractHeadings(gabyTxt, 'GABY PROJECT (Plan_Trabajo_GabrielaLopez.docx)');
