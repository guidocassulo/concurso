const scenarios = [
  {
    name: "ESCENARIO 1: CORRECCIÓN OBJETIVA Y TRANSPARENTE (Sin favoritismos)",
    guidoWritten: 28.6,
    guidoAntecedentes: 15.75,
    guidoProjInt: 37.0, // 19 Proj + 18 Int
    guidoTotal: 81.35,

    gabyTotal: 83.30, // 48.3 + 35.0 (18 Proj + 17 Int)
    part4Total: 78.50, // 45.5 + 33.0 (16.5 Proj + 16.5 Int)
    part10Total: 80.20, // 47.2 + 33.0 (16.5 Proj + 16.5 Int)
    rankGuido: "🥈 2° PUESTO GENERAL"
  },
  {
    name: "ESCENARIO 2: RESTITUCCIÓN MÁXIMA ESCRITA PARA GUIDO (+7.6 Pts)",
    guidoWritten: 31.6,
    guidoAntecedentes: 15.75,
    guidoProjInt: 37.5, // 19.0 Proj + 18.5 Int
    guidoTotal: 84.85,

    gabyTotal: 84.80, // 48.3 + 36.5 (18.5 Proj + 18 Int)
    part4Total: 79.50, // 45.5 + 34.0 (17 Proj + 17 Int)
    part10Total: 81.20, // 47.2 + 34.0 (17 Proj + 17 Int)
    rankGuido: "🥇 1° PUESTO GENERAL / 🥈 2° PUESTO CÓMODO"
  },
  {
    name: "ESCENARIO 3: FAVORITISMO MODERADO A PARTICIPANTES 4 Y 10",
    guidoWritten: 28.6,
    guidoAntecedentes: 15.75,
    guidoProjInt: 36.5, // 18.5 Proj + 18.0 Int
    guidoTotal: 80.85,

    gabyTotal: 83.30, // 48.3 + 35.0
    part4Total: 81.50, // 45.5 + 36.0 (18 Proj + 18 Int)
    part10Total: 83.20, // 47.2 + 36.0 (18 Proj + 18 Int)
    rankGuido: "3° / 4° Puesto (Impugnable por Sesgo)"
  },
  {
    name: "ESCENARIO 4: EXTREMO FAVORITISMO / AYUDA DESCARADA A PARTICIPANTES 4 Y 10",
    guidoWritten: 28.6,
    guidoAntecedentes: 15.75,
    guidoProjInt: 37.0, // 19 Proj + 18 Int
    guidoTotal: 81.35,

    gabyTotal: 84.80,
    part4Total: 84.50, // 45.5 + 39.0 (19.5 Proj + 19.5 Int)
    part10Total: 86.20, // 47.2 + 39.0 (19.5 Proj + 19.5 Int)
    rankGuido: "4° Puesto (Vía Impugnación Judicial Abierta)"
  },
  {
    name: "ESCENARIO 5: GUIDO CON RESTITUCCIÓN ESCRITA MÍNIMA (25.0 Pts)",
    guidoWritten: 25.0,
    guidoAntecedentes: 15.75,
    guidoProjInt: 37.5, // 19 Proj + 18.5 Int
    guidoTotal: 78.25,

    gabyTotal: 83.30,
    part4Total: 78.50,
    part10Total: 80.20,
    rankGuido: "3° / 4° Puesto (Piso Aprobatorio Alcanzado)"
  }
];

console.log('=== MULTI-VARIABLE SCENARIO MATRIX ===\n');
scenarios.forEach(s => {
  console.log(`==================== ${s.name} ====================`);
  console.log(`Guido Written (${s.guidoWritten}) + Antecedentes (${s.guidoAntecedentes}) + Proj/Int (${s.guidoProjInt}) = TOTAL GUIDO: ${s.guidoTotal} Pts`);
  console.log(`Competidores Totales: Gaby: ${s.gabyTotal} Pts | Part 10: ${s.part10Total} Pts | Part 4: ${s.part4Total} Pts`);
  console.log(`RESULTADO GUIDO: ${s.rankGuido}\n`);
});
