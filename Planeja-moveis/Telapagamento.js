function pgInicial(){
    window.location.href = "Paginainicial.html"
}
function pgProdutos(){
    window.location.href = "Produtos.html"
}
function Trocarconta(){
    window.location.href = "login.html"
}
function Sairconta(){
    window.location.href = "cadastro.html"
}
function Continuar(){
    window.location.href = "Paginainicial.html"
}

// Seleciona o modal e os elementos necessários

// Função para abrir o modal
function abrirmodal() {
 
  const numCard = document.getElementById("numCar").value.trim();
  const nomeCard = document.getElementById("nomeCard").value.trim();
  const dataCard = document.getElementById("data").value.trim();
  const securityCode = document.getElementById("Securitycode").value.trim();

  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (numCard && nomeCard && dataCard && securityCode && selectedOption) {
    const modal = document.getElementById("modalLogin");
    modal.style.display = "block";
  } else {
    alert("Por favor, preencha todas as informações antes de confirmar a compra.");
  }
}


