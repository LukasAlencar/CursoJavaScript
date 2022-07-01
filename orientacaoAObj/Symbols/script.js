class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.raca = cor;
    }
}

//Criar Symbol;
let patas = Symbol();
Cachorro.prototype[patas] = 4;

Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.nome = 'SRD';


let labrador = new Cachorro('Labrador', 'Amarelo');

console.log(labrador.nome);

//Acessar Symbol
console.log(Cachorro.prototype[patas]);
console.log(labrador[patas]);


