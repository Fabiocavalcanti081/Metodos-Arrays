const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 1;

function divisaoGrupos(nomes, tamanhoDoGrupo) {
    let grupos = [];
    let quantos = (nomes.length / tamanhoDoGrupo).toFixed();
    let num = 0;

    for (let i = 0; i < quantos; i++) {
        grupos.push(nomes.splice(0, tamanhoDoGrupo).join(", "));
    }
    for (let i = 0; i < grupos.length; i++) {
        num++;
        console.log(`Grupo ${num}: ${grupos[i]}`);
    }
    if (nomes.length >= 1) {
        console.log(`Grupo ${num}: ${nomes.join(", ")}`);
    }
}

divisaoGrupos(nomes, tamanhoDoGrupo);