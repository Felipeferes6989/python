alert('Bem-vindo ao jogo da semana!');

let escolha = prompt("Diga o seu dia da semana?");
let diadasemana = new Date().toLocaleString('pt-BR', { weekday: 'long' });

if (diadasemana.toLowerCase() === escolha.toLowerCase()) {
    alert("Boa semana!");
} else {
    alert("Bom fim de semana! Hoje é " + diadasemana);
}
