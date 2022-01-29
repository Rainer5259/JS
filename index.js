let saldoUsuario = 500,
    totalProdutos = 0

const produtos = [
    //PARA ARRAY "COMEÇAR" EM 1. MELHOR FORMA? //#REVISAR#
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
let carrinho = []
const catalogo = [
    '////////CANTINHO DO HARDWARE - STORE////////\n' +
    '1 - Produtos\n' +
    '-----------------------\n' +
    '2 - Lista de Produtos e Preços (ver log)\n' +
    '3 - Remover item do carrinho\n' +
    '4 - Finalizar compra\n' +
    '5 - Ver carrinho\n' +
    '6 - Sair sem comprar'
]
log = exibir => console.log(exibir)

listaDeItens = () => produtos.map((index, element) => log(element[index]))
exibirSaldoUsuario = () => console.log('Seu saldo:', saldoUsuario)

exibirCarrinho = () => {
    carrinho.map(value => {
            if (!carrinho.length) return console.error('Vazio!'), exibirMenu()
            console.log(
                '*-*-*-*-*-Carrinho-*-*-*-*-*\n' + value.item,
                '\nQuantidade: ' + value.quantidade,
                '\nPreço: ' + value.valor
            )
        }),
        console.log('Total de produtos - R$:' + totalProdutos),
        exibirMenu()
}
show = () => produtos.map(elem => '\n' + elem.item + +elem.valor)
escolherItem = () => {
    listaDeItens()
    let i = parseInt(prompt(show()))
    while (i > produtos.length - 1) return exibirMenu()
    let quantidade = parseInt(prompt('Quantidade')),
        item = produtos[i].item,
        estoque = produtos[i].estoque,
        valor = produtos[i].valor
    totalProdutos += valor * quantidade
    if (quantidade > estoque) return console.log('Estoque disponível:', estoque)
    for (let i = 1; i < carrinho.length; i++) {
        if (carrinho[i].item == item) {
            carrinho[i].quantidade += quantidade
            estoque -= quantidade
            return exibirMenu(), console.log('Total (R$):', totalProdutos)
        }
    }
    carrinho.push({ item, quantidade, valor })
    estoque -= quantidade
    return (
        console.log('Total (R$):', totalProdutos),
        setTimeout(() => exibirMenu(), 300)
    )
}

removerItem = () => {
    let i = parseInt(prompt('Insira o índice do Item (veja o log)')) //###VISUALIZAR O ÍNDICE NO LOG###
    if (!carrinho[i]) return exibirMenu(), console.error('Vazio.')
    let quantidade = parseInt(prompt('Quantidade'))
    while (quantidade > carrinho[i].quantidade) {
        carrinho[i].quantidade = carrinho[i].quantidade
        console.log('Você está tentando remover mais do que tem', carrinho[i]),
            (quantidade = parseInt(prompt('Quantidade')))
    }
    for (let j = 1; j < produtos.length; j++) {
        if (produtos[j].item == carrinho[i].item) {
            carrinho[i].quantidade -= quantidade
            produtos[j].estoque += quantidade
            quantidade *= carrinho[i].valor
            totalProdutos -= quantidade
        }
        setTimeout(() => exibirMenu(), 3000)
    }
    exibirCarrinho()
    if (carrinho[i].quantidade == 0)
        return carrinho.splice(i, 1), exibirCarrinho(), exibirMenu()
}

finalizarCompra = () => {
    if (carrinho.length == 1) return console.error('Carrinho Vazio'), exibirMenu()
    if (saldoUsuario >= totalProdutos) {
        saldoUsuario -= totalProdutos
        return (
            console.warn('Compra realizada'), exibirCarrinho(), exibirSaldoUsuario()
        )
    }
    return (
        console.warn('Saldo insuficiente.'), exibirCarrinho(), exibirSaldoUsuario()
    )
}

exibirMenu = () => {
    let opcao = parseInt(prompt(catalogo))
    while (opcao < 1 || opcao > 5)
        return console.log('Opção inexistente'), exibirMenu()
    switch (opcao) {
        case 1:
            {
                escolherItem(carrinho)
                break
            }
        case 2:
            {
                exibirProdutosEPrecos()
                break
            }
        case 3:
            {
                exibirCarrinho()
                removerItem()
                break
            }
        case 4:
            {
                finalizarCompra()
                break
            }
        case 5:
            {
                exibirCarrinho()
                break
            }
        default:
            {
                if (opcao === 6) {
                    console.log('Saiu da loja.')
                    break
                }
            }
    }
}
setTimeout(() => {
    exibirMenu()
}, 1000)

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