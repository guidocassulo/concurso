const realisticWrittenScores = [28.0, 28.6, 29.0, 30.0];

const antecLevels = [
  { label: "Antecedentes Actuales (Con Cert. Interm)", score: 14.95 },
  { label: "Antecedentes Con ICM Pendientes (+1.25 Pts)", score: 16.20 },
  { label: "Antecedentes Con Cursos Online (>100h) (+3.00 Pts)", score: 17.95 },
  { label: "Antecedentes TECHO MÁXIMO 10 Pts", score: 18.00 }
];

const competitors = [
  { name: "Gabriela López", pre: 48.80, projHigh: 18.5, intHigh: 18.0, totalHigh: 85.30 },
  { name: "Participante 4", pre: 44.00, projStd: 16.5, intStd: 16.5, totalStd: 77.00, projHigh: 18.5, intHigh: 18.0, totalHigh: 80.50, projMax: 19.5, intMax: 19.0, totalMax: 82.50 },
  { name: "Participante 10", pre: 41.70, projStd: 16.5, intStd: 16.5, totalStd: 74.70, projHigh: 18.5, intHigh: 18.0, totalHigh: 78.20, projMax: 19.5, intMax: 19.0, totalMax: 80.20 }
];

console.log('=== REALISTIC WRITTEN EXAM APPEAL ANALYSIS (28.0 - 30.0 PTS) ===\n');

realisticWrittenScores.forEach(w => {
  console.log(`==================== ESCRITO RECTIFICADO = ${w} PTS ====================`);
  antecLevels.forEach(a => {
    const pre = w + a.score;
    // Assume Guido gets solid 18.5 in Project + 18.0 in Interview = 36.5 Pts in oral phase
    const totalGuido = pre + 36.5;
    const diffPart4Std = totalGuido - 77.00;
    const diffPart4High = totalGuido - 80.50;
    const diffPart4Max = totalGuido - 82.50;

    console.log(`  ${a.label.padEnd(46)} | Pre: ${pre.toFixed(2)} | Total (Proj 18.5+18): ${totalGuido.toFixed(2)} Pts`);
    console.log(`    vs Part 4 Estándar (77,00): ${diffPart4Std >= 0 ? '+' : ''}${diffPart4Std.toFixed(2)} Pts | vs Part 4 Alto (80,50): ${diffPart4High >= 0 ? '+' : ''}${diffPart4High.toFixed(2)} Pts | vs Part 4 Inflado (82,50): ${diffPart4Max >= 0 ? '+' : ''}${diffPart4Max.toFixed(2)} Pts`);
  });
  console.log();
});
