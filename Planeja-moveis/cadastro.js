function Cadastrar() {
    // Buscas os inputs do cadastro pelo seu ID e armazena os valores digitados pelo usuário nos inputs
    let usuario = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmaSenha = document.getElementById("senha_confirmar").value;
 // Verifica se a senha e a confirmação de senha são iguais
 if (senha === confirmaSenha) {
    // Obtém os dados armazenados no Local Storage ou cria um objeto vazio se não houver dados
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || {};

    // Verifica se o nome de usuário já está cadastrado
    if (bancoDeDados[usuario]) {
        alert("Nome de usuário já cadastrado."); // Exibe mensagem se o nome de usuário já existir
        return; // Encerra a função para não cadastrar o usuário
    }

    // Adiciona o novo usuário ao banco de dados
    bancoDeDados[usuario] = { usuario: usuario, password: senha };

    // Salva o banco de dados atualizado no Local Storage
    localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
 
    alert("Usuário cadastrado com sucesso!"); // Exibe mensagem de sucesso
    window.location.href = "login.html";
 
    
    
} else {
    alert("As senhas são diferentes!"); // Exibe mensagem se as senhas não coincidirem
}

}