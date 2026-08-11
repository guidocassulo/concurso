const comparativeTables = {
  tabla1: [
    { name: "Gabriela López", pre: 48.80, proj: 18.0, int: 17.0, total: 83.80, rank: "🥇 1° Puesto" },
    { name: "Guido Cassulo (Escrito 31,6)", pre: 45.05, proj: 19.0, int: 18.0, total: 82.05, rank: "🥈 2° PUESTO SÓLIDO (+5,05 pts)" },
    { name: "Guido Cassulo (Escrito 28,6)", pre: 42.05, proj: 19.0, int: 18.0, total: 79.05, rank: "🥈 2° PUESTO LOGRADO (+2,05 pts)" },
    { name: "Participante 4", pre: 44.00, proj: 16.5, int: 16.5, total: 77.00, rank: "🥉 3° Puesto" },
    { name: "Participante 10", pre: 41.20, proj: 16.5, int: 16.5, total: 74.20, rank: "4° Puesto" }
  ],
  tabla2: [
    { name: "Gabriela López", pre: 48.80, proj: 18.5, int: 18.0, total: 85.30, rank: "🥇 1° Puesto" },
    { name: "Guido Cassulo (Escrito 31,6)", pre: 45.05, proj: 19.0, int: 18.0, total: 82.05, rank: "🥈 2° PUESTO SÓLIDO (+2,05 pts)" },
    { name: "Participante 4 (Nota Alta Proj)", pre: 44.00, proj: 18.5, int: 17.5, total: 80.00, rank: "🥉 3° Puesto" },
    { name: "Guido Cassulo (Escrito 28,6)", pre: 42.05, proj: 19.5, int: 18.5, total: 80.05, rank: "🥈 2° PUESTO AJUSTADO (+0,05 pt)" },
    { name: "Participante 10 (Nota Alta Proj)", pre: 41.20, proj: 18.5, int: 17.5, total: 77.20, rank: "4° Puesto" }
  ],
  tabla3: [
    { name: "Gabriela López", pre: 48.80, proj: 18.5, int: 18.0, total: 85.30, rank: "🥇 1° Puesto" },
    { name: "Guido Cassulo (Escrito 31,6)", pre: 45.05, proj: 19.5, int: 18.5, total: 83.05, rank: "🥈 2° PUESTO LOGRADO (+1,05 pts)" },
    { name: "Participante 4 (Nota Casi Perfecta)", pre: 44.00, proj: 19.5, int: 18.5, total: 82.00, rank: "🥉 3° Puesto" },
    { name: "Participante 10 (Nota Casi Perfecta)", pre: 41.20, proj: 19.5, int: 18.5, total: 79.20, rank: "4° Puesto" },
    { name: "Guido Cassulo (Escrito 28,6)", pre: 42.05, proj: 19.5, int: 18.5, total: 80.05, rank: "⚠️ 4° Puesto (Requiere Escrito 31,6)" }
  ]
};

console.log('=== THREE COMPARATIVE TABLES OF PROJECT EVALUATION SCENARIOS ===\n');
Object.keys(comparativeTables).forEach((tKey, idx) => {
  console.log(`==================== TABLA ${idx + 1} ====================`);
  comparativeTables[tKey].forEach(c => {
    console.log(`  ${c.name.padEnd(38)} | Pre: ${c.pre} | Proj: ${c.proj} | Int: ${c.int} | TOTAL: ${c.total} Pts | ${c.rank}`);
  });
  console.log();
});
