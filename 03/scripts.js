const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function gruposCarros(nomes, posicao) {
    let i = posicao;
    let resultado = posicao + 3;
    let carros = [];

    while (i < resultado) {
        carros.push(nomes[i]);
        i++
    }

    carros = carros.join(" - ");
    console.log(carros);
}

gruposCarros(nomes, posicao);