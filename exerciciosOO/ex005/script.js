
class Conta{
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca){
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }


    
    verificarAniversario(){
        this.saldoPoupanca += (this.saldoPoupanca * this.jurosPoupanca) / 100;
    }

    depositoCorrente(valor){
        this.saldoCorrente += valor;
    }

    saqueCorrente(valor){
        if(this.saldoCorrente > valor){
            this.saldoCorrente -= valor;
        }
        else{
            console.log("Você não possui saldo suficiente")
        }
    }

    transferir(valor){
        if(this.saldoCorrente > valor){
            this.saldoCorrente -= valor;
            this.saldoPoupanca += valor;
        }
        else{
            console.log("Você não possui saldo suficiente")
        }
    }

    

}


class ContaEspecial extends Conta{
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca){
        super(saldoCorrente, saldoPoupanca, jurosPoupanca*2)
    }
}

 



let contaLucas = new Conta(1000, 500, 1);

contaLucas.verificarAniversario(true);
console.log(contaLucas);
contaLucas.depositoCorrente(102);
console.log(contaLucas);
contaLucas.saqueCorrente(99);
contaLucas.verificarAniversario(true);
console.log(contaLucas);
contaLucas.transferir(200);
console.log(contaLucas);


console.log('--------------------------------------------------------------------------------');

let contaLucasEspecial = new ContaEspecial(1000, 500, 1);

contaLucasEspecial.verificarAniversario();
console.log(contaLucasEspecial);
contaLucasEspecial.depositoCorrente(102);
console.log(contaLucasEspecial);
contaLucasEspecial.saqueCorrente(99);
contaLucasEspecial.verificarAniversario();
console.log(contaLucasEspecial);
contaLucasEspecial.transferir(200);
console.log(contaLucasEspecial);


