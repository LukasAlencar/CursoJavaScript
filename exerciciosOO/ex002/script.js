class Item{
    constructor(nome, desc, valor){
        this.nome = nome;
        this.desc = desc;
        this.valor = valor;
    }
}

class CarrinhosCompras {
    constructor(itens, qtdTotal, vTotal){
        this.itens = [...itens];
        this.qtdTotal = qtdTotal;
        this.vTotal = vTotal;
    }
    adicionarItem(item = new Item(nome, desc, valor)){
        this.itens.push(item);
        this.qtdTotal += 1;
        this.vTotal += item.valor;
    } 
    removerItem(item){
        
    }

}

let carrinho1 = new CarrinhosCompras([
    {
        nome: 'Miojo',
        desc: '3min',
        valor: 3
    }
], 1, 3);
carrinho1.adicionarItem('Macarrão', 'Macarrão instataneo', 10);

console.log(carrinho1);