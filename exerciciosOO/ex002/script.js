
class CarrinhosCompras {
    constructor(itens, qtd, vTotal){
        this.itens = itens;
        this.qtd = qtd;
        this.vTotal = vTotal;
    }
    
    adicionarItem(item){
        
        let contador = 0;

        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }
            if(contador == 0){
                this.itens.push(item);
            }

            this.qtd += item.qtd;
            this.vTotal += item.preco * item.qtd;
    }

    excluirIntem(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens
            }
        }
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
carrinho1.adicionarItem({id:02, nome: 'Carne', preco: 40, qtd: 1});
console.log(carrinho1);


