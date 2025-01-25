const amigos = [];
// Função de call back Auxiliado por :  Andre Borges! 
document.addEventListener("DOMContentLoaded",() => {        
    let teste = document.querySelector("#amigo")
        teste.addEventListener("keydown",(event)=>{
            if (event.key === "Enter"){
             adicionarAmigo();
        }
    } )
} )

// Funcão adicionar os nomes
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value; 
        if (nome == "") {
            alert("Por favor, insira um nome.");
            return;
        }    
        if (amigos.includes(nome)) {
            alert("Este nome já foi inserido!");
            return;
        }
    amigos.push(nome);
    atualizarLista();
    input.value = ""; 
    input.focus();
}

// Função para atualizar a lista 
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0;  i < amigos.length; i++){
        const item = document.createElement("li");
        item.textContent = amigos [i];
        lista.appendChild(item);
    }
}

// Função para sortear
function sortearAmigo() {    
        if (amigos.length == 0 ) {
            alert('Não Há amigos na lista para sortear');
            return;
        }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);   
    const nomeSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${nomeSorteado}</strong></li>`;
}
