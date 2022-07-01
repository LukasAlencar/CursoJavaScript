let pessoa ={
    nome: '',
    idade: '',
    setNome(nome){
        this.nome = nome;
    },
    setIdade(idade){
        this.idade = idade
    },
    getNome(){
        return "O nome é: " + this.nome;
    },
    getIdade(){
        return "A idade é: " + this.idade;
    }
}


pessoa.setNome("Lucas");
pessoa.setIdade(18);

console.log(pessoa.getNome());
console.log(pessoa.getIdade());

