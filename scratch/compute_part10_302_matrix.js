const candidatesWithPart10_302 = [
  {
    name: "Participante 4 (Licenciado - 1 año antig)",
    written: 33.0,
    antecedentes: 12.5,
    preProject: 45.5,
    projectEst: 17.0,
    postProject: 62.5,
    interviewEst: 16.5,
    total100: 79.0
  },
  {
    name: "Participante 10 (Técnico - 8 años antig)",
    written: 30.2, // Exact written score provided by user
    antecedentes: 17.0,
    preProject: 47.2,
    projectEst: 16.5,
    postProject: 63.7,
    interviewEst: 16.5,
    total100: 80.2
  },
  {
    name: "Participante 2 (Gabriela López - Ingeniera, 10 años)",
    written: 27.3, // Rectificado de 23.3
    antecedentes: 21.0,
    preProject: 48.3,
    projectEst: 18.0,
    postProject: 66.3,
    interviewEst: 17.0,
    total100: 83.3
  },
  {
    name: "Guido Cassulo (Escenario Escrito Probable 28,6)",
    written: 28.6,
    antecedentes: 15.75,
    preProject: 44.35,
    projectEst: 19.0,
    postProject: 63.35,
    interviewEst: 18.0,
    total100: 81.35
  },
  {
    name: "Guido Cassulo (Escenario Escrito Medio 27,6)",
    written: 27.6,
    antecedentes: 15.75,
    preProject: 43.35,
    projectEst: 18.5,
    postProject: 61.85,
    interviewEst: 17.5,
    total100: 79.35
  },
  {
    name: "Guido Cassulo (Escenario Escrito Mínimo 25,0)",
    written: 25.0,
    antecedentes: 15.75,
    preProject: 40.75,
    projectEst: 18.5,
    postProject: 59.25,
    interviewEst: 17.5,
    total100: 76.75
  }
];

console.log('=== EXACT RECALCULATED CONTEST MATRIX WITH PARTICIPANTE 10 AT 30.2 PTS ===\n');
candidatesWithPart10_302.forEach(c => {
  console.log(`${c.name}`);
  console.log(`  Examen Escrito: ${c.written} / 35 Pts`);
  console.log(`  Antecedentes: ${c.antecedentes} / 25 Pts`);
  console.log(`  PRE-PROYECTO: ${c.preProject} / 60 Pts`);
  console.log(`  POST-PROYECTO (Est): ${c.postProject} / 80 Pts`);
  console.log(`  TOTAL 100 PTS CONCURSO (Est): ${c.total100} / 100 Pts\n`);
});
