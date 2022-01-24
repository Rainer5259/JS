escolherItem = () => {
    exibeItens()
    let i = parseInt(prompt(exibeProdutos()))
    while (i > produtos.length) return exibeMenu()
    let quantidade = parseInt(prompt('Quantidade'))
        //(() => ( ))()
    produtos.map(elem => {
        if (quantidade > elem.estoque) return console.log('Estoque disponível:', elem.estoque)
        totalProdutos += elem.valor * quantidade
        carrinho.forEach(currentValue => {
            if (currentValue.item == elem.item) {
                currentValue.item += quantidade
            }
        })
        carrinho.push(elem.item, quantidade, elem.valor)
        elem.estoque -= quantidade
        return (
            console.log('Total (R$):', totalProdutos),
            exibeMenu()
        )
    })
}