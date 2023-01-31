const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function gruposCarros(nomes) {
    let carros = nomes.slice(posicao, posicao + 3);
    carros = carros.join(" - ");

    console.log(carros);
}

gruposCarros(nomes);