// Selecionando menu
const menu = document.querySelector(".nav.nav--accordion-mobile");

// Selecionando itens de menu "Novos" e "Seminovos"
const novos = document.querySelector(".nav.nav--accordion-mobile li:nth-child(2)");
const semiNovos = document.querySelector(".nav.nav--accordion-mobile li:nth-child(3)");

//Removendo os itens
menu.removeChild(novos);
menu.removeChild(semiNovos);

// Criando novo elemento de menu
const veiculos = document.createElement("li");
veiculos.classList.add("nav-item", "nav-simple__item");
veiculos.style = "order: -3;";

// Adicionando novo item ao menu
veiculos.innerHTML = `
  <a href="/autoforce-ford#" class="nav-link nav-simple__link" data-toggle="dropdown"> Veículos 
    <i class="icon icon-dropdown icon-arrow-d"></i>
  </a>
  <div class="nav-simple-sub card-collapse-deep dropdown-menu" id="dropdown-menu">
    <ul class="list list--border-bottom">
      <li class=""><a href="/autoforce-ford/novos" class="card-collapse-deep__title"> Novos </a></li>
      <li class=""><a href="/autoforce-ford/seminovos" class="card-collapse-deep__title"> Seminovos </a></li>
    </ul>
  </div>
`;
menu.appendChild(veiculos);


// Ordenando os itens
const listItens = document.querySelectorAll(".nav-item.nav-simple__item");
listItens.forEach(element => {
  if (element.innerText == "") {
    element.style = "order: -4";
  }
  if (element.innerText == "Consórcios") {
    element.style = "order: -2";
  }
  if (element.innerText == "Pós-venda") {
    element.style = "order: -1";
  }
});

// Adicionando evento dropdown no item Veículos
const dropdown = document.getElementById("dropdown-menu")
veiculos.addEventListener("click", () => {
  veiculos.classList.toggle("show");
  dropdown.classList.toggle("show");
})