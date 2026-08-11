const finalConfirmedData = [
  {
    name: "Gabriela López (Ingeniera, 10 años gral y dep)",
    written: 27.3,
    antecedentes: 21.50,
    preProject: 48.80,
    projectEst: 18.0,
    interviewEst: 17.0,
    total100: 83.80,
    rankPre: "1° Puesto Pre-Proyecto",
    rankFinal: "🥇 1° Puesto General"
  },
  {
    name: "Participante 4 (Licenciado, 1 año gral, 0 dep)",
    written: 33.0,
    antecedentes: 11.00, // 4 Tit + 1.5 Cap + 0.5 AntGral + 0 AntDep + 5 Legajo
    preProject: 44.00,
    projectEst: 16.5,
    interviewEst: 16.5,
    total100: 77.00,
    rankPre: "2° Puesto Pre-Proyecto",
    rankFinal: "🥉 3° Puesto Final (Superado por Guido)"
  },
  {
    name: "Guido Cassulo (Escenario Escrito Probable 28,6 - 4 años gral y dep)",
    written: 28.6,
    antecedentes: 13.45,
    preProject: 42.05,
    projectEst: 19.0,
    interviewEst: 18.0, // Total Proj+Int = 37.0 Pts
    total100: 79.05,
    rankPre: "3° Puesto Pre-Proyecto",
    rankFinal: "🥈 2° PUESTO GENERAL LOGRADO (Supera a Part. 4 por +2,05 pts)"
  },
  {
    name: "Guido Cassulo (Escenario Escrito Máximo 31,6 - 4 años gral y dep)",
    written: 31.6,
    antecedentes: 13.45,
    preProject: 45.05,
    projectEst: 19.0,
    interviewEst: 18.0,
    total100: 82.05,
    rankPre: "2° Puesto Pre-Proyecto",
    rankFinal: "🥈 2° PUESTO GENERAL SÓLIDO (Supera a Part. 4 por +5,05 pts)"
  },
  {
    name: "Participante 10 (Técnico, 3 años gral y dep)",
    written: 30.2,
    antecedentes: 11.00,
    preProject: 41.20,
    projectEst: 16.5,
    interviewEst: 16.5,
    total100: 74.20,
    rankPre: "4° Puesto Pre-Proyecto",
    rankFinal: "4° Puesto General"
  }
];

console.log('=== FINAL CONFIRMED MATRIX - DECRETO 1843/17 ===\n');
finalConfirmedData.forEach(c => {
  console.log(`${c.name}`);
  console.log(`  Examen Escrito: ${c.written} / 35 | Antecedentes: ${c.antecedentes} / 25 | PRE-PROYECTO: ${c.preProject} / 60 Pts`);
  console.log(`  Proyecto: ${c.projectEst} | Entrevista: ${c.interviewEst} | TOTAL 100 PTS: ${c.total100} / 100 Pts`);
  console.log(`  POSICIÓN FINAL: ${c.rankFinal}\n`);
});
