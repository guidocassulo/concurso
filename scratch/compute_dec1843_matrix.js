const baremoDec1843 = [
  {
    name: "Gabriela López (Ingeniera, 10 años)",
    written: 27.3,
    antecedentes: 21.0,
    preProject: 48.30,
    projectEst: 18.0,
    interviewEst: 17.0,
    total100: 83.30
  },
  {
    name: "Participante 10 (Técnico, 8 años)",
    written: 30.2,
    antecedentes: 15.0, // 2 Tit + 1.5 Cap + 4 AntGral + 3 AntDep + 4.5 Legajo
    preProject: 45.20,
    projectEst: 16.5,
    interviewEst: 16.5,
    total100: 78.20
  },
  {
    name: "Participante 4 (Licenciado, 1 año)",
    written: 33.0,
    antecedentes: 10.5, // 4 Tit + 1.5 Cap + 0.5 AntGral + 0 AntDep + 4.5 Legajo
    preProject: 43.50,
    projectEst: 17.0,
    interviewEst: 16.5,
    total100: 77.00
  },
  {
    name: "Guido Cassulo (Escenario Escrito Máximo 31,6 - Dec 1843)",
    written: 31.6,
    antecedentes: 13.45, // 2 Tit + 3.25 Cap + 0.2 Conc + 2 AntGral + 1 AntDep + 5 Legajo
    preProject: 45.05,
    projectEst: 19.0,
    interviewEst: 18.0,
    total100: 82.05
  },
  {
    name: "Guido Cassulo (Escenario Escrito Probable 28,6 - Dec 1843)",
    written: 28.6,
    antecedentes: 13.45,
    preProject: 42.05,
    projectEst: 19.0,
    interviewEst: 18.0,
    total100: 79.05
  },
  {
    name: "Guido Cassulo (Escenario Escrito Conservador 27,6 - Dec 1843)",
    written: 27.6,
    antecedentes: 13.45,
    preProject: 41.05,
    projectEst: 18.5,
    interviewEst: 18.0,
    total100: 77.55
  },
  {
    name: "Guido Cassulo (Escenario Escrito Mínimo 25,0 - Dec 1843)",
    written: 25.0,
    antecedentes: 13.45,
    preProject: 38.45,
    projectEst: 19.0,
    interviewEst: 18.5,
    total100: 75.95
  }
];

console.log('=== EXACT RECALCULATED MATRIX UNDER DECRETO 1843/17 LITERAL BAREMO ===\n');
baremoDec1843.forEach(c => {
  console.log(`${c.name}`);
  console.log(`  Examen Escrito: ${c.written} / 35 Pts`);
  console.log(`  Antecedentes Dec 1843: ${c.antecedentes} / 25 Pts`);
  console.log(`  TOTAL PRE-PROYECTO: ${c.preProject} / 60 Pts`);
  console.log(`  TOTAL 100 PTS EST: ${c.total100} / 100 Pts\n`);
});
