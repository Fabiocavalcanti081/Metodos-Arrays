const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(pacientes, paciente) {
    pacientes.push(paciente);
    let lista = pacientes.join(", ");
    console.log(lista);
}
function atenderPaciente(pacientes) {
    pacientes.shift();
    let lista = pacientes.join(", ");
    console.log(lista);
}
function cancelarAtendimento(pacientes, paciente) {
    pacientes.splice(pacientes.indexOf(paciente), 1);
    let lista = pacientes.join(", ");
    console.log(lista);
}

agendarPaciente(pacientes, "Fábio");
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, "João");