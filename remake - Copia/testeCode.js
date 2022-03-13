for (let i = 1; i < salarioProfessores.length; i++) {
  if (salarioProfessores[i].sexo == 'F') {
    totalDeMulheres++
    salarioProfessores[i].salario_liquido =
      salarioProfessores[i].salario_bruto -
      (5 * salarioProfessores[i].salario_bruto) / 100
    total_salario_liquido_feminino += salarioProfessores[i].salario_liquido
    media_salario_liquido_feminino =
      total_salario_liquido_feminino / totalDeMulheres
  } else {
    totalDeHomens++
    salarioProfessores[i].salario_liquido =
      salarioProfessores[i].salario_bruto -
      (10 * salarioProfessores[i].salario_bruto) / 100
    total_salario_liquido_masculino += salarioProfessores[i].salario_liquido
    media_salario_liquido_masculino =
      total_salario_liquido_masculino / totalDeHomens
  }
}

salarioProfessores.map(function (value, index, array) {
  if (value[index].sexo == 'F') {
    totalDeMulheres++
    value[index].salario_liquido =
      value[index].salario_bruto - (5 * value[index].salario_bruto) / 100
    total_salario_liquido_feminino += value[index].salario_liquido
    media_salario_liquido_feminino =
      total_salario_liquido_feminino / totalDeMulheres
  } else {
    totalDeHomens++
    value[index].salario_liquido =
      value[index].salario_bruto - (10 * value[index].salario_bruto) / 100
    total_salario_liquido_masculino += value[index].salario_liquido
    media_salario_liquido_masculino =
      total_salario_liquido_masculino / totalDeMulheres
  }
})
