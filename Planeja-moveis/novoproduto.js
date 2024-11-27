let produtoEditandoIndex = null;  // Variável global para armazenar o índice do produto sendo editado.
function cadastrarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('valor').value; // Alinhado ao ID no HTML
    const descricao = document.getElementById('descricao').value;
    const urlImage = document.getElementById('imageurl').value;
    
    const produto = {
        nome,
        preco,
        descricao,
        urlImage
    };

    if (produto.nome && produto.preco && produto.descricao && produto.urlImage) {
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

        if (produtoEditandoIndex !== null) {
            // Atualiza o produto existente
            produtos[produtoEditandoIndex] = produto;
            produtoEditandoIndex = null; // Limpa o índice de edição
        } else {
            // Adiciona um novo produto
            produtos.push(produto);
        }

        localStorage.setItem('produtos', JSON.stringify(produtos));
        limparFormulario();
        exibirProdutos();
    } else {
        alert('Preencha todos os campos para cadastrar o produto!');
    }
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('valor').value = ''; // Alinhado ao ID no HTML
    document.getElementById('descricao').value = '';
    document.getElementById('imageurl').value = '';

}

function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';


    for (let i in produtos) {
        const produto = produtos[i];
        const item = document.createElement('div');
        item.classList.add('produto-item');

        const img = document.createElement('img');
        img.src = produto.urlImage;
        img.alt = produto.nome;
        img.style.width = '100px';
        img.style.height = 'auto';
        img.style.marginRight = '10px';

        const info = document.createElement('p');
        info.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao} `;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Deletar';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deletarProduto(i);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.classList.add('edit-btn');
        editBtn.onclick = () => editarProduto(i);

        item.appendChild(img);
        item.appendChild(info);
        item.appendChild(deleteBtn)
        item.appendChild(editBtn)
        listaProdutos.appendChild(item);
    }
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

function editarProduto(index){
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    const produto = produtos[index];

    // Preenche o formulário com os dados do produto
    document.getElementById('nome').value = produto.nome;
    document.getElementById('descricao').value = produto.descricao;
    document.getElementById('valor').value = produto.preco;
    document.getElementById('imageurl').value = produto.urlImage;

    produtoEditandoIndex = index; 
}
function verprodutos(){
    window.location.href = "Produtos.html"
}

window.onload = exibirProdutos;