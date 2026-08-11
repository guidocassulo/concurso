const exactData = [
  {
    name: "Gabriela López (Ingeniera, 10 años)",
    written: 27.3, // Rectificado
    antecedentes: {
      titCap: 7.0, // 5.0 Tit + 2.0 Cap
      antigGral: 5.0, // 10 yrs MAX
      antigDep: 5.0,  // 10 yrs MAX
      legajo: 4.0,
      total: 21.0
    },
    preProjectTotal: 48.30,
    rank: "🟢 1° Puesto Pre-Proyecto"
  },
  {
    name: "Participante 10 (Técnico, 8 años)",
    written: 30.2,
    antecedentes: {
      titCap: 4.5,
      antigGral: 4.0,
      antigDep: 4.0,
      legajo: 4.5,
      total: 17.0
    },
    preProjectTotal: 47.20,
    rank: "🟢 2° Puesto Pre-Proyecto"
  },
  {
    name: "Guido Cassulo (Escenario Escrito Probable 28,6 - Sin Historia)",
    written: 28.6,
    antecedentes: {
      titCap: 8.0, // 3.5 Tit + 4.5 Cap (IA 120h + PHP 72h + ICM GDE/Micaela/Dom/Nov)
      antigGral: 2.0, // 4 yrs
      antigDep: 2.0,  // 4 yrs
      legajo: 5.0,   // 0 Sanciones MAX
      total: 17.0
    },
    preProjectTotal: 45.60,
    rank: "🟢 3° Puesto Pre-Proyecto (Supera al Part 4)"
  },
  {
    name: "Participante 4 (Licenciado, 1 año antig, 0 dep)",
    written: 33.0,
    antecedentes: {
      titCap: 7.5, // 5.0 Tit + 2.5 Cap
      antigGral: 0.5, // 1 yr
      antigDep: 0.0,  // 0 yrs
      legajo: 4.5,
      total: 12.5
    },
    preProjectTotal: 45.50,
    rank: "🟢 4° Puesto Pre-Proyecto (Superado por Guido)"
  },
  {
    name: "Guido Cassulo (Escenario Escrito Conservador 27,6 - Sin Historia)",
    written: 27.6,
    antecedentes: {
      titCap: 8.0,
      antigGral: 2.0,
      antigDep: 2.0,
      legajo: 5.0,
      total: 17.0
    },
    preProjectTotal: 44.60,
    rank: "🟢 4° Puesto Pre-Proyecto (A solo 0,90 pt del Part 4)"
  },
  {
    name: "Verónica (Ingeniera, 10 años)",
    written: 23.4, // Rectificado
    antecedentes: {
      titCap: 6.5,
      antigGral: 5.0,
      antigDep: 5.0,
      legajo: 4.0,
      total: 20.5
    },
    preProjectTotal: 43.90,
    rank: "🔴 ELIMINADA (Escrito < 25.0 Pts)"
  }
];

console.log('=== EXACT MATHEMATICAL PRE-PROJECT SUMMARY ===\n');
exactData.forEach(c => {
  console.log(`${c.name}`);
  console.log(`  Examen Escrito: ${c.written} / 35 Pts`);
  console.log(`  Antecedentes: TitCap (${c.antecedentes.titCap}) + AntGral (${c.antecedentes.antigGral}) + AntDep (${c.antecedentes.antigDep}) + Legajo (${c.antecedentes.legajo}) = ${c.antecedentes.total} / 25 Pts`);
  console.log(`  TOTAL PRE-PROYECTO: ${c.preProjectTotal} / 60 Pts | ${c.rank}\n`);
});
