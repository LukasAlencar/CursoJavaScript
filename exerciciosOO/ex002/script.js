
class CarrinhosCompras {
    constructor(itens, qtdTotal, vTotal){
        this.itens = itens;
        this.qtdTotal = qtdTotal;
        this.vTotal = vTotal;
    }
    adicionarItem(item){
        let verificarExistencia = 0;
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtdTotal += item.qtdTotal;
                verificarExistencia = 1;
            }

            if(verificarExistencia == 0){
                this.itens.push(item);
            }

            this.qtdTotal += item.qtdTotal;
            this.vTotal += item.valor * item.qtd;

        }
    } 
    removerItem(item){
        
    }

}

let carrinho1 = new CarrinhosCompras([
    {
        id: 1,
        nome: 'Macarrão',
        valor: 3
    }
], 1, 3);


carrinho1.adicionarItem(1, 'Macarrão', 3);

console.log(carrinho1);

carrinho1.adicionarItem(2, 'Boné', 20);
