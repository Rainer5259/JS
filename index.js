let saldoUsuario = 500,
  totalProdutos = 0
const catalogo = [
  '////////CANTINHO DO HARDWARE - STORE////////\n' +
    '1 - Hardware\n' +
    '-----------------------\n' +
    '2 - Remover item do carrinho\n' +
    '3 - Finalizar compra\n' +
    '4 - Ver carrinho\n' +
    '5 - Sair sem comprar'
]
const hardwareCatalogo = [
  'Escolha o produto desejado:\n' +
    '1 - Processador\n' +
    '2 - RAM\n' +
    '3 - Placa-Mãe\n'
]
const produtos = [
  {}, //PARA ARRAY "COMEÇAR" EM 1. MELHOR FORMA? //#REVISAR#
  {
    item: 'Processador',
    estoque: 27,
    valor: 650
  },
  {
    item: 'Ram',
    estoque: 52,
    valor: 125
  },
  {
    item: 'Placa-Mãe',
    estoque: 325,
    valor: 132
  }
]
let carrinho = [{}]
mostrarCarrinho = () => console.log(carrinho)
input = () => {
  let i = parseInt(prompt(hardwareCatalogo)),
    quantidade = parseInt(prompt('Quantidade')),
    item = produtos[i].item,
    estoque = produtos[i].estoque,
    valor = produtos[i].valor
  totalProdutos += valor * quantidade
  if (quantidade > estoque) return console.log('Estoque disponível:', estoque)
  for (let i = 1; i < carrinho.length; i++) {
    if (carrinho[i].item == item) {
      carrinho[i].quantidade += quantidade
      estoque -= quantidade
      return menu(), console.log('Total (R$):', totalProdutos)
    }
  }
  carrinho.push({ item, quantidade, valor })
  estoque -= quantidade
  return menu(), console.log('Total (R$):', totalProdutos)
}
removerItem = () => {
  let i = parseInt(prompt('Insira o índice do Item (veja o log)')) //###VISUALIZAR O ÍNDICE NO LOG###
  if (!carrinho[i]) return menu(), console.error('Vazio.')
  let count = parseInt(prompt('Quantidade'))
  while (count > carrinho[i].quantidade) {
    carrinho[i].quantidade = carrinho[i].quantidade
    console.log('Você está tentando remover mais do que tem', carrinho[i])
    count = parseInt(prompt('Quantidade'))
  }
  for (let j = 1; j < produtos.length; j++) {
    if (produtos[j].item == carrinho[i].item) {
      carrinho[i].quantidade -= count
      produtos[j].estoque += count
      count *= carrinho[i].valor
      totalProdutos -= count
    }
  }
  if (carrinho[i].quantidade == 0)
    return (
      carrinho.splice(i, 1),
      console.log('Carrinho:', carrinho, '\nProdutos:', produtos),
      menu()
    )
}
finalizarCompra = () => {
  //carrinho.length == 1 porque começa com um array vazio
  if (carrinho.length == 1) return console.error('Carrinho Vazio'), menu()
  if (saldoUsuario >= totalProdutos) {
    saldoUsuario -= totalProdutos
    return (
      console.log(carrinho, 'Saldo:', saldoUsuario),
      console.warn('Compra realizada com sucesso!')
    )
  }
  return console.warn('Saldo insuficiente.'), mostrarCarrinho()
}
menu = () => {
  let opcao = parseInt(prompt(catalogo))
  while (opcao < 1 || opcao > 5) return console.log('Opção inexistente'), menu()
  switch (opcao) {
    case 1: {
      input()
      break
    }
    case 2: {
      removerItem()
      break
    }
    case 3: {
      finalizarCompra()
      break
    }
    case 4: {
      mostrarCarrinho()
    }
    default: {
      if (opcao === 5) {
        console.log('Saiu da loja.')
        break
      }
    }
  }
}
menu()
//Seção de Compras
// function preCompra(valorProduto, itemQuantidade, i, item) {
//   totalProdutos = valorProduto * itemQuantidade
//   saldoAtual = saldoUsuario - totalProdutos
//   produtos[i].estoque -= itemQuantidade
//   console.log('Quantidade de ', item, itemQuantidade)
// }
//Encerra compra dentro das condições.
// function finalizarCompra() {
//   if (saldoAtual >= 0)
//     return console.log(
//       'Compra Finalizada. ',
//       '\nQuantidade de Itens: ',
//       mostrarCarrinho(),
//       '\nValor Total dos Produtos: ',
//       totalProdutos,
//       '\nSaldo atual:',
//       saldoAtual
//     )
//   return (
//     console.log(
//       'Saldo Insuficiente. Seu atual: ',
//       saldoAtual,
//       'Valor total dos produtos: ',
//       totalProdutos,
//       '\nRemova algum item',

//       mostrarCarrinho()
//     ),
//     secaoDeCompras()
//   )
// }
// function secaoDeCompras() {
//   let menu = prompt(catalogo)
//   switch (menu) {
//     case '1': {
//       produtoDisponivel(0)
//       input('processador')
//       preCompra(produtoValor(0), carrinho.processador, 0, 'Processador')
//       return secaoDeCompras()
//     }
//     case '2': {
//       produtoDisponivel(1)
//       input('ram')
//       preCompra(produtoValor(1), carrinho.ram, 1, 'Memória')
//       return secaoDeCompras()
//     }
//     case '3': {
//       produtoDisponivel(2)
//       input('placaMae')
//       preCompra(produtoValor(2), carrinho.placaMae, 2, 'Placa-Mãe')
//       return secaoDeCompras()
//     }
//     case '4': {
//       return finalizarCompra()
//     }
//     case '5': {
//       mostrarCarrinho()
//       let input = prompt('1 - Processador\n 2 - RAM\n 3 - Placa-Mãe')
//       removerItem = deleteItem => {
//         let item = parseInt(prompt('Quantidade à ser removida'))
//         carrinho[deleteItem] -= item
//       }
//       switch (input) {
//         case '1': {
//           return removerItem('processador'), secaoDeCompras()
//         }
//         case '2': {
//           removerItem('ram')
//           return secaoDeCompras()
//         }
//         case '3': {
//           return removerItem('placaMae'), secaoDeCompras()
//         }
//       }
//     }
//     case '6': {
//       console.log(carrinho, saldoAtual)
//     }
//     case '7': {
//       break
//     }
//   }
// }
// secaoDeCompras()
