let saldoUsuario = 500
let totalProdutos = 0
const produtos = [{
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
log = exibe => console.log(exibe)

<<<<<<< HEAD
exibeItens = () => produtos.map(elem => '\n' + elem.item + 'R$:' + elem.valor)
=======
function exibeItens() {
    produtos.forEach(value => {
        value.item
    })
}
>>>>>>> 774ca118df75f6cd876aca72bf419604a25c86ff

exibeSaldoUsuario = () => 'Seu saldo: R$' + saldoUsuario

<<<<<<< HEAD
exibeCarrinho = () => carrinho

escolherItem = (i, item, estoque, valor, quantidade) => {
    i = parseInt(prompt(exibeItens()))
=======
exibeCarrinho = () => {
    carrinho.map(value => {
            log(
                '*-*-*-*-*-Carrinho-*-*-*-*-*',
                '\nItem: ' + value.item,
                '\nQuantidade: ' + value.quantidade,
                '\nPreço: ' + value.valor,
                '\n\nTotal de produtos - R$:' + totalProdutos
            )
        }),
        exibeMenu()
}
escolherItem = (i, item, valor, estoque, quantidade) => {
>>>>>>> 774ca118df75f6cd876aca72bf419604a25c86ff
    while (i > produtos.length) return exibeMenu()
    quantidade = parseInt(prompt('Quantidade'))
    item = produtos[i].item
    valor = produtos[i].valor
    estoque = produtos[i].estoque
<<<<<<< HEAD
=======
    if (quantidade > estoque) return console.log('Estoque disponível:', estoque)
>>>>>>> 774ca118df75f6cd876aca72bf419604a25c86ff
    totalProdutos += valor * quantidade
    if (quantidade > estoque) return console.log('Estoque disponível:', estoque)
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].item == item) {;
            (carrinho[i].quantidade += quantidade), (estoque -= quantidade)
            return exibeMenu()
        }
    }
    carrinho.push({ item, valor, quantidade }), (estoque -= quantidade)
<<<<<<< HEAD
    exibeMenu()
}

removerItem = (i, quantidade, quantidadeCarrinho) => {
    i = parseInt(prompt('Insira o índice do Item (veja o log)')) //###VISUALIZAR O ÍNDICE NO LOG###
    if (!carrinho[i]) return exibeMenu(), console.error('Vazio.')
    quantidade = parseInt(prompt('Quantidade'))
    quantidadeCarrinho = carrinho[i].quantidade
    while (quantidade > quantidadeCarrinho) {
        quantidadeCarrinho = quantidadeCarrinho
        log('Você está tentando remover mais do que tem', carrinho[i]),
            (quantidade = parseInt(prompt('Quantidade')))
    }
    for (let j = 1; j < produtos.length; j++) {
        if (produtos[j].item == carrinho[i].item) {;
            (quantidadeCarrinho -= quantidade), (produtos[j].estoque += quantidade);
            (quantidade *= carrinho[i].valor), (totalProdutos -= quantidade)
=======
    return exibeMenu()
}

removerItem = (i, carrinhoQuant, item) => {
    //###VISUALIZAR O ÍNDICE NO LOG###
    i = parseInt(prompt())
    item = carrinho[i].item
    carrinhoQuant = carrinho[i].quantidade
    if (!carrinho[i]) return exibeMenu(), console.error('Vazio.')
    let itemQuant = parseInt(prompt('Quantidade'))
    while (itemQuant > carrinhoQuant) {
        carrinhoQuant = carrinhoQuant
        console.log('Você está tentando remover mais do que tem', carrinho[i]),
            (itemQuant = parseInt(prompt('Quantidade')))
    }
    for (let j = 1; j < produtos.length; j++) {
        if (produtos[j].item == item) {;
            (carrinhoQuant -= itemQuant), (produtos[j].estoque += itemQuant);
            (itemQuant *= carrinho[i].valor), (totalProdutos -= itemQuant)
>>>>>>> 774ca118df75f6cd876aca72bf419604a25c86ff
        }
        setTimeout(() => exibeMenu(), 3000)
    }
    exibeCarrinho()
<<<<<<< HEAD
    if (quantidadeCarrinho == 0)
=======
    if (carrinhoQuant == 0)
>>>>>>> 774ca118df75f6cd876aca72bf419604a25c86ff
        return carrinho.splice(i, 1), exibeCarrinho(), exibeMenu()
}

finalizarCompra = (saldo, total) => {
    if (saldo >= total) {
        saldo -= total
        return console.log('Compra realizada')
    }
    console.log('Saldo insuficiente.')
}

exibeMenu = () => {
    let opcao = parseInt(prompt(catalogo))
    while (opcao < 1 || opcao > 5)
        return console.log('Opção inexistente'), exibeMenu()
    switch (opcao) {
        case 1:
            {
<<<<<<< HEAD
                escolherItem(carrinho)
=======
                escolherItem(parseInt(prompt(exibeItens())))
>>>>>>> 774ca118df75f6cd876aca72bf419604a25c86ff
                break
            }
        case 2:
            {
                log(exibeProdutos())
                break
            }
        case 3:
            {
                exibeCarrinho()
<<<<<<< HEAD
                removerItem()
=======
                removerItem(parseInt(prompt('Insira o índice do Item (veja o log)')))
>>>>>>> 774ca118df75f6cd876aca72bf419604a25c86ff
                break
            }
        case 4:
            {
<<<<<<< HEAD
                finalizarCompra(saldoUsuario, totalProdutos)
=======
                finalizarCompra()
>>>>>>> 774ca118df75f6cd876aca72bf419604a25c86ff
                break
            }
        case 5:
            {
                exibeCarrinho()
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
    exibeMenu()
<<<<<<< HEAD
}, 1500)
=======
}, 1000)
>>>>>>> 774ca118df75f6cd876aca72bf419604a25c86ff

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
var twoSum = function(nums, target) {;
    (nums = [2, 11, 15, 7]), (target = 9)
    nums.reduce((iteratee, currentValue) => {
        if (iteratee + currentValue == target)
            return console.log(iteratee, currentValue)
    })
}