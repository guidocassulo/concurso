const specificCapData = [
  {
    name: "Gabriela López (Ingeniera)",
    written: 27.3,
    antecedentes: 21.50,
    preProject: 48.80
  },
  {
    name: "Participante 4 (Licenciado)",
    written: 33.0,
    antecedentes: 11.00,
    preProject: 44.00
  },
  {
    name: "Guido Cassulo (Capacitaciones Específicas Actuales)",
    written: 28.6,
    antecedentes: 12.45, // 2.0 Tit + 1.5 IA + 0.75 PHP + 0.2 Conc + 2 AntGral + 1 AntDep + 5 Legajo
    preProject: 41.05
  },
  {
    name: "Guido Cassulo (Con +3,0 Pts Cursos Específicos Extra en 10 días)",
    written: 28.6,
    antecedentes: 15.45, // Sube a 15.45 Pts
    preProject: 44.05 // ¡PASAS AL PARTICIPANTE 4 (44.00) EN EL PRE-PROYECTO!
  },
  {
    name: "Guido Cassulo (Con +4,0 Pts Cursos Específicos Extra - Tope Máximo)",
    written: 28.6,
    antecedentes: 16.45,
    preProject: 45.05 // 2° Puesto Pre-Proyecto
  },
  {
    name: "Participante 10 (Técnico)",
    written: 30.2,
    antecedentes: 11.00,
    preProject: 41.20
  }
];

console.log('=== STRICT SPECIFIC SOFTWARE CAPACITACION RE-COMPUTATION ===\n');
specificCapData.forEach(c => {
  console.log(`${c.name}`);
  console.log(`  Escrito: ${c.written} | Antecedentes: ${c.antecedentes} | PRE-PROYECTO: ${c.preProject} Pts\n`);
});
