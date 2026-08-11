const fullItemizedData = [
  {
    name: "Gabriela López (Ingeniera, 10a gral y dep)",
    titulos: 4.00, // Grado 4.0
    cursos: 2.50, // Cursos 2.5
    subtotalCapTit: 6.50, // 4.0 + 2.5 = 6.5 (Decreto 1843/17)
    antigGral: 5.00, // 10 yrs
    antigDep: 5.00,  // 10 yrs
    legajo: 5.00,    // 0 Sanc
    totalAntecedentes: 21.50,
    written: 27.30,
    preProject: 48.80,
    projectEst: 18.00,
    interviewEst: 17.00,
    total100: 83.80,
    rank: "🥇 1° Puesto General"
  },
  {
    name: "Guido Cassulo (Escrito 31,6 + Cert. Intermedio)",
    titulos: 2.20, // 2.0 Terciario + 0.2 Historia
    cursos: 4.75, // 1.5 Cert. Interm + 1.5 IA + 0.75 PHP + 1.0 ICM
    subtotalCapTit: 6.95,
    antigGral: 2.00, // 4 yrs
    antigDep: 1.00,  // 4 yrs
    legajo: 5.00,    // 0 Sanc
    totalAntecedentes: 14.95,
    written: 31.60,
    preProject: 46.55,
    projectEst: 19.00,
    interviewEst: 18.00,
    total100: 83.55,
    rank: "🥈 2° PUESTO GENERAL SÓLIDO"
  },
  {
    name: "Guido Cassulo (Escrito 28,6 + Cursos 10 días = Cap 7,75)",
    titulos: 2.20,
    cursos: 7.75, // Cursos extra en 10 días
    subtotalCapTit: 9.95,
    antigGral: 2.00,
    antigDep: 1.00,
    legajo: 5.00,
    totalAntecedentes: 17.95,
    written: 28.60,
    preProject: 46.55,
    projectEst: 19.00,
    interviewEst: 18.00,
    total100: 83.55,
    rank: "🥈 2° PUESTO GENERAL SÓLIDO"
  },
  {
    name: "Guido Cassulo (Escrito 28,6 + Cert. Intermedio Actual)",
    titulos: 2.20,
    cursos: 4.75,
    subtotalCapTit: 6.95,
    antigGral: 2.00,
    antigDep: 1.00,
    legajo: 5.00,
    totalAntecedentes: 14.95,
    written: 28.60,
    preProject: 43.55,
    projectEst: 19.00,
    interviewEst: 18.00,
    total100: 80.55,
    rank: "🥈 2° PUESTO GENERAL LOGRADO (+3,55 pts)"
  },
  {
    name: "Participante 4 (Licenciado, 1a gral, 0a dep)",
    titulos: 4.00, // Grado 4.0
    cursos: 1.50, // Cursos 1.5
    subtotalCapTit: 5.50,
    antigGral: 0.50, // 1 yr
    antigDep: 0.00,  // 0 yrs
    legajo: 5.00,    // 0 Sanc
    totalAntecedentes: 11.00,
    written: 33.00,
    preProject: 44.00,
    projectEst: 16.50,
    interviewEst: 16.50,
    total100: 77.00,
    rank: "🥉 3° Puesto General"
  },
  {
    name: "Participante 10 (Técnico, 3a + 5 Cursos LinkedIn)",
    titulos: 2.00, // Terciario 2.0
    cursos: 2.00, // 5 cursos LinkedIn 2.0
    subtotalCapTit: 4.00,
    antigGral: 1.50, // 3 yrs
    antigDep: 1.00,  // 3 yrs
    legajo: 5.00,    // 0 Sanc
    totalAntecedentes: 11.50,
    written: 30.20,
    preProject: 41.70,
    projectEst: 16.50,
    interviewEst: 16.50,
    total100: 74.70,
    rank: "4° Puesto General"
  }
];

console.log('=== FULL ITEMIZED DESGLOSE DE TÍTULOS Y CAPACITACIONES ===\n');
fullItemizedData.forEach(c => {
  console.log(`${c.name}`);
  console.log(`  [TÍTUOS (4.2)]: ${c.titulos} Pts | [CURSOS (4.1)]: ${c.cursos} Pts | [SUBTOTAL CAP Y TIT]: ${c.subtotalCapTit} / 10 Pts`);
  console.log(`  [ANTIG GRAL]: ${c.antigGral} Pts | [ANTIG DEP]: ${c.antigDep} Pts | [LEGAJO 0 SANC]: ${c.legajo} Pts`);
  console.log(`  [TOTAL ANTECEDENTES]: ${c.totalAntecedentes} / 25 Pts | [ESCRITO]: ${c.written} / 35 Pts | [PRE-PROYECTO]: ${c.preProject} / 60 Pts`);
  console.log(`  [PROYECTO]: ${c.projectEst} / 20 Pts | [ENTREVISTA]: ${c.interviewEst} / 20 Pts | [TOTAL 100 PTS]: ${c.total100} Pts`);
  console.log(`  [POSICIÓN DEFINITIVA]: ${c.rank}\n`);
});
