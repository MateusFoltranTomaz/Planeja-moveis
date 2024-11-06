function cadastrarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('valor').value;
    const descricao = document.getElementById('descricao').value;
    const urlImage = document.getElementById('imageurl').value;

    const produto = { nome, preco, descricao, urlImage };

    if (nome && preco && descricao && urlImage) {
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        produtos.push(produto);
        localStorage.setItem('produtos', JSON.stringify(produtos));

        limparFormulario();
        exibirProdutos();
    } else {
        alert('Preencha todos os campos para cadastrar o produto!');
    }
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('imageurl').value = '';
}

function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    produtos.forEach((produto, index) => {
        const produtoItem = document.createElement('div');
        produtoItem.classList.add('produto-linha');

        const img = document.createElement('img');
        img.src = produto.urlImage;

        const descricao = document.createElement('p');
        descricao.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao}`;
        
        const botaoDeletar = document.createElement('button');
        botaoDeletar.textContent = 'Excluir';
        botaoDeletar.onclick = () => deletarProduto(index);

        produtoItem.appendChild(img);
        produtoItem.appendChild(descricao);
        produtoItem.appendChild(botaoDeletar);

        listaProdutos.appendChild(produtoItem);
    });
}

function deletarProduto(index) {
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    produtos.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    exibirProdutos();
}

function limparProdutos() {
    localStorage.removeItem('produtos');
    exibirProdutos();
}

window.onload = exibirProdutos;
