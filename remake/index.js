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

exibeItens = () => produtos.map(value => `\n${value.item} - R$: ${value.valor}`)

exibeSaldoUsuario = () => 'Seu saldo: R$' + saldoUsuario

exibeCarrinho = () => carrinho.map(value => value.item + ' R$: ' + value.valor)

recebeVar = valor => (valor = parseInt(prompt(valor)))

escolherItem = (i, item, estoque, valor, quantidade) => {
    i = recebeVar('Produtos Disponíveis:\n' + exibeItens())
    if (i > produtos.length) return exibeMenu()
    quantidade = parseInt(prompt('Quantidade'));
    (item = produtos[i].item), (valor = produtos[i].valor);
    (estoque = produtos[i].estoque), (totalProdutos += valor * quantidade)
    if (quantidade > estoque) return alert('Estoque disponível:', estoque)
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].item == item) {;
            (carrinho[i].quantidade += quantidade), (estoque -= quantidade)
            return exibeMenu()
        }
    }
    carrinho.push({ item, valor, quantidade }), (estoque -= quantidade)
    exibeMenu()
}

removerItem = (i, quantidade, quantidadeCarrinho) => {
    if (!carrinho.length) return alert('O Carrinho está Vazio.'), exibeMenu()
    i = recebeVar('Carrinho:\n' + exibeCarrinho() + '\nTotal R$:' + totalProdutos)
    quantidade = recebeVar('Quantidade')
    quantidadeCarrinho = carrinho[i].quantidade
    while (quantidade > quantidadeCarrinho) {
        quantidadeCarrinho = quantidadeCarrinho
        alert('Item:', carrinho[i]), (quantidade = parseInt(prompt('Quantidade')))
    }
    for (let j = 1; j < produtos.length; j++) {
        if (produtos[j].item == carrinho[i].item) {;
            (quantidadeCarrinho -= quantidade), (produtos[j].estoque += quantidade);
            (quantidade *= carrinho[i].valor), (totalProdutos -= quantidade)
        }
        alert(exibeCarrinho(), exibeMenu())
    }
    exibeCarrinho()
    if (quantidadeCarrinho == 0) return carrinho.splice(i, 1), exibeMenu()
}

finalizarCompra = () => {
    if (!carrinho.length) return alert('Não há nada no carrinho'), exibeMenu()
    else if (saldoUsuario >= totalProdutos) {
        saldoUsuario -= totalProdutos
        return alert(`Compra realizada\n${exibeCarrinho()}`)
    }
    alert(`Saldo insuficiente.${exibeCarrinho()}${exibeSaldoUsuario()}`),
        exibeMenu()
}

exibeMenu = () => {
    let opcao = recebeVar(catalogo)
    while (opcao < 1 || opcao > 5) return alert('Opção inexistente'), exibeMenu()
    switch (opcao) {
        case 1:
            {
                escolherItem()
                break
            }
        case 2:
            {
                alert('Produtos disponiveis:\n' + exibeItens()),
                exibeMenu()
                break
            }
        case 3:
            {
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
                alert('Carrinho:\n' + exibeCarrinho())
                break
            }
    }
}
setTimeout(() => exibeMenu(), 1500)

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