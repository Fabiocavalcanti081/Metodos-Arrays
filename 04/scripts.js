const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function filaAtendimento(pacientes, operacao, nome) {
    if (operacao === "agendar") {
        pacientes.push(nome);
    } else if (operacao === "atender") {
        pacientes.shift();
    }
    let lista = pacientes.join(", ");
    console.log(lista);
}

filaAtendimento(pacientes, "agendar", "Fábio");