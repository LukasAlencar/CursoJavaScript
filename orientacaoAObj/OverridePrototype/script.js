class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.raca = cor;
    }
}


Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.nome = 'SRD';

let labrador = new Cachorro('Labrador', 'Amarelo');

console.log(labrador.nome);

console.log(Cachorro.prototype.nome);
