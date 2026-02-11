function comprar () {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt (document.getElementById('qtd'). value);
    
    if(tipo.value == 'Pista')    {
        comprarPista(qtd.value);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }




}

function comprarPista (qtd) {
    let qtdPista = parseInt (document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert("Quantidade de ingressos indisponivel para o tipo pista");
} else {
    qtdPista = qtdPista - qtd;
   ocument.getElementById('qtd-pista').textContent = qtdPista;
    alert("Quantidade de ingressos adquiridas!");

}

}

function comprarSuperior (qtd) {
    let qtdSuperior = parseInt (document.getElementById("qtd-superior").textContent); 
} 
if (qtd > qtdSuperior) {
    alert("Quantidade de ingressos indisponível para o tipo superior");
} else {
    qtdSuperior = qtdSuperior - qtd;
    document.getElementById('qtd-superior').textContent = qtdSuperior;
    alert("Quantidade de ingressos adquiridas!");
}

 function comprarInferior (qtd) {
    
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent); 

    
    if (qtd > qtdInferior) {
        alert("Quantidade de ingressos indisponível para o tipo inferior");
    } else {
       
        qtdInferior = qtdInferior - qtd;
        
        
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        
    
        alert("Quantidade de ingressos adquiridas!");
    }   
}   