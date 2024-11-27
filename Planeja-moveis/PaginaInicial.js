function Sairconta(){
window.location.href = 'cadastro.html'
}
function Trocarconta(){
    window.location.href = 'login.html'
}
function Produtos(){
    window.location.href = 'Produtos.html'
}

// Obter elementos do DOM
const modalLogin = document.getElementById("modalLogin");
const btnAddProdutos = document.querySelector(".addProdutos");
const spanFechar = document.querySelector(".fechar");
const formLogin = document.getElementById("formLogin");

// Função para abrir o modal de login
function addProdutos() {
  modalLogin.style.display = "block";
}

// Função para fechar o modal de login
function fecharModal() {
  modalLogin.style.display = "none";
}

// Quando o usuário clicar no botão "Adicionar produtos", abre o modal de login
btnAddProdutos.addEventListener("click", addProdutos);

// Quando o usuário clicar no <span> (x), fecha o modal de login
spanFechar.addEventListener("click", fecharModal);

// Quando o usuário clicar fora do conteúdo do modal, fecha o modal de login
window.addEventListener("click", function(event) {
  if (event.target == modalLogin) {
    fecharModal();
  }
});
// Definindo o usuário e senha corretos
const correctUsername = "admin";
const correctPassword = "123";

// Manipulando o formulário de login
document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtendo valores do formulário
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificando se o usuário e senha são corretos
    if (username === correctUsername && password === correctPassword) {
        alert("Seja bem-vindo administrador!");
       
        window.location.href = "novoproduto.html";
    } else {
        alert("Prencha os campos de forma correta!");
    }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
};