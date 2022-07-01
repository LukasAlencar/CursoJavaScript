let cachorro ={
    raca: '',
    patas: 4,
    latir(){
        console.log('Auau');
    }
}


let pastorAlemao = Object.create(cachorro);

labrador.raca = 'Labrador';

pastorAlemao.latir();

console.log(labrador.raca);

  console.log(cachorro.raca);