const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]
const pet = "Max";

function donoPet(usuarios) {
    let naoAchou = true;
    for (const usuario of usuarios) {
        for (const item of usuario.pets) {
            if (item === pet) {
                console.log(`O dono(a) do(a) ${pet} é o(a) ${usuario.nome}`);
                naoAchou = false;
                break;
            }
        }

    }
    if (naoAchou) {
        console.log(`Que pena ${pet}, não encontramos seu dono(a)`);
    }
}

donoPet(usuarios);