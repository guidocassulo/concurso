const sideBySideData = [
  {
    tableTitle: "TABLA COMPARATIVA MASTER (ESCRITO DE GUIDO EN 28,6 PTS VS TODOS LOS CANDIDATOS)",
    rows: [
      { rank: "1°", name: "Gabriela López", tit: 4.00, cur: 2.50, cap: 6.50, antRest: 15.00, antTotal: 21.50, esc: 27.30, pre: 48.80, proj: 18.0, int: 17.0, total: 83.80, status: "🥇 1° Puesto General (Base)" },
      { rank: "2°", name: "Guido Cassulo (Opción D: TECHO Cap 10.0)", tit: 2.20, cur: 7.80, cap: 10.00, antRest: 8.00, antTotal: 18.00, esc: 28.60, pre: 46.60, proj: 18.5, int: 18.0, total: 83.10, status: "🥈 2° Puesto (+2,60 pts sobre Part 4 Alto)" },
      { rank: "2°", name: "Guido Cassulo (Opción C: Cursos Online >100h)", tit: 2.20, cur: 7.75, cap: 9.95, antRest: 8.00, antTotal: 17.95, esc: 28.60, pre: 46.55, proj: 18.5, int: 18.0, total: 83.05, status: "🥈 2° Puesto (+2,55 pts sobre Part 4 Alto)" },
      { rank: "2°", name: "Guido Cassulo (Opción B: 5 Cursos ICM)", tit: 2.20, cur: 6.00, cap: 8.20, antRest: 8.00, antTotal: 16.20, esc: 28.60, pre: 44.80, proj: 18.5, int: 18.0, total: 81.30, status: "🥈 2° Puesto (+0,80 pt sobre Part 4 Alto)" },
      { rank: "3°", name: "Participante 4 (Nota Alta Proj)", tit: 4.00, cur: 1.50, cap: 5.50, antRest: 5.50, antTotal: 11.00, esc: 33.00, pre: 44.00, proj: 18.5, int: 18.0, total: 80.50, status: "🥉 3° Puesto (Superado por Guido)" },
      { rank: "2°", name: "Guido Cassulo (Opción A: Actual Cert. Interm)", tit: 2.20, cur: 4.75, cap: 6.95, antRest: 8.00, antTotal: 14.95, esc: 28.60, pre: 43.55, proj: 18.5, int: 18.0, total: 80.05, status: "🥈 2° Puesto (+3,05 pts vs Part 4 Estándar)" },
      { rank: "4°", name: "Participante 10 (Con 5 Cursos LinkedIn)", tit: 2.00, cur: 2.00, cap: 4.00, antRest: 7.50, antTotal: 11.50, esc: 30.20, pre: 41.70, proj: 18.5, int: 18.0, total: 78.20, status: "4° Puesto (Superado por Guido)" }
    ]
  },
  {
    tableTitle: "TABLA COMPARATIVA MASTER (ESCRITO DE GUIDO EN 30,0 PTS VS TODOS LOS CANDIDATOS)",
    rows: [
      { rank: "1°", name: "Gabriela López", tit: 4.00, cur: 2.50, cap: 6.50, antRest: 15.00, antTotal: 21.50, esc: 27.30, pre: 48.80, proj: 18.0, int: 17.0, total: 83.80, status: "🥇 1° Puesto General (Base)" },
      { rank: "1°/2°", name: "Guido Cassulo (Opción C: Cursos Online >100h)", tit: 2.20, cur: 7.75, cap: 9.95, antRest: 8.00, antTotal: 17.95, esc: 30.00, pre: 47.95, proj: 18.5, int: 18.0, total: 84.45, status: "🥇 1° / 🥈 2° Puesto Sólido (+3,95 pts)" },
      { rank: "2°", name: "Guido Cassulo (Opción B: 5 Cursos ICM)", tit: 2.20, cur: 6.00, cap: 8.20, antRest: 8.00, antTotal: 16.20, esc: 30.00, pre: 46.20, proj: 18.5, int: 18.0, total: 82.70, status: "🥈 2° Puesto Sólido (+2,20 pts)" },
      { rank: "2°", name: "Guido Cassulo (Opción A: Actual Cert. Interm)", tit: 2.20, cur: 4.75, cap: 6.95, antRest: 8.00, antTotal: 14.95, esc: 30.00, pre: 44.95, proj: 18.5, int: 18.0, total: 81.45, status: "🥈 2° Puesto (+0,95 pt sobre Part 4 Alto)" },
      { rank: "3°", name: "Participante 4 (Nota Alta Proj)", tit: 4.00, cur: 1.50, cap: 5.50, antRest: 5.50, antTotal: 11.00, esc: 33.00, pre: 44.00, proj: 18.5, int: 18.0, total: 80.50, status: "🥉 3° Puesto (Superado por Guido)" },
      { rank: "4°", name: "Participante 10 (Con 5 Cursos LinkedIn)", tit: 2.00, cur: 2.00, cap: 4.00, antRest: 7.50, antTotal: 11.50, esc: 30.20, pre: 41.70, proj: 18.5, int: 18.0, total: 78.20, status: "4° Puesto (Superado por Guido)" }
    ]
  }
];

console.log('=== SIDE-BY-SIDE ALL CANDIDATES COMPARATIVE TABLES ===\n');
sideBySideData.forEach(t => {
  console.log(`==================== ${t.tableTitle} ====================`);
  t.rows.forEach(r => {
    console.log(`  [${r.rank}] ${r.name.padEnd(46)} | Tit: ${r.tit} | Cur: ${r.cur} | Cap: ${r.cap} | Rest: ${r.antRest} | Ant: ${r.antTotal} | Esc: ${r.esc} | Pre: ${r.pre} | Proj: ${r.proj} | Int: ${r.int} | TOTAL: ${r.total} Pts | ${r.status}`);
  });
  console.log();
});
