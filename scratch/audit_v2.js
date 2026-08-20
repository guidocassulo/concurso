const fs = require('fs');
const content = fs.readFileSync('scratch/full_text_v2_to_review.txt', 'utf8');
const paras = content.split('\n\n');

console.log('=== AUDITORIA EXHAUSTIVA DE PARRAFOS ===\n');

const issuesFound = [];

paras.forEach((p, idx) => {
  // Check for concatenated duplicate words (like ImplementaráImplementaré)
  const dupMatch = p.match(/([a-záéíóúñ]{4,})\1/i);
  if (dupMatch && !p.includes('institucional')) {
    issuesFound.push({ type: 'DUPLICADO_PEGADO', para: p });
  }

  // Check for 'Se [Verbo en 1ra persona]'
  if (/Se\s+(implementaré|realizaré|estableceré|impulsaré|institucionalizaré|revisaré|determinaré|fomentaré|descentralizaré)/i.test(p)) {
    issuesFound.push({ type: 'VOZ_HIBRIDA_SE', para: p });
  }

  // Check for 'La Jefatura'
  if (/La Jefatura/i.test(p)) {
    issuesFound.push({ type: 'MENCIÓN_JEFATURA_TERCERA_PERSONA', para: p });
  }

  // Check for missing space after period followed by uppercase
  if (/\.[A-ZÁÉÍÓÚÑ]/.test(p)) {
    issuesFound.push({ type: 'PUNTO_PEGADO_SIN_ESPACIO', para: p });
  }

  // Check for broken verb fragments
  if (/\b(Se d|Se imp|Se est)\b/i.test(p)) {
    issuesFound.push({ type: 'FRAGMENTO_VERBO_INCOMPLETO', para: p });
  }
});

console.log(`Total de hallazgos detectados: ${issuesFound.length}\n`);

issuesFound.forEach((item, i) => {
  console.log(`[Hallazgo ${i + 1}] - Tipo: ${item.type}`);
  console.log(item.para);
  console.log('--------------------------------------------------\n');
});
