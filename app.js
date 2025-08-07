// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = [];
const ImputAmigo = document.getElementById("amigo");
const ulResultado = document.getElementById("resultado");
const ulListaAmigos = document.getElementById("listaAmigos");


function agregarAmigo() {
listaAmigos.push (ImputAmigo.value);

ulListaAmigos.innerHTML += `<li>${ImputAmigo.value}</li>`;

};

function sortearAmigo() {
const random =Math.floor((Math.random() * listaAmigos.length));
 const amigoSecreto = listaAmigos[random];

console.log(random);

ulResultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
};
 