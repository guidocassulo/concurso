const fullMasterTableData = [
  {
    tableTitle: "CUADRO 1: NIVEL ACTUAL BASE (CON CERTIFICADO INTERMEDIO Y DENGUE/ICM ACTUALES)",
    guidoCursos: 4.75, // 1.5 Interm + 1.5 IA + 0.75 PHP + 1.0 ICM
    guidoTitulos: 2.20, // 2.0 Terciario + 0.2 Historia
    guidoCapTotal: 6.95,
    guidoAntecTotal: 14.95,
    candidates: [
      { name: "Gabriela López", tit: 4.00, cur: 2.50, cap: 6.50, ant: 21.50, esc: 27.30, pre: 48.80, proj: 18.0, int: 17.0, total: 83.80, rank: "🥇 1° Puesto" },
      { name: "Guido Cassulo (Escrito 31,6)", tit: 2.20, cur: 4.75, cap: 6.95, ant: 14.95, esc: 31.60, pre: 46.55, proj: 19.0, int: 18.0, total: 83.55, rank: "🥈 2° PUESTO SÓLIDO" },
      { name: "Guido Cassulo (Escrito 28,6)", tit: 2.20, cur: 4.75, cap: 6.95, ant: 14.95, esc: 28.60, pre: 43.55, proj: 19.0, int: 18.0, total: 80.55, rank: "🥈 2° PUESTO LOGRADO (+3,55 pts)" },
      { name: "Participante 4", tit: 4.00, cur: 1.50, cap: 5.50, ant: 11.00, esc: 33.00, pre: 44.00, proj: 16.5, int: 16.5, total: 77.00, rank: "🥉 3° Puesto" },
      { name: "Participante 10 (Mínimo Ley)", tit: 2.00, cur: 1.25, cap: 3.25, ant: 10.75, esc: 30.20, pre: 40.95, proj: 16.5, int: 16.5, total: 73.95, rank: "4° Puesto" },
      { name: "Participante 10 (Máximo Amplio)", tit: 2.00, cur: 2.00, cap: 4.00, ant: 11.50, esc: 30.20, pre: 41.70, proj: 16.5, int: 16.5, total: 74.70, rank: "4° Puesto" }
    ]
  },
  {
    tableTitle: "CUADRO 2: MAXIMIZACIÓN FASE 1 (COMPLETANDO LOS 5 CURSOS PENDIENTES DEL ICM EN 10 DÍAS)",
    guidoCursos: 6.00, // 4.75 + 1.25 ICM
    guidoTitulos: 2.20,
    guidoCapTotal: 8.20,
    guidoAntecTotal: 16.20,
    candidates: [
      { name: "Gabriela López", tit: 4.00, cur: 2.50, cap: 6.50, ant: 21.50, esc: 27.30, pre: 48.80, proj: 18.0, int: 17.0, total: 83.80, rank: "🥇 1° Puesto" },
      { name: "Guido Cassulo (Escrito 31,6 + ICM)", tit: 2.20, cur: 6.00, cap: 8.20, ant: 16.20, esc: 31.60, pre: 47.80, proj: 19.0, int: 18.0, total: 84.80, rank: "🥇 1° PUESTO DISPUTADO" },
      { name: "Guido Cassulo (Escrito 28,6 + ICM)", tit: 2.20, cur: 6.00, cap: 8.20, ant: 16.20, esc: 28.60, pre: 44.80, proj: 19.0, int: 18.0, total: 81.80, rank: "🥈 2° PUESTO LOGRADO (+4,80 pts)" },
      { name: "Participante 4", tit: 4.00, cur: 1.50, cap: 5.50, ant: 11.00, esc: 33.00, pre: 44.00, proj: 16.5, int: 16.5, total: 77.00, rank: "🥉 3° Puesto" },
      { name: "Participante 10", tit: 2.00, cur: 2.00, cap: 4.00, ant: 11.50, esc: 30.20, pre: 41.70, proj: 16.5, int: 16.5, total: 74.70, rank: "4° Puesto" }
    ]
  },
  {
    tableTitle: "CUADRO 3: MAXIMIZACIÓN FASE 2 (SUMANDO 2 CURSOS ONLINE >100 HS EN 10 DÍAS)",
    guidoCursos: 7.75, // 4.75 + 3.00 Cursos Online
    guidoTitulos: 2.20,
    guidoCapTotal: 9.95, // Casi Techo!
    guidoAntecTotal: 17.95,
    candidates: [
      { name: "Gabriela López", tit: 4.00, cur: 2.50, cap: 6.50, ant: 21.50, esc: 27.30, pre: 48.80, proj: 18.0, int: 17.0, total: 83.80, rank: "🥇 1° Puesto" },
      { name: "Guido Cassulo (Escrito 31,6 + Online)", tit: 2.20, cur: 7.75, cap: 9.95, ant: 17.95, esc: 31.60, pre: 49.55, proj: 19.0, int: 18.0, total: 86.55, rank: "🥇 1° PUESTO GENERAL LOGRADO" },
      { name: "Guido Cassulo (Escrito 28,6 + Online)", tit: 2.20, cur: 7.75, cap: 9.95, ant: 17.95, esc: 28.60, pre: 46.55, proj: 19.0, int: 18.0, total: 83.55, rank: "🥈 2° PUESTO SÓLIDO (+6,55 pts)" },
      { name: "Participante 4", tit: 4.00, cur: 1.50, cap: 5.50, ant: 11.00, esc: 33.00, pre: 44.00, proj: 16.5, int: 16.5, total: 77.00, rank: "🥉 3° Puesto" },
      { name: "Participante 10", tit: 2.00, cur: 2.00, cap: 4.00, ant: 11.50, esc: 30.20, pre: 41.70, proj: 16.5, int: 16.5, total: 74.70, rank: "4° Puesto" }
    ]
  },
  {
    tableTitle: "CUADRO 4: MAXIMIZACIÓN FASE MÁXIMA TECHO (ICM + CISCO + IBM = TECHO 10 PTS)",
    guidoCursos: 7.80, // Cap limited to 10.0
    guidoTitulos: 2.20,
    guidoCapTotal: 10.00, // TECHO MÁXIMO 10 PTS
    guidoAntecTotal: 18.00,
    candidates: [
      { name: "Guido Cassulo (Escrito 31,6 + TECHO)", tit: 2.20, cur: 7.80, cap: 10.00, ant: 18.00, esc: 31.60, pre: 49.60, proj: 19.0, int: 18.0, total: 86.60, rank: "🥇 1° PUESTO GENERAL LOGRADO" },
      { name: "Gabriela López", tit: 4.00, cur: 2.50, cap: 6.50, ant: 21.50, esc: 27.30, pre: 48.80, proj: 18.0, int: 17.0, total: 83.80, rank: "🥈 2° Puesto General" },
      { name: "Guido Cassulo (Escrito 28,6 + TECHO)", tit: 2.20, cur: 7.80, cap: 10.00, ant: 18.00, esc: 28.60, pre: 46.60, proj: 19.0, int: 18.0, total: 83.60, rank: "🥈 2° PUESTO SÓLIDO (+6,60 pts)" },
      { name: "Participante 4", tit: 4.00, cur: 1.50, cap: 5.50, ant: 11.00, esc: 33.00, pre: 44.00, proj: 16.5, int: 16.5, total: 77.00, rank: "🥉 3° Puesto" },
      { name: "Participante 10", tit: 2.00, cur: 2.00, cap: 4.00, ant: 11.50, esc: 30.20, pre: 41.70, proj: 16.5, int: 16.5, total: 74.70, rank: "4° Puesto" }
    ]
  }
];

console.log('=== MASTER RE-CALCULATION TABLES WITH ITEMIZED SCORES AND MAXIMIZATION STRATEGY ===\n');
fullMasterTableData.forEach(m => {
  console.log(`==================== ${m.tableTitle} ====================`);
  m.candidates.forEach(c => {
    console.log(`  ${c.name.padEnd(46)} | Tit: ${c.tit} | Cur: ${c.cur} | Cap: ${c.cap} | Ant: ${c.ant} | Esc: ${c.esc} | Pre: ${c.pre} | Proj: ${c.proj} | Int: ${c.int} | TOTAL: ${c.total} Pts | ${c.rank}`);
  });
  console.log();
});
