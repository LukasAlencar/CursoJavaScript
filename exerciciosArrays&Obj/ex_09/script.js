let calc ={
    somar(num1, num2){
        return num1 + num2;
    },
    subtrair(num1, num2){
        return num1 - num2;
    },
    multiplicar(num1, num2){
        return num1 * num2;
    },
    dividir(num1, num2){
        return num1 / num2;
    }
}

console.log(calc.somar(2, 3));
console.log(calc.subtrair(2, 3));
console.log(calc.multiplicar(2, 3));
console.log(calc.dividir(10, 5));
