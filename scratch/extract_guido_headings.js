const fs = require('fs');

const guidoTxt = fs.readFileSync('d:\\proyecto\\scratch\\proyecto_guido_reducido.txt', 'utf8');

console.log('=== GUIDO PROJECT DETAILED HEADINGS & CONTENT ===\n');

const lines = guidoTxt.split(/(?=\b\d+\.\s|\b\d+\.\d+\s|\b[A-ZÁÉÍÓÚÑ]{4,}\b)/);
lines.forEach(l => {
  const t = l.trim().substring(0, 150);
  if (t.length > 5 && (t.match(/^\d+\./) || t.match(/^[A-ZÁÉÍÓÚÑ]{4,}/))) {
    console.log(' ->', t);
  }
});
