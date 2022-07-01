let onibus = {
    rodas: 8,
    limPassageiros: 40,
    portas: 2
}

//Adicionar propiedades a um obj
onibus.janelas = 20;
delete onibus.rodas;

console.log(onibus);
console.log(onibus.janelas);