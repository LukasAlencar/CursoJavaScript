function Cachorro(cor, raca, nome){
    this.raca = raca;
    this.cor = cor;
    this.nome = nome;
}

Cachorro.prototype.uivar = function(){
    console.log("AUUUUU");
}

let husky = new Cachorro('Branco', 'Husky', 'Nine');

husky.uivar();