function loja() {
  let saldoUsuario = 500,
    saldoPosCompra = 0,
    valorTotalDosProdutos = 0,
    qntd_processador = 0,
    qntd_ram = 0,
    qntd_placaMae = 0,
    totalDeProdutos = 0

  var produtos = [
    {
      processador: 'Processador',
      estoque: 27,
      valor: 650
    },
    {
      ram: 'Ram',
      estoque: 52,
      valor: 125
    },
    {
      placa_mae: 'Placa-Mãe',
      estoque: 325,
      valor: 132
    }
  ]

  function carrinho(
    valorDoProduto,
    quantidadeDeItens,
    disponivel,
    tipoDeItemSelecionado
  ) {
    valorTotalDosProdutos = valorDoProduto * quantidadeDeItens
    saldoPosCompra = saldoUsuario - valorTotalDosProdutos
    produtos[disponivel].estoque =
      produtos[disponivel].estoque - quantidadeDeItens

    console.log('Quantidade de:', tipoDeItemSelecionado, quantidadeDeItens)
  }

  function produtoDisponivel(tipoDeItemSelecionado, i) {
    console.log(
      'Quantidade de',
      tipoDeItemSelecionado,
      'em estoque:',
      produtos[i].estoque
    )
  }
  function posCompra() {
    if (saldoPosCompra >= 0) {
      return console.log(
        'Produtos Disponíveis: ',
        produtos,
        '\n',
        'Meu saldo:',
        saldoPosCompra
      )
    } else {
      return console.log('Limite excedido!')
    }
  }
  function comprar() {
    let menu = prompt(
      'Escolha o produto desejado:\n 1 - Processador \n 2 - RAM \n 3 - Placa-Mãe \n 4 - Finalizar compra \n 5 - Sair'
    )
    switch (menu <= valorTotalDosProdutos) {
      case '1': {
        produtoDisponivel('Processador', 0)
        qntd_processador += parseInt(prompt('Digite a quantidade'))
        carrinho(produtos[0].valor, qntd_processador, 0, 'Processador')
        posCompra()
        return comprar()
        // console.log(produtos[0].disponivel)
        // qtnd_processador += prompt('Digite a quantidade')
        // const TemSaldo = verificaSaldo()
        // return comprar()
      }
      case '2': {
        produtoDisponivel('Memória', 1)
        qntd_ram += parseInt(prompt('Digite a quantidade'))
        carrinho(produtos[1].valor, qntd_ram, 1, 'Memória')
        posCompra()
        return comprar()
      }
      case '3': {
        produtoDisponivel('Placa-Mãe', 2)
        qntd_placaMae += parseInt(prompt('Digite a quantidade'))
        carrinho(produtos[2].valor, qntd_placaMae, 2, 'Placa-Mãe')
        posCompra()
        return comprar()
      }
      case '4': {
        totalDeProdutos = qntd_processador + qntd_ram + qntd_placaMae

        console.log(
          'Compra Finalizada.',
          produtos,
          'Quantidade de Itens:',
          totalDeProdutos,
          'Valor Total dos Produtos',
          valorTotalDosProdutos,
          'Saldo atual:',
          saldoPosCompra
        )
        break
      }
      case '5': {
        break
      }
      default: {
        alert(
          'Opção Inexistente!\nPor favor, escolha uma opção válida.\nDeseja retornar ao menu?\n 1 - Sim | 2 - Não'
        )
        let voltarAoMenuAnterior = prompt('Escolha a opção desejada')
        switch (voltarAoMenuAnterior) {
          case '1': {
            comprar()
          }
          case '2': {
            break
          }
        }
      }
    }
  }
  comprar()
}
loja()
