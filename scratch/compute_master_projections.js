const masterProjections = [
  {
    scenarioName: "ESCENARIO 1: COMPETIDORES CON NOTAS ALTAS EN PROYECTO (18.5 PTS) Y GUIDO EN REVISIÓN ESCRITA PROBABLE (28.6 PTS)",
    candidates: [
      { name: "Gabriela López", written: 27.3, antec: 21.50, pre: 48.80, proj: 18.5, int: 18.0, total: 85.30, rank: "🥇 1° Puesto" },
      { name: "Guido Cassulo (Con +3 Pts Cap Extra)", written: 28.6, antec: 16.45, pre: 45.05, proj: 18.5, int: 18.0, total: 81.55, rank: "🥈 2° PUESTO LOGRADO" },
      { name: "Participante 4 (Nota Alta Proj)", written: 33.0, antec: 11.00, pre: 44.00, proj: 18.5, int: 18.0, total: 80.50, rank: "🥉 3° Puesto (Superado por +1,05 pt)" },
      { name: "Guido Cassulo (Sin Cap Extra)", written: 28.6, antec: 13.45, pre: 42.05, proj: 18.5, int: 18.0, total: 78.55, rank: "⚠️ 3° / 4° Puesto (Superado por Part 4)" },
      { name: "Participante 10 (Nota Alta Proj)", written: 30.2, antec: 11.00, pre: 41.20, proj: 18.5, int: 18.0, total: 77.70, rank: "4° Puesto" }
    ]
  },
  {
    scenarioName: "ESCENARIO 2: COMPETIDORES CON NOTAS CASI PERFECTAS EN PROYECTO (19.5 PTS) Y GUIDO EN REVISIÓN PROBABLE (28.6 PTS)",
    candidates: [
      { name: "Gabriela López", written: 27.3, antec: 21.50, pre: 48.80, proj: 19.0, int: 18.5, total: 86.30, rank: "🥇 1° Puesto" },
      { name: "Participante 4 (Nota Casi Perfecta 19.5)", written: 33.0, antec: 11.00, pre: 44.00, proj: 19.5, int: 19.0, total: 82.50, rank: "🥈 2° Puesto (Por Inflación del Jurado)" },
      { name: "Guido Cassulo (Techo Cap 18.0 Pts)", written: 28.6, antec: 18.00, pre: 46.60, proj: 18.5, int: 18.0, total: 83.10, rank: "🥈 2° PUESTO RECUPERADO POR CAPACITACIÓN (+0,60 pt)" },
      { name: "Guido Cassulo (Con +3 Pts Cap)", written: 28.6, antec: 16.45, pre: 45.05, proj: 18.5, int: 18.0, total: 81.55, rank: "🥉 3° Puesto (Requiere Escrito 31,6)" },
      { name: "Participante 10 (Nota Casi Perfecta 19.5)", written: 30.2, antec: 11.00, pre: 41.20, proj: 19.5, int: 19.0, total: 79.70, rank: "4° Puesto" }
    ]
  },
  {
    scenarioName: "ESCENARIO 3: COMPETIDORES CON NOTAS CASI PERFECTAS (19.5 PTS) Y GUIDO EN REVISIÓN ESCRITA MÁXIMA (31.6 PTS)",
    candidates: [
      { name: "Guido Cassulo (Escrito 31,6 + Techo Cap 18.0)", written: 31.6, antec: 18.00, pre: 49.60, proj: 19.0, int: 18.5, total: 87.10, rank: "🥇 1° PUESTO GENERAL LOGRADO" },
      { name: "Gabriela López", written: 27.3, antec: 21.50, pre: 48.80, proj: 19.0, int: 18.5, total: 86.30, rank: "🥈 2° Puesto" },
      { name: "Guido Cassulo (Escrito 31,6 + Cap +3 Pts)", written: 31.6, antec: 16.45, pre: 48.05, proj: 18.5, int: 18.0, total: 84.55, rank: "🥈 2° PUESTO SÓLIDO (Supera a Part 4 por +2,05 pts)" },
      { name: "Participante 4 (Nota Inflada 19.5)", written: 33.0, antec: 11.00, pre: 44.00, proj: 19.5, int: 19.0, total: 82.50, rank: "🥉 3° Puesto" },
      { name: "Participante 10 (Nota Inflada 19.5)", written: 30.2, antec: 11.00, pre: 41.20, proj: 19.5, int: 19.0, total: 79.70, rank: "4° Puesto" }
    ]
  },
  {
    scenarioName: "ESCENARIO 4: RESTITUCCIÓN ESCRITA MÍNIMA (25.0 PTS) Y COMPETIDORES CON NOTAS ALTAS (18.0 PTS)",
    candidates: [
      { name: "Gabriela López", written: 27.3, antec: 21.50, pre: 48.80, proj: 18.0, int: 17.5, total: 84.30, rank: "🥇 1° Puesto" },
      { name: "Participante 4", written: 33.0, antec: 11.00, pre: 44.00, proj: 18.0, int: 17.5, total: 79.50, rank: "🥈 2° Puesto" },
      { name: "Guido Cassulo (Escrito Mínimo 25,0 + Techo Cap 18.0)", written: 25.0, antec: 18.00, pre: 43.00, proj: 18.5, int: 18.0, total: 79.50, rank: "🥈 2° PUESTO EMPATADO CON PART 4" },
      { name: "Participante 10", written: 30.2, antec: 11.00, pre: 41.20, proj: 18.0, int: 17.5, total: 76.70, rank: "4° Puesto" },
      { name: "Guido Cassulo (Escrito Mínimo 25,0 Sin Cap Extra)", written: 25.0, antec: 13.45, pre: 38.45, proj: 18.5, int: 18.0, total: 74.95, rank: "4° Puesto (Piso Aprobatorio Alcanzado)" }
    ]
  }
];

console.log('=== MULTI-PROJECTION ANALYSIS WITH HIGH COMPETITOR SCORES ===\n');
masterProjections.forEach(mp => {
  console.log(`==================== ${mp.scenarioName} ====================`);
  mp.candidates.forEach(c => {
    console.log(`  ${c.name.padEnd(46)} | Esc: ${c.written} | Ant: ${c.antec} | Pre: ${c.pre} | Proj: ${c.proj} | Int: ${c.int} | TOTAL: ${c.total} Pts | ${c.rank}`);
  });
  console.log();
});
