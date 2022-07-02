class Conta {
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(valor){
        this.saldo += valor;
    }
    saque(valor){
        this.saldo -= valor;
    }
}

let conta1 = new Conta(1000);

console.log(conta1.saldo);

conta1.deposito(500);

console.log(conta1.saldo);

conta1.saque(100);

console.log(conta1.saldo);
