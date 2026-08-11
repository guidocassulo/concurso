const fs = require('fs');

const guido = fs.readFileSync('examen_guido.md', 'utf8');
const gaby = fs.readFileSync('examen_gaby.md', 'utf8');
const vero = fs.readFileSync('examen_vero.md', 'utf8');

console.log('=== AUDITING ALL BLOCKS FOR GUIDO, GABY, VERO ===\n');

function parseQuestions(text, name) {
  console.log(`\n==================== ${name} ====================`);
  const lines = text.split('\n');
  lines.forEach(l => {
    if (l.includes('Puntaje del bloque') || l.includes('Puntuación TOTAL') || l.includes('Calificación del corrector:') || l.includes('Puntaje obtenido:') || l.includes('Puntaje:')) {
      console.log(l);
    }
  });
}

parseQuestions(guido, 'GUIDO');
parseQuestions(gaby, 'GABY');
parseQuestions(vero, 'VERO');
