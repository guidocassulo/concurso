const candidatesWith10Years = [
  {
    name: "Participante 4 (Licenciado)",
    written: 34.5,
    titleCap: 8.0,
    antigGral: 4.0, // 8 yrs / 10 yrs * 5
    antigDep: 4.0,  // 8 yrs / 10 yrs * 5
    legajo: 4.5,
    antecedentes: 20.5,
    total: 55.0,
    status: "🟢 CLASIFICADO (1° Puesto)"
  },
  {
    name: "Participante 2 (Gabriela López - Ingeniera, 10 años)",
    written: 27.3, // Rectificado de 23.3
    titleCap: 7.0,
    antigGral: 5.0, // 10 yrs MAX
    antigDep: 5.0,  // 10 yrs MAX
    legajo: 4.0,
    antecedentes: 21.0,
    total: 48.3,
    status: "🟢 CLASIFICADA (2° Puesto)"
  },
  {
    name: "Guido Cassulo (Escenario 2 Probable, 4 años)",
    written: 28.6,
    titleCap: 6.75,
    antigGral: 2.0, // 4 yrs / 10 yrs * 5
    antigDep: 2.0,  // 4 yrs / 10 yrs * 5
    legajo: 5.0,   // 0 Sanciones MAX
    antecedentes: 15.75,
    total: 44.35,
    status: "🟢 CLASIFICADO (3° Puesto)"
  },
  {
    name: "Guido Cassulo (Escenario 1 Conservador, 4 años)",
    written: 27.6,
    titleCap: 6.75,
    antigGral: 2.0,
    antigDep: 2.0,
    legajo: 5.0,
    antecedentes: 15.75,
    total: 43.35,
    status: "🟢 CLASIFICADO (3° Puesto)"
  },
  {
    name: "Participante 10 (Técnico, 8 años)",
    written: 25.0,
    titleCap: 4.5,
    antigGral: 4.0,
    antigDep: 4.0,
    legajo: 4.5,
    antecedentes: 17.0,
    total: 42.0,
    status: "🟢 CLASIFICADO (4° Puesto)"
  },
  {
    name: "Participante 3 (Verónica - Ingeniera, 10 años)",
    written: 23.4, // Rectificado de 18.0
    titleCap: 6.5,
    antigGral: 5.0,
    antigDep: 5.0,
    legajo: 4.0,
    antecedentes: 20.5,
    total: 43.9,
    status: "🔴 ELIMINADA (Menos de 25 pts en escrito)"
  }
];

console.log('=== CANDIDATE MATRIX WITH 10 YEARS MAX SENIORITY ===\n');
candidatesWith10Years.forEach(c => {
  console.log(`${c.name}`);
  console.log(`  Examen Escrito: ${c.written} / 35 Pts`);
  console.log(`  Antecedentes: TitCap (${c.titleCap}) + AntGral (${c.antigGral}) + AntDep (${c.antigDep}) + Legajo (${c.legajo}) = ${c.antecedentes} / 25 Pts`);
  console.log(`  TOTAL PRE-PROYECTO: ${c.total} / 60 Pts | ${c.status}\n`);
});
