const semesters = [
  {
    name: "Semestre 1",
    subjects: [
      { code: "733527", name: "INGLES FUNCIONAL I" },
      { code: "231114", name: "SALUD PUBLICA" },
      { code: "960110", name: "PSICOLOGIA DEL CICLO VITAL (OBST.)" },
      { code: "940116", name: "ANTROPOLOGIA (OBSTETRICIA)" },
      { code: "271120", name: "ANATOMIA DESCRIPTIVA" },
      { code: "231113", name: "FUNDAMENTOS DE LA PROFESION" }
    ]
  },
  {
    name: "Semestre 2",
    subjects: [
      { code: "960111", name: "DESARROLLO PERSONAL I (OBSTET.)", prereq: ["960110", "231113"] },
      { code: "900115", name: "SOCIOLOGIA (OBSTETRICIA)" },
      { code: "257114", name: "BIOLOGIA CELULAR Y TISULAR" },
      { code: "530026", name: "QUIMICA GENERAL Y ORGANICA BASICA" },
      { code: "231116", name: "SALUD FAMILIAR Y COMUNITARIA", prereq: ["231114", "960110"] },
      { code: "231115", name: "EDUCACION PARA LA SALUD" }
    ]
  },
  {
    name: "Semestre 3",
    subjects: [
      { code: "231216", name: "BASES DE ENFERMERIA", prereq: ["257114", "271120"] },
      { code: "231217", name: "SEXUALIDAD HUMANA", prereq: ["960110"] },
      { code: "253225", name: "FISIOLOGIA HUMANA OB
