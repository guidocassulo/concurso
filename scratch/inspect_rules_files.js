const fs = require('fs');

console.log('=== INSPECTING CIRCULARES & DECRETOS FOR ANTECEDENTES RULES ===\n');

function inspectFile(filePath) {
  if (fs.existsSync(filePath)) {
    console.log(`\n==================== ${filePath} ====================`);
    const text = fs.readFileSync(filePath, 'utf8');
    const lines = text.split('\n');
    lines.forEach(l => {
      const lower = l.toLowerCase();
      if (lower.includes('antecedente') || lower.includes('título') || lower.includes('titulo') || lower.includes('capacita') || lower.includes('antigüedad') || lower.includes('puntaje') || lower.includes('escala') || lower.includes('máximo') || lower.includes('puntos') || lower.includes('oposición')) {
        console.log(l.trim().substring(0, 160));
      }
    });
  }
}

inspectFile('circular_902_text.txt');
inspectFile('circular_895_text.txt');
inspectFile('decreto_2250_text.txt');
inspectFile('concurso_previo_text.txt');
