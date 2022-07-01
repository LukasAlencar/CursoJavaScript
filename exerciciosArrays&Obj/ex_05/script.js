let nomes = ['Lucas', 'João', 'Pedro', 'Tiago', 'Jesus', 'Paulo'];
let nomes2 = ['Maria', 'Madalena', 'Miriam'];

function verificarQuantidade(nomes){
    if(nomes.length < 5){
        console.log('Poucos elementos');
    }else{
        console.log('Muitos elementos');
    }
}

verificarQuantidade(nomes);
verificarQuantidade(nomes2);


