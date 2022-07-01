let num1 = 1, num2 = 2, num3 = 3, num4 = 4, num5 = 5;

// Os "..." são para declarar que a quantidade ainda vai ser definida
function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}


imprimirNumeros(num1, num2, num3, num4, num5);
imprimirNumeros(12, 322, 12, 342, 32, 434, 66, 7);
imprimirNumeros(num1, num2);
