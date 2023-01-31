const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function divisaoGrupos(nomes) {
    let grupo1 = nomes.slice(0, tamanhoDoGrupo);
    let grupo2 = nomes.slice(tamanhoDoGrupo);
    grupo1 = grupo1.join(", ");
    grupo2 = grupo2.join(", ");

    console.log(`Grupo 1: ${grupo1}.`);
    console.log(`Grupo 2: ${grupo2}.`);
}

divisaoGrupos(nomes);