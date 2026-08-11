const candidates = [
  {
    id: "Participante 4",
    title: "Licenciado en Sistemas (Carrera de Grado)",
    writtenScore: 34.5,
    titleScore: 5.0,
    capScore: 3.0,
    antiguedadScore: 4.5,
    legajoScore: 4.5,
    antecedentesTotal: 17.0,
    totalPreproyecto: 51.5,
    status: "🟢 CLASIFICADO (Aprobado)"
  },
  {
    id: "Guido Cassulo (Escenario 2 Probable)",
    title: "Técnico Superior en Programación (+120h IA + 72h PHP + 47% Hist)",
    writtenScore: 28.6,
    titleScore: 3.5,
    capScore: 3.25,
    antiguedadScore: 5.0,
    legajoScore: 5.0, // 0 sanciones
    antecedentesTotal: 16.75,
    totalPreproyecto: 45.35,
    status: "🟢 CLASIFICADO (Aprobado Rectificado)"
  },
  {
    id: "Guido Cassulo (Escenario 1 Conservador)",
    title: "Técnico Superior en Programación (+120h IA + 72h PHP + 47% Hist)",
    writtenScore: 27.6,
    titleScore: 3.5,
    capScore: 3.25,
    antiguedadScore: 5.0,
    legajoScore: 5.0, // 0 sanciones
    antecedentesTotal: 16.75,
    totalPreproyecto: 44.35,
    status: "🟢 CLASIFICADO (Aprobado Rectificado)"
  },
  {
    id: "Participante 2 (Gabriela López)",
    title: "Ingeniera en Sistemas (Carrera de Grado)",
    writtenScore: 27.3, // Rectificado de 23.3
    titleScore: 5.0,
    capScore: 2.0,
    antiguedadScore: 5.5,
    legajoScore: 4.5,
    antecedentesTotal: 17.0,
    totalPreproyecto: 44.30,
    status: "🟢 CLASIFICADA (Aprobada Rectificada)"
  },
  {
    id: "Participante 10",
    title: "Técnico Superior en Programación",
    writtenScore: 25.0,
    titleScore: 3.5,
    capScore: 1.0,
    antiguedadScore: 7.0,
    legajoScore: 4.5,
    antecedentesTotal: 16.0,
    totalPreproyecto: 41.0,
    status: "🟢 CLASIFICADO (Aprobado)"
  },
  {
    id: "Participante 3 (Verónica)",
    title: "Ingeniera (Carrera de Grado)",
    writtenScore: 23.4, // Rectificado de 18.0
    titleScore: 5.0,
    capScore: 1.5,
    antiguedadScore: 5.5,
    legajoScore: 4.5,
    antecedentesTotal: 16.5,
    totalPreproyecto: 39.9,
    status: "🔴 ELIMINADA (Menos de 25.0 pts min en escrito)"
  }
];

console.log('=== CANDIDATE COMPARISON MATRIX ===\n');
candidates.forEach(c => {
  console.log(`${c.id} | ${c.title}`);
  console.log(`  Examen Escrito: ${c.writtenScore} / 35 Pts`);
  console.log(`  Antecedentes: Título (${c.titleScore}) + Cap (${c.capScore}) + Antig (${c.antiguedadScore}) + Legajo (${c.legajoScore}) = ${c.antecedentesTotal} / 25 Pts`);
  console.log(`  TOTAL ACUMULADO PRE-PROYECTO: ${c.totalPreproyecto} / 60 Pts | ${c.status}\n`);
});
