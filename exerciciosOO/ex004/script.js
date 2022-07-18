
class Carro{
    constructor(marca, cor, gasolinaRes){
        this.marca = marca;
        this.cor = cor
        this.gasolinaRes = gasolinaRes
    }

    dirigir(km){
        this.gasolinaRes -= km / 2;
    }
    abastecer(litros){
        this.gasolinaRes += litros;
    }

}

let carro = new Carro('Fiat', 'Preto', 100);
console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abastecer(60);

console.log(carro);





