let totalGeral = 0; // Uma variável para armazenar o valor total

function adicionar() {
  // 1. Recupera os valores dos elementos HTML
  let produtoElemento = document.getElementById("produto");
  let quantidadeElemento = document.getElementById("quantidade");
  
  // 2. Extrai e converte os valores
  let produtoTexto = produtoElemento.value;
  let quantidade = parseInt(quantidadeElemento.value);
  
  // Verifica se a quantidade é um número válido e maior que zero
  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Por favor, insira uma quantidade válida.");
    return;
  }
  
  // 3. Extrai nome e valor unitário do texto (usando a formatação 'Nome - R$Valor')
  let nomeProduto = produtoTexto.split(' - ')[0];
  let valorUnitario = parseFloat(produtoTexto.split('R$')[1]);
  
  // 4. Calcula o subtotal e atualiza o total geral
  let preco = quantidade * valorUnitario;
  totalGeral += preco;
  
  // 5. Adiciona o item à lista de produtos no carrinho
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML += `
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
    </section>
  `;
  
  // 6. Atualiza o valor total na interface
  let campoTotal = document.getElementById('valor-total');
  campoTotal.innerHTML = `<span class="texto-azul">R$${totalGeral.toFixed(2)}</span>`;
  
  // Limpa o campo de quantidade após adicionar o produto
  quantidadeElemento.value = 1;
}

function limpar() {
  // Zera o total geral
  totalGeral = 0;
  
  // Limpa o conteúdo da lista de produtos e do valor total na interface
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').innerHTML = `<span class="texto-azul">R$0,00</span>`;
  
  // Reseta o campo de quantidade para 1 (opcional)
  document.getElementById('quantidade').value = 1;
}