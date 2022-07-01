class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }
    get getCor(){
        return this.cor;
    }
    set setCor(cor){
        this.cor = cor;
    }
}

let pastor = new Cachorro('Pastor Alemão', 'n/a');

console.log(pastor.getCor);

pastor.setCor = 'Marrom'

console.log(pastor.getCor);