const correctedCandidates = [
  {
    name: "Participante 2 (Gabriela López - Ingeniera, 10 años)",
    written: 27.3,
    titCap: 7.0,
    antigGral: 5.0, // 10 yrs MAX
    antigDep: 5.0,  // 10 yrs MAX
    legajo: 4.0,
    antecedentes: 21.0,
    total: 48.30,
    rank: "1° Puesto Parcial"
  },
  {
    name: "Participante 4 (Licenciado - 1 año municipal, 0 en dep)",
    written: 34.5,
    titCap: 7.5,
    antigGral: 0.5, // 1 yr / 10 yrs * 5
    antigDep: 0.0,  // 0 yrs in dep
    legajo: 4.5,
    antecedentes: 12.5,
    total: 47.00,
    rank: "2° Puesto Parcial"
  },
  {
    name: "Guido Cassulo (Escenario 2 Probable - 4 años, 0 sanc)",
    written: 28.6,
    titCap: 6.75,
    antigGral: 2.0, // 4 yrs / 10 yrs * 5
    antigDep: 2.0,  // 4 yrs / 10 yrs * 5
    legajo: 5.0,   // 0 Sanciones MAX
    antecedentes: 15.75,
    total: 44.35,
    rank: "3° Puesto Parcial"
  },
  {
    name: "Guido Cassulo (Escenario 1 Conservador - 4 años, 0 sanc)",
    written: 27.6,
    titCap: 6.75,
    antigGral: 2.0,
    antigDep: 2.0,
    legajo: 5.0,
    antecedentes: 15.75,
    total: 43.35,
    rank: "3° Puesto Parcial"
  },
  {
    name: "Participante 10 (Técnico - 8 años)",
    written: 25.0,
    titCap: 4.5,
    antigGral: 4.0,
    antigDep: 4.0,
    legajo: 4.5,
    antecedentes: 17.0,
    total: 42.00,
    rank: "4° Puesto Parcial"
  },
  {
    name: "Participante 3 (Verónica - Ingeniera, 10 años)",
    written: 23.4,
    titCap: 6.5,
    antigGral: 5.0,
    antigDep: 5.0,
    legajo: 4.0,
    antecedentes: 20.5,
    total: 43.90,
    rank: "🔴 ELIMINADA (Escrito < 25 pts)"
  }
];

console.log('=== EXACT RECALCULATED MATRIX FOR ALL 5 CANDIDATES ===\n');
correctedCandidates.forEach(c => {
  console.log(`${c.name}`);
  console.log(`  Examen Escrito: ${c.written} / 35 Pts`);
  console.log(`  Antecedentes: TitCap (${c.titCap}) + AntGral (${c.antigGral}) + AntDep (${c.antigDep}) + Legajo (${c.legajo}) = ${c.antecedentes} / 25 Pts`);
  console.log(`  TOTAL PRE-PROYECTO: ${c.total} / 60 Pts | ${c.rank}\n`);
});
