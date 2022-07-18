
class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado 
    }

    setRua(rua){
        this.rua = rua;
    }
    setBairro(bairro){
        this.bairro = bairro;
    }
    setCidade(cidade){
        this.cidade = cidade;
    }
    setEstado(estado){
        this.estado = estado;
    }

}

let endereco = new Endereco('Rua José', 'Bairro Centro', 'Sj', 'pe'); 

console.log(endereco);
endereco.setRua('testeRua');
console.log(endereco);
endereco.setCidade('testeCidade');
console.log(endereco);
endereco.setBairro('testeBairro');
console.log(endereco);
endereco.setEstado('testeEstado');
console.log(endereco);




