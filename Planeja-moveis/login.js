function Logar() {
    // Obtém os elementos dos campos do formulário de login usando os IDs atualizados
    let campoUsuarioLogin = document.getElementById("email"); // Campo para nome de usuário
    let campoSenhaLogin = document.getElementById("senha"); // Campo para senha

    // Obtém os valores digitados pelo usuário
    let usuarioLogin = campoUsuarioLogin.value;
    let senhaLogin = campoSenhaLogin.value;

    // Obtém os dados armazenados no Local Storage ou usa um objeto vazio se não houver dados
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || {};

    // Verifica se o nome de usuário e a senha correspondem a algum registro no banco de dados
    if (bancoDeDados[usuarioLogin] && bancoDeDados[usuarioLogin].password === senhaLogin) {
        alert("Login bem-sucedido!"); // Exibe mensagem se o login for bem-sucedido
        window.location.href = "PaginaInicial.html"; 
    } else {
        alert("Nome de usuário ou senha incorretos."); // Exibe mensagem se o login falhar
    }
}
function VoltarCadastro(){
    window.location.href = "cadastro.html"; 
}