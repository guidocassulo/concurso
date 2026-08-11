const capVariables = [
  {
    level: "NIVEL 0: CAPACITACIONES ACTUALES DE GUIDO",
    capPoints: 3.25, // 1.5 IA + 0.75 PHP + 1.0 ICM 4 cursos
    titulosPoints: 2.20, // 2.0 Terciario + 0.2 Historia
    totalCapYTit: 5.45,
    restoAntecedentes: 8.00, // 2 AntGral + 1 AntDep + 5 Legajo 0 Sanc
    totalAntecedentes: 13.45,
    written28_6: {
      pre: 42.05,
      projCompetitorsHigh: 18.5,
      totalGuido: 79.55,
      part4Total: 80.50,
      rank: "3° Puesto (Superado por Part. 4 por 0,95 pt)"
    },
    written31_6: {
      pre: 45.05,
      totalGuido: 82.55,
      part4Total: 80.50,
      rank: "🥈 2° PUESTO LOGRADO (+2,05 pts sobre Part. 4)"
    }
  },
  {
    level: "NIVEL 1: SUMAR 5 CURSOS PENDIENTES DEL ICM (+1.25 Pts)",
    capPoints: 4.50,
    titulosPoints: 2.20,
    totalCapYTit: 6.70,
    restoAntecedentes: 8.00,
    totalAntecedentes: 14.70,
    written28_6: {
      pre: 43.30,
      projCompetitorsHigh: 18.5,
      totalGuido: 80.80,
      part4Total: 80.50,
      rank: "🥈 2° PUESTO LOGRADO (+0,30 pt sobre Part. 4)"
    },
    written31_6: {
      pre: 46.30,
      totalGuido: 83.80,
      part4Total: 80.50,
      rank: "🥈 2° PUESTO SÓLIDO (+3,30 pts sobre Part. 4)"
    }
  },
  {
    level: "NIVEL 2: SUMAR 2 CURSOS ONLINE >100 HS (CISCO/IBM) (+3.00 Pts)",
    capPoints: 6.25,
    titulosPoints: 2.20,
    totalCapYTit: 8.45,
    restoAntecedentes: 8.00,
    totalAntecedentes: 16.45,
    written28_6: {
      pre: 45.05,
      projCompetitorsHigh: 18.5,
      totalGuido: 82.55,
      part4Total: 80.50,
      rank: "🥈 2° PUESTO SÓLIDO (+2,05 pts sobre Part. 4)"
    },
    written31_6: {
      pre: 48.05,
      totalGuido: 85.55,
      part4Total: 80.50,
      rank: "🥇 1° PUESTO / 🥈 2° PUESTO SÓLIDO (+5,05 pts)"
    }
  },
  {
    level: "NIVEL 3: ESTRATEGIA MÁXIMA TECHO (ICM + CISCO + IBM + GOOGLE) (+4.55 Pts)",
    capPoints: 7.80,
    titulosPoints: 2.20,
    totalCapYTit: 10.00, // TECHO MÁXIMO 10 PTS
    restoAntecedentes: 8.00,
    totalAntecedentes: 18.00,
    written28_6: {
      pre: 46.60,
      projCompetitorsHigh: 18.5,
      totalGuido: 84.10,
      part4Total: 80.50,
      rank: "🥈 2° PUESTO SÓLIDO (+3,60 pts sobre Part. 4)"
    },
    written31_6: {
      pre: 49.60,
      totalGuido: 87.10,
      part4Total: 80.50,
      rank: "🥇 1° PUESTO GENERAL DISPUTADO (+6,60 pts)"
    }
  }
];

console.log('=== EXPLICIT CAPACITACIONES VARIABLE ANALYSIS MATRIX ===\n');
capVariables.forEach(v => {
  console.log(`==================== ${v.level} ====================`);
  console.log(`  Puntos Cursos (4.1): ${v.capPoints} Pts | Puntos Títulos (4.2): ${v.titulosPoints} Pts | Total Cap y Tit: ${v.totalCapYTit} / 10 Pts`);
  console.log(`  Resto Antecedentes: ${v.restoAntecedentes} Pts | TOTAL ANTECEDENTES: ${v.totalAntecedentes} / 25 Pts`);
  console.log(`  CON ESCRITO EN 28,6 PTS: Pre: ${v.written28_6.pre} | Total Concurso: ${v.written28_6.totalGuido} Pts (Part 4: ${v.written28_6.part4Total}) | ${v.written28_6.rank}`);
  console.log(`  CON ESCRITO EN 31,6 PTS: Pre: ${v.written31_6.pre} | Total Concurso: ${v.written31_6.totalGuido} Pts (Part 4: ${v.written31_6.part4Total}) | ${v.written31_6.rank}\n`);
});
