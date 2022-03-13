//RESULTADOS SERÃO EXIBIDOS NO LOG DO BROWSER.
let totalDeHomens = 0,
  totalDeMulheres = 0,
  total_liquido_feminino = 0,
  total_liquido_masculino = 0,
  media_liquido_feminino = 0,
  media_liquido_masculino = 0
const salario = []
function exibirFolhaDePagamentoDosProfessores() {
  let sexo = '' // declarada antes do "do{}" senão será "undefined" ao chamar dentro do while.
  do {
    let carga_horaria_mensal = parseInt(prompt('Hora/Aula prestadas - Mensal')),
      bruto = 0,
      liquido = 0,
      valorHoraAula = 30
    sexo = prompt('Sexo: "M" - Masculino | "F" - Feminino')
    bruto = carga_horaria_mensal * valorHoraAula
    salario.push({
      sexo,
      carga_horaria_mensal,
      bruto,
      liquido
    })
  } while (sexo != '99999')
  salario.pop() //Remove o ultimo item do array; no quesito do loop '99999' deve ser o código de parada, porém, sem utilidade ulteriormente.
  for (let i = 0; i < salario.length; i++) {
    switch (salario[i].sexo) {
      case 'F': {
        totalDeMulheres++
        salario[i].liquido = salario[i].bruto - (5 * salario[i].bruto) / 100
        total_liquido_feminino += salario[i].liquido
        media_liquido_feminino = total_liquido_feminino / totalDeMulheres
        break
      }
      case 'M': {
        totalDeHomens++
        salario[i].liquido = salario[i].bruto - (10 * salario[i].bruto) / 100
        total_liquido_masculino += salario[i].liquido
        media_liquido_masculino = total_liquido_masculino / totalDeHomens
        break
      }
    }
  }
  salario.map(value => {
    console.log(
      'Sexo:',
      value.sexo,
      'Salário Bruto',
      value.bruto,
      'Salário Líquido',
      value.liquido
    )
  })
  console.log(
    'Media / líquido Feminino:',
    media_liquido_feminino,
    '| Total de Mulheres:',
    totalDeMulheres,
    '\n\nMedia / líquido Masculino:',
    media_liquido_masculino,
    '| Total de Homens:',
    totalDeHomens
  )
}
exibirFolhaDePagamentoDosProfessores()
