const worstCaseScenarios = [
  {
    scenarioTitle: "STRESS TEST 1: COMPETIDORES CON PROYECTO PERFECTO (19.5 PTS) Y GUIDO CON PROYECTO MODERADO (17.5 PTS) - ESCRITO GUIDO 28.6",
    candidates: [
      { name: "Gabriela López (Proyecto Perfecto)", esc: 27.30, ant: 21.50, pre: 48.80, proj: 19.5, int: 19.0, total: 87.30, rank: "🥇 1° Puesto" },
      { name: "Participante 4 (Proyecto Perfecto)", esc: 33.00, ant: 11.00, pre: 44.00, proj: 19.5, int: 19.0, total: 82.50, rank: "🥈 2° Puesto (Por Inflación del Jurado)" },
      { name: "Guido Cassulo (Techo Cap 18.0 Ant + Proj Mod. 17.5)", esc: 28.60, ant: 18.00, pre: 46.60, proj: 17.5, int: 17.0, total: 81.10, rank: "🥉 3° Puesto (A 1,40 pt del Part. 4)" },
      { name: "Guido Cassulo (Cursos Extra +3 Pts + Proj Mod. 17.5)", esc: 28.60, ant: 16.45, pre: 45.05, proj: 17.5, int: 17.0, total: 79.55, rank: "🥉 3° Puesto" },
      { name: "Participante 10 (Proyecto Perfecto)", esc: 30.20, ant: 11.50, pre: 41.70, proj: 19.5, int: 19.0, total: 80.20, rank: "4° Puesto" },
      { name: "Guido Cassulo (Sin Cap Extra + Proj Mod. 17.5)", esc: 28.60, ant: 14.95, pre: 43.55, proj: 17.5, int: 17.0, total: 78.05, rank: "5° Puesto" }
    ]
  },
  {
    scenarioTitle: "STRESS TEST 2: COMPETIDORES CON PROYECTO PERFECTO (19.5 PTS) Y GUIDO CON PROYECTO MODERADO (17.5 PTS) - ESCRITO GUIDO MÁXIMO 31.6",
    candidates: [
      { name: "Gabriela López (Proyecto Perfecto)", esc: 27.30, ant: 21.50, pre: 48.80, proj: 19.5, int: 19.0, total: 87.30, rank: "🥇 1° Puesto" },
      { name: "Guido Cassulo (Escrito 31,6 + Techo Cap 18.0 + Proj 17.5)", esc: 31.60, ant: 18.00, pre: 49.60, proj: 17.5, int: 17.0, total: 84.10, rank: "🥈 2° PUESTO RECUPERADO (+1,60 pt sobre Part. 4)" },
      { name: "Guido Cassulo (Escrito 31,6 + Cap +3 Pts + Proj 17.5)", esc: 31.60, ant: 16.45, pre: 48.05, proj: 17.5, int: 17.0, total: 82.55, rank: "🥈 2° PUESTO RECUPERADO (+0,05 pt sobre Part. 4)" },
      { name: "Participante 4 (Proyecto Perfecto)", esc: 33.00, ant: 11.00, pre: 44.00, proj: 19.5, int: 19.0, total: 82.50, rank: "🥉 3° Puesto" },
      { name: "Participante 10 (Proyecto Perfecto)", esc: 30.20, ant: 11.50, pre: 41.70, proj: 19.5, int: 19.0, total: 80.20, rank: "4° Puesto" }
    ]
  },
  {
    scenarioTitle: "STRESS TEST 3: COMPETIDORES CON NOTAS IGUALES O SUPERIORES EN PROYECTO (18.5 PTS vs GUIDO 18.0 PTS)",
    candidates: [
      { name: "Gabriela López", esc: 27.30, ant: 21.50, pre: 48.80, proj: 18.5, int: 18.0, total: 85.30, rank: "🥇 1° Puesto" },
      { name: "Guido Cassulo (Escrito 28,6 + Techo Cap 18.0 + Proj 18.0)", esc: 28.60, ant: 18.00, pre: 46.60, proj: 18.0, int: 17.5, total: 82.10, rank: "🥈 2° PUESTO LOGRADO (+1,10 pt sobre Part. 4)" },
      { name: "Participante 4 (Proyecto 18.5)", esc: 33.00, ant: 11.00, pre: 44.00, proj: 18.5, int: 18.5, total: 81.00, rank: "🥉 3° Puesto" },
      { name: "Guido Cassulo (Escrito 28,6 + Cap Interm 14.95 + Proj 18.0)", esc: 28.60, ant: 14.95, pre: 43.55, proj: 18.0, int: 17.5, total: 79.05, rank: "🥉 3° Puesto (Superado por Part. 4 por 1,95 pts)" },
      { name: "Participante 10 (Proyecto 18.5)", esc: 30.20, ant: 11.50, pre: 41.70, proj: 18.5, int: 18.0, total: 78.20, rank: "4° Puesto" }
    ]
  }
];

console.log('=== ADVERSARIAL STRESS TEST ANALYSIS (COMPETITORS GETTING HIGHER PROJECT SCORES THAN GUIDO) ===\n');
worstCaseScenarios.forEach(w => {
  console.log(`==================== ${w.scenarioTitle} ====================`);
  w.candidates.forEach(c => {
    console.log(`  ${c.name.padEnd(52)} | Esc: ${c.esc} | Ant: ${c.ant} | Pre: ${c.pre} | Proj: ${c.proj} | Int: ${c.int} | TOTAL: ${c.total} Pts | ${c.rank}`);
  });
  console.log();
});
