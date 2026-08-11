const courseCalculations = [
  {
    option: "0. Estado Base Actual",
    extraCap: 0.0,
    capScore: 4.25,
    antecedentes: 12.25,
    written28_6: 40.85,
    written31_6: 43.85,
    rank28_6: "4° Puesto Previo (A 0,35 pt del Part 10 41,20)"
  },
  {
    option: "1. Opción Mínima (+1 curso 50-74 hs)",
    extraCap: 0.75,
    capScore: 5.00,
    antecedentes: 13.00,
    written28_6: 41.60,
    written31_6: 44.60,
    rank28_6: "🟢 3° Puesto Previo (Supera al Part 10 41,20)"
  },
  {
    option: "2. Opción Media (+1 curso >100 hs)",
    extraCap: 1.50,
    capScore: 5.75,
    antecedentes: 13.75,
    written28_6: 42.35,
    written31_6: 45.35,
    rank28_6: "🟢 3° Puesto Sólido (Supera a Part 10 por +1,15 pts)"
  },
  {
    option: "3. Opción Alta (+2 cursos >100 hs)",
    extraCap: 3.00,
    capScore: 7.25,
    antecedentes: 15.25,
    written28_6: 43.85,
    written31_6: 46.85,
    rank28_6: "🟢 3° Puesto (A solo 0,15 pt del Part 4 44,00)"
  },
  {
    option: "4. Opción Recomendada (+2 cursos >100 hs + 1 de 75-99 hs)",
    extraCap: 4.00,
    capScore: 8.25,
    antecedentes: 16.25,
    written28_6: 44.85,
    written31_6: 47.85,
    rank28_6: "🟢 2° PUESTO PREVIO (Supera al Part 4 44,00 por +0,85 pt)"
  },
  {
    option: "5. Opción Máxima TECHO (+3 cursos >100 hs)",
    extraCap: 4.50,
    capScore: 8.75,
    antecedentes: 16.75,
    written28_6: 45.35,
    written31_6: 48.35,
    rank28_6: "🟢 2° PUESTO SÓLIDO (Supera al Part 4 por +1,35 pts)"
  }
];

console.log('=== EXACT COURSE CALCULATION MATRIX ===\n');
courseCalculations.forEach(c => {
  console.log(`${c.option}`);
  console.log(`  Puntos Extra: +${c.extraCap} Pts | Cap Score: ${c.capScore} / 10 | Antecedentes: ${c.antecedentes} / 25`);
  console.log(`  Pre-Proyecto (Escrito 28,6): ${c.written28_6} Pts | ${c.rank28_6}`);
  console.log(`  Pre-Proyecto (Escrito 31,6): ${c.written31_6} Pts\n`);
});
