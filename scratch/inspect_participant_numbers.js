const fs = require('fs');

console.log('=== INSPECTING CANDIDATE / PARTICIPANTE NUMBERS ===\n');

['examen_guido.md', 'examen_gaby.md', 'examen_vero.md', 'examen_real_0066_resuelto.md'].forEach(f => {
  if (fs.existsSync('d:\\proyecto\\' + f)) {
    const txt = fs.readFileSync('d:\\proyecto\\' + f, 'utf8');
    const lines = txt.split('\n');
    console.log(`=== FILE: ${f} ===`);
    lines.slice(0, 15).forEach(l => console.log('  ', l));
  }
});
