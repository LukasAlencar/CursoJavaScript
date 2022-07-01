class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas, patas);
        this.raca = raca;
    }
    get getCor(){
        return this.cor;
    }

}

let pastor = new Cachorro(4, 'Pastor Alemão');

console.log(pastor.patas)

