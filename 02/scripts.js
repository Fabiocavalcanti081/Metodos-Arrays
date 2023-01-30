const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function divisaoGrupos(nomes) {
    let quantidade = Math.abs(tamanhoDoGrupo - nomes.length);
    let i = 0;
    let resto = [];

    while (i < quantidade) {
        resto.unshift(nomes.pop());
        i++
    }
    const grupo1 = nomes.join(", ");
    const grupo2 = resto.join(", ")
    console.log(`Grupo 1: ${grupo1}.`);
    console.log(`Grupo 2: ${grupo2}.`);
}

divisaoGrupos(nomes);