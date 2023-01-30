const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function frutaInvertido(frutas) {
    let fruta = frutas.reverse();
    fruta = fruta.join(", ");
    console.log(fruta);
}
function frutasB(frutas) {
    let fruta = frutas.reverse();
    frutas.shift();
    frutas.pop();
    frutas.push("Melão");
    console.log(frutas);
}
frutaInvertido(frutas);
frutasB(frutas);
