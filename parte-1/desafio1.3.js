// Primeiro passo: Desativar o modal e dropdown

// Seleciona a div dropdown com os números
const divItensWpp = document.getElementById("header-card-whatsapp");
// Seleciona o modal "NEGOCIE PELO WHATSAPP"
const modalWpp = document.getElementById("new-vehicles-showcase_modal-whatsapp-box");

// Remove classe micromodal-slide para o modal não abrir mais
modalWpp.classList.remove("micromodal-slide");

// Remove a div do menu dropdown
divItensWpp.remove();


// Segundo passo: Setar evento click para abrir o Whatsapp em outra página

// Selecionando os dois botões que vão receber o evento
const btn1 = document.querySelector(".btn.button.button--whatsapp.header__phones-button-toggler")
const btn2 = document.getElementById("new-vehicles-showcase_cta-box-button")

// Função que cria o evento (Optei por usar uma função para reutilizar o código)
function setNewEvent(btn){
  btn.setAttribute(
    "onclick",
    `window.open("https://api.whatsapp.com/send?phone=5511999999999","_blank")`
  );
}

setNewEvent(btn1);
setNewEvent(btn2);