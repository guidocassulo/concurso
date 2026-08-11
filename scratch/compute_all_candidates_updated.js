const allCandidatesUpdated = [
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
    name: "Guido Cassulo (Escrito 31,6 + Cert. Intermedio)",
    written: 31.6,
    antecedentes: 14.95,
    preProject: 46.55,
    projectEst: 19.0,
    interviewEst: 18.0,
    total100: 83.55,
    rankPre: "2° Puesto Pre-Proyecto",
    rankFinal: "🥈 2° PUESTO GENERAL SÓLIDO"
  },
  {
    name: "Guido Cassulo (Escrito 28,6 + Cursos Extra 10 días = Ant 17,95)",
    written: 28.6,
    antecedentes: 17.95,
    preProject: 46.55,
    projectEst: 19.0,
    interviewEst: 18.0,
    total100: 83.55,
    rankPre: "2° Puesto Pre-Proyecto",
    rankFinal: "🥈 2° PUESTO GENERAL SÓLIDO"
  },
  {
    name: "Participante 4 (Licenciado, 1 año gral, 0 dep)",
    written: 33.0,
    antecedentes: 11.00,
    preProject: 44.00,
    projectEst: 16.5,
    interviewEst: 16.5,
    total100: 77.00,
    rankPre: "3° Puesto Pre-Proyecto",
    rankFinal: "🥉 3° Puesto Final (Superado por Guido por +3,55 pts)"
  },
  {
    name: "Guido Cassulo (Escrito 28,6 + Cert. Intermedio Sin Cursos Extra)",
    written: 28.6,
    antecedentes: 14.95,
    preProject: 43.55,
    projectEst: 19.0,
    interviewEst: 18.0,
    total100: 80.55,
    rankPre: "3° Puesto Pre-Proyecto",
    rankFinal: "🥈 2° PUESTO GENERAL LOGRADO (Supera a Part 4 por +3,55 pts)"
  },
  {
    name: "Participante 10 (Técnico, 3 años + 5 Cursos LinkedIn)",
    written: 30.2,
    antecedentes: 11.50,
    preProject: 41.70,
    projectEst: 16.5,
    interviewEst: 16.5,
    total100: 74.70,
    rankPre: "4° Puesto Pre-Proyecto",
    rankFinal: "4° Puesto General (Queda detrás de Guido por +5,85 pts)"
  }
];

console.log('=== EXACT UPDATED MATRIX FOR ALL 5 CANDIDATES ===\n');
allCandidatesUpdated.forEach(c => {
  console.log(`${c.name}`);
  console.log(`  Escrito: ${c.written} / 35 | Antecedentes: ${c.antecedentes} / 25 | PRE-PROYECTO: ${c.preProject} / 60 Pts`);
  console.log(`  Proyecto: ${c.projectEst} | Entrevista: ${c.interviewEst} | TOTAL 100 PTS: ${c.total100} / 100 Pts`);
  console.log(`  POSICIÓN FINAL: ${c.rankFinal}\n`);
});
