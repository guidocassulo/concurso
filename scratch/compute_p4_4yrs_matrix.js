const p4CorrectedData = [
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
    name: "Participante 4 (Licenciado, 4 años gral y dep)",
    written: 33.0,
    antecedentes: 13.50, // 4 Tit + 1.5 Cap + 2 AntGral + 1 AntDep + 5 Legajo
    preProject: 46.50,
    projectEst: 16.5,
    interviewEst: 16.5,
    total100: 79.50,
    rankPre: "2° Puesto Pre-Proyecto",
    rankFinal: "🥈 2° Puesto Previo / 🥉 3° Puesto Final"
  },
  {
    name: "Guido Cassulo (Escenario Escrito Probable 28,6 - 4 años gral y dep)",
    written: 28.6,
    antecedentes: 13.45,
    preProject: 42.05,
    projectEst: 19.0,
    interviewEst: 18.5, // Total Proj+Int = 37.5 Pts
    total100: 79.55,
    rankPre: "3° Puesto Pre-Proyecto",
    rankFinal: "🥈 2° PUESTO GENERAL LOGRADO (Supera a Part 4 por +0,05 pt)"
  },
  {
    name: "Guido Cassulo (Escenario Escrito Máximo 31,6 - 4 años gral y dep)",
    written: 31.6,
    antecedentes: 13.45,
    preProject: 45.05,
    projectEst: 19.0,
    interviewEst: 18.0, // Total Proj+Int = 37.0 Pts
    total100: 82.05,
    rankPre: "3° Puesto Pre-Proyecto",
    rankFinal: "🥈 2° PUESTO GENERAL SÓLIDO (Supera a Part 4 por +2,55 pts)"
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

console.log('=== EXACT COMPUTATION WITH PARTICIPANTE 4 AT 4 YEARS DEPT SENIORITY ===\n');
p4CorrectedData.forEach(c => {
  console.log(`${c.name}`);
  console.log(`  Examen Escrito: ${c.written} / 35 | Antecedentes: ${c.antecedentes} / 25 | PRE-PROYECTO: ${c.preProject} / 60 Pts`);
  console.log(`  Proyecto: ${c.projectEst} | Entrevista: ${c.interviewEst} | TOTAL 100 PTS: ${c.total100} / 100 Pts`);
  console.log(`  POSICIÓN FINAL: ${c.rankFinal}\n`);
});
