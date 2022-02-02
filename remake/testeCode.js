// escolherItem = () => {
//     exibeItens()
//     let i = parseInt(prompt(exibeProdutos()))
//     while (i > produtos.length) return exibeMenu()
//     let quantidade = parseInt(prompt('Quantidade'))
//         //(() => ( ))()
//     produtos.map(elem => {
//         if (quantidade > elem.estoque) return console.log('Estoque disponível:', elem.estoque)
//         totalProdutos += elem.valor * quantidade
//         carrinho.forEach(currentValue => {
//             if (currentValue.item == elem.item) {
//                 currentValue.item += quantidade
//             }
//         })
//         carrinho.push(elem.item, quantidade, elem.valor)
//         elem.estoque -= quantidade
//         return (
//             console.log('Total (R$):', totalProdutos),
//             exibeMenu()
//         )
//     })
// }

// removerItem = (i, quantidade, quantidadeCarrinho) => {
//     if (!carrinho.length) return alert('O Carrinho está Vazio.'), exibeMenu()
//     i = recebeVar('Carrinho:\n' + exibeCarrinho() + '\nTotal R$:' + totalProdutos)
//     quantidade = recebeVar('Quantidade')
//     quantidadeCarrinho = carrinho[i].quantidade
//     while (quantidade > quantidadeCarrinho) {
//         quantidadeCarrinho = quantidadeCarrinho
//         alert('Item:', carrinho[i]), (quantidade = parseInt(prompt('Quantidade')))
//     }
//     if (produtos.map(value => value.item) == carrinho[i].item) {;
//         (quantidadeCarrinho -= quantidade), (produtos[j].estoque += quantidade);
//         (quantidade *= carrinho[i].valor), (totalProdutos -= quantidade)
//     }
// }

removerItem = (i, quantidade, item) => {
    if (!carrinho.length) return alert('O Carrinho está Vazio.'), exibeMenu() //Se não houver nada no carrinho
    i = recebeInt('Carrinho:\n' + exibeCarrinho() + '\nTotal R$:' + totalProdutos) //i - índice
    let quantidadeItem = carrinho[i].quantidade
    quantidade = recebeInt('Quantidade')
    item = carrinho[i].item
    while (quantidade > quantidadeItem) {
        alert(exibeCarrinho()), (quantidade = parseInt(prompt('Quantidade')))
    }
    produtos.map(function(value) {
        if (carrinho[i].item == value.item) {
            carrinho[i].quantidade -= quantidade
            produtos[j].estoque += quantidade
            return (totalProdutos -= quantidade * carrinho[i].valor)
        }
    })
    if (carrinho[i].quantidade == 0) return carrinho.splice(i, 1), exibeMenu() //A quantidade do item selecionado no carrrinho for igual a 0, o array é removido.
}
$scope.appIds = $scope.applicationsHere.map(function(obj) {
    if (obj.selected == true) {
        return obj.id
    }
})