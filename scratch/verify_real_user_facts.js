const realData = [
  {
    name: "Gabriela López (Ingeniera, 10 años antig gral y dep)",
    written: 27.3,
    antecedentes: {
      tit: 4.0,
      cap: 2.5,
      antigGral: 5.0,
      antigDep: 5.0,
      legajo: 5.0, // 0 Sanciones
      total: 21.5
    },
    preProject: 48.80,
    rank: "🟢 1° Puesto Pre-Proyecto"
  },
  {
    name: "Participante 4 (Licenciado, 1 año antig gral, 0 dep)",
    written: 33.0,
    antecedentes: {
      tit: 4.0,
      cap: 1.5,
      antigGral: 0.5,
      antigDep: 0.0,
      legajo: 5.0, // 0 Sanciones
      total: 11.0
    },
    preProject: 44.00,
    rank: "🟢 2° Puesto Pre-Proyecto"
  },
  {
    name: "Guido Cassulo (Escenario Escrito Probable 28,6 - 4 años antig gral y dep)",
    written: 28.6,
    antecedentes: {
      tit: 2.0,
      cap: 3.25,
      conc: 0.20,
      antigGral: 2.0,
      antigDep: 1.0,
      legajo: 5.0, // 0 Sanciones
      total: 13.45
    },
    preProject: 42.05,
    rank: "🟢 3° Puesto Pre-Proyecto (Supera al Part 10 por +0,85 pt)"
  },
  {
    name: "Participante 10 (Técnico, 3 años antig gral y dep)",
    written: 30.2,
    antecedentes: {
      tit: 2.0,
      cap: 1.5,
      antigGral: 1.5,
      antigDep: 1.0,
      legajo: 5.0, // 0 Sanciones
      total: 11.0
    },
    preProject: 41.20,
    rank: "🟢 4° Puesto Pre-Proyecto (Queda detrás de Guido)"
  },
  {
    name: "Guido Cassulo (Escenario Escrito Máximo 31,6 - 4 años antig gral y dep)",
    written: 31.6,
    antecedentes: {
      tit: 2.0,
      cap: 3.25,
      conc: 0.20,
      antigGral: 2.0,
      antigDep: 1.0,
      legajo: 5.0, // 0 Sanciones
      total: 13.45
    },
    preProject: 45.05,
    rank: "🟢 2° PUESTO PRE-PROYECTO (Supera a Part 4 y Part 10)"
  },
  {
    name: "Verónica (Ingeniera, 10 años)",
    written: 23.4,
    antecedentes: {
      total: 21.0
    },
    preProject: 44.40,
    rank: "🔴 ELIMINADA (Escrito < 25.0 Pts)"
  }
];

console.log('=== EXACT COMPUTATION WITH REAL USER FACTS ===\n');
realData.forEach(c => {
  console.log(`${c.name}`);
  console.log(`  Examen Escrito: ${c.written} / 35 Pts`);
  console.log(`  Antecedentes Dec 1843: ${c.antecedentes.total} / 25 Pts`);
  console.log(`  TOTAL PRE-PROYECTO: ${c.preProject} / 60 Pts | ${c.rank}\n`);
});
