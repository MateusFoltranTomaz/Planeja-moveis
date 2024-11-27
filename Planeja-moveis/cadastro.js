function Cadastrar() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('senha_confirmar').value;

    // Verificar se todos os campos foram preenchidos
    if (!email || !senha || !confirmarSenha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verificar se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return;
    }

    // Validar a complexidade da senha
    if (!validarSenha(senha)) {
        alert('A senha deve conter pelo menos uma letra e um número!');
        return;
    }

    // Recuperar o banco de dados do localStorage
    let bancoDeDados = JSON.parse(localStorage.getItem('BancoDeDados')) || {};

    // Verificar se o usuário já está cadastrado
    if (bancoDeDados[email]) {
        alert("E-mail já cadastrado."); // Exibe mensagem se o e-mail já existir
        return; // Encerra a função para não cadastrar o usuário
    }

    // Criar novo usuário no banco de dados
    bancoDeDados[email] = { senha: senha };
    localStorage.setItem('BancoDeDados', JSON.stringify(bancoDeDados));

    // Mensagem de sucesso e redirecionamento
    alert('Usuário cadastrado com sucesso!');
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
    document.getElementById('senha_confirmar').value = '';

    setTimeout(() => {
        window.location.href = 'login.html';
    });
}

// Função para validar a senha
function validarSenha(senha) {
    const regexLetra = /[A-Za-z]/; // Verifica a presença de uma letra
    const regexNumero = /[0-9]/;   // Verifica a presença de um número
    return regexLetra.test(senha) && regexNumero.test(senha);
}
