
class CarrinhosCompras {
    constructor(itens, qtd, vTotal){
        this.itens = itens;
        this.qtd = qtd;
        this.vTotal = vTotal;
    }
    
    adicionarItem(item){
        
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd;
            }
        }
            this.qtd += item.qtd;
            this.vTotal += item.valor * item.qtd;
    }

}

let carrinho1 = new CarrinhosCompras([
    {
        id:01,
        nome: 'Macarrão',
        preco: 3,
        qtd: 1,
    }
], 1, 3);


carrinho1.adicionarItem({id:01, nome: 'Macarrão', preco: 3, qtd: 1});
console.log(carrinho1);
