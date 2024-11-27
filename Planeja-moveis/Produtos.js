function exibirProdutosNaOutraPagina() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    produtos.forEach(produto => {
        // Criando o card do produto
        const card = document.createElement('div');
        card.classList.add('produto-card');

        // Criando a imagem do produto
        const img = document.createElement('img');
        img.src = produto.urlImage;
        img.alt = produto.nome;
        img.classList.add('produto-imagem');

        // Criando o nome do produto
        const nome = document.createElement('h3');
        nome.textContent = produto.nome;
        nome.classList.add('produto-nome');

        // Criando o preço do produto
        const preco = document.createElement('p');
        preco.innerHTML = `<span>Preço:</span> R$ ${produto.preco}`;
        preco.classList.add('produto-preco');

        // Criando a descrição do produto
        const descricao = document.createElement('p');
        descricao.innerHTML = `<span>Descrição:</span> ${produto.descricao}`;
        descricao.classList.add('produto-descricao');



        // Montando o card
        card.appendChild(img);
        card.appendChild(nome);
        card.appendChild(preco);
        card.appendChild(descricao);
        

        // Adicionando o card à lista
        listaProdutos.appendChild(card);
    });
}

// Exibe os produtos ao carregar a página secundária
document.addEventListener('DOMContentLoaded', exibirProdutosNaOutraPagina);

function paginaInicial(){
    window.location.href = "paginainicial.html"
}
function TelaCompra(){
    window.location.href = "Telapagamento.html"
}
function logintela(){
    window.location.href = "login.html"
}
function cadastrotela(){
    window.location.href = "cadastro.html"
}