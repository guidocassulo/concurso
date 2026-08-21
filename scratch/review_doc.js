const fs = require('fs');
const paragraphs = JSON.parse(fs.readFileSync('d:/proyecto/scratch/extracted_guido_final.json', 'utf8'));

console.log('=== PRIMEROS 15 PARRAFOS ===');
paragraphs.slice(0, 15).forEach((p, i) => console.log(`[${i}] ${p.text}`));

console.log('\n=== REVISION DE ERRORES TIPOGRAFICOS / ORTOGRAFICOS / REPETICIONES ===');

const suspiciousPatterns = [
  { name: 'Palabras pegadas con mayúscula intermedia', regex: /[a-záéíóúñ][A-ZÁÉÍÓÚÑ]/ },
  { name: 'Palabras duplicadas consecutivas', regex: /\b(\w{3,})\s+\1\b/i },
  { name: 'Puntos dobles', regex: /\.\./ },
  { name: 'Comas dobles o mal espaciadas', regex: /,,| ,/ },
  { name: 'Falta de punto final en parrafo largo', test: (t) => t.length > 80 && !/[.!?:]$/.test(t) && !/^[0-9]/.test(t) },
  { name: 'Posibles errores de concordancia/verbos', regex: /\b(se impulsaré|se implementaráImplementaré|se promoveré|el Jefatura|la Departamento|ImplementaciónLa)\b/i }
];

paragraphs.forEach((p, idx) => {
  suspiciousPatterns.forEach(sp => {
    if (sp.regex && sp.regex.test(p.text)) {
      const match = p.text.match(sp.regex);
      // Filter out technical names like GitHub, Redmine, JavaScript, PostgreSQL, GitLab
      if (!/GitHub|Redmine|JavaScript|PostgreSQL|GitLab|DevOps|ScrumMaster|TypeScript/i.test(match[0])) {
        console.log(`[${idx}] ${sp.name}: "${match[0]}" -> "${p.text}"`);
      }
    }
    if (sp.test && sp.test(p.text)) {
      console.log(`[${idx}] ${sp.name} -> "${p.text.substring(p.text.length - 80)}"`);
    }
  });
});
