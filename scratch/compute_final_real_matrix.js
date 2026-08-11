const total100Matrix = [
  {
    name: "Gabriela López (Ingeniera, 10 años gral y dep)",
    written: 27.3,
    antecedentes: 21.5,
    preProject: 48.8,
    projectEst: 18.0,
    interviewEst: 17.0,
    total100: 83.8,
    rank: "🥇 1° Puesto General"
  },
  {
    name: "Guido Cassulo (Escenario Escrito Probable 28,6)",
    written: 28.6,
    antecedentes: 13.45,
    preProject: 42.05,
    projectEst: 19.0,
    interviewEst: 18.0,
    total100: 79.05,
    rank: "🥈 2° PUESTO GENERAL LOGRADO"
  },
  {
    name: "Participante 4 (Licenciado, 1 año gral, 0 dep)",
    written: 33.0,
    antecedentes: 11.0,
    preProject: 44.0,
    projectEst: 16.5,
    interviewEst: 16.5,
    total100: 77.0,
    rank: "🥉 3° Puesto General"
  },
  {
    name: "Participante 10 (Técnico, 3 años gral y dep)",
    written: 30.2,
    antecedentes: 11.0,
    preProject: 41.2,
    projectEst: 16.5,
    interviewEst: 16.5,
    total100: 74.2,
    rank: "4° Puesto General"
  },
  {
    name: "Guido Cassulo (Escenario Escrito Conservador 27,6)",
    written: 27.6,
    antecedentes: 13.45,
    preProject: 41.05,
    projectEst: 18.5,
    interviewEst: 18.0,
    total100: 77.55,
    rank: "🥈 2° Puesto General"
  }
];

console.log('=== TOTAL 100 PTS CONCURSO MATRIX WITH REAL CONFIRMED USER FACTS ===\n');
total100Matrix.forEach(c => {
  console.log(`${c.name}`);
  console.log(`  Pre-Proyecto: ${c.preProject} Pts | Proyecto: ${c.projectEst} Pts | Entrevista: ${c.interviewEst} Pts`);
  console.log(`  TOTAL 100 PTS: ${c.total100} / 100 Pts | ${c.rank}\n`);
});
