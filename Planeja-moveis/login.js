function Logar() {
  const email = document.getElementById('email').value; 
  const senha = document.getElementById('senha').value; 

  // Verificar se os campos foram preenchidos
  if (!email || !senha) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Recuperar o banco de dados do localStorage
  const login = JSON.parse(localStorage.getItem('BancoDeDados')) || {};

  // Verificar se o e-mail existe no banco de dados
  if (login[email] && login[email].senha === senha) {
    alert('Login bem-sucedido!');
    window.location.href = 'Paginainicial.html';
  } else {
    alert('Usuário ou senha inválidos.');
  }
}

function VoltarCadastro(){
    window.location.href = "cadastro.html"; 
}

function displayModal(){
    
    var modal = document.getElementById("myModal");
    
    var btn = document.getElementById("modal-button");
    
    var span = document.getElementsByClassName("closeBtn")[0];
    
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    }