let amigos = [];


function adicionar() {
    let amigo = document.getElementsByTagName("nome-amigo");
    if (amigo.value === "") {

        alert("informe o nome do prç!");
        return;
    }

    if(amigos.includes (amigos.value)) {
        alert('nome já adicionado')
        return;
    }


    let lista = document.getElementsByTagName("lista-amigos");
    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    


    } else {
        lista.textContent = lista.textContent = ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear() {
     if (amigos.length < 4 ) {
        alert("adicione 4 prçs!");
        return;
     }
embaralha(amigos);
let sorteio = document.getElementById('lista-sorteio')

for (let i = 0; i < amigos.length; i++) {

    if(i == amigos.length - 1)  {

    } else {
         sorteio.innerHTML =sorteio.innerHTML = amigos[i] = '-->' + amigos[i +1] + '<br>'
        } 

}
}

function embaralha(lista) {
    

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
   document.getElementsByTagName("lista-amigos").innerHTML = "";
    document.getElementById('lista-sorteio').innerHTML = "";
}

