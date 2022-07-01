class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);

class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas, patas);
        this.raca = raca;
    }
    get getCor(){
        return this.cor;
    }

}

//verificar se é o pai do objeto;
console.log(new Cachorro instanceof Mamifero);
console.log(coiote instanceof Mamifero);


