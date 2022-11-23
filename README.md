![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# Desafio AutoForce

Repositório com a resolução para os desafios propostos pela AutoForce para processo seletivo Surporte Front-End

- [Desafio AutoForce](#desafio-autoforce)
  - [Parte 1 - Manipulando o DOM](#parte-1)
    - [Exercício 1.1](#exercício-1-1)
    - [Exercício 1.2](#exercício-1-2)
    - [Exercício 1.3](#exercício-1-3)
    - [Exercício 1.4](#exercício-1-4)
  - [Parte 2 - Montando Layout](#parte-2)
    - [Preview do layout criado](#preview)
    - [Deploy](#deploy)


<div id='parte-1'/> 

# Parte 1 - Manipulando o DOM
Manipule o DOM do [site](https://testes.autoforce.com.br/autoforce-ford) usando javascript para obter os resultados enumerados a seguir. 
O resultado de cada questão deve ser o código javascript usado para atingir o objetivo pedido no enunciado.

<div id='exercício-1-1'/> 

### Exercício 1.1
Modifique os itens de menu "Novos" e "Seminovos" e reordene os itens do menu. Crie um novo item dropdown para o menu e o intitule "Veículos".
Os itens "Novos" e "Seminovos" devem ser realocados para esse novo dropdown. O item "Veículos" deve ser o primeiro do menu. Após este primeiro passo, reordene a disposição do menu para a seguinte ordem:

Veículos | Consórcio | Pós-Venda | Ofertas Únicas | Vendas Diretas | Contato

### Resolução
```js
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
 
```

<div id='exercício-1-2'/> 

### Exercício 1.2
Modifique o formulário de "Estou Interessado" disponível no [site](https://testes.autoforce.com.br/autoforce-ford/novos/territory-2022)

Adicione os seguintes campos:

- 1 Select com as opções: SUV,  Senda, Hatch e Pickup;
- 1 Textarea com placeholder "Mensagem".

### Resolução
```js

// Seleciona primeiro fieldset do formulário
const firstFieldset = document.querySelector("fieldset:nth-child(1)");

// Inclui os campos Select e Textarea
firstFieldset.innerHTML += `
  <div class="form-group">
    <select class="form-control">
      <option value="SUV">SUV</option>
      <option value="Sedan">Sedan</option>
      <option value="Hatch">Hatch</option>
      <option value="Pickup">Pickup</option>
    </select>
  </div>
  <div class="form-group">
    <textarea class="form-control" placeholder="Mensagem"></textarea>
  </div>
`;
 
```

<div id='exercício-1-3'/> 

### Exercício 1.3
Remova o formulário de conversão após clique no whatsapp

Ao clicar em qualquer link do dropdown de 
Whatsapp, um formulário modal é aberto.

Remova a aparição deste formulário de forma que o usuário seja direcionado para janela do Whatsapp em uma nova aba.

### Resolução
```js
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
 
```

<div id='exercício-1-4'/> 

### Exercício 1.4
Crie um botão flutuante de WhatsApp

Crie um popup de WhatsApp fixado no canto inferior esquerdo da tela, ao clicar nesse botão três números devem aparecer:
(Seminovos: +55 (11) 99999-9999, Serviços +55 (11) 11111-11111 e Central de Vendas: +55 (11) 88888-8888), um novo clique em qualquer um desses números deve encaminhar o usuário diretamente para o WhatsApp.


### Resolução
```js
// Selecionando botão que vai abrir o popup
const btn = document.getElementById("popup-whats");

// Removendo comportamento atual
btn.removeAttribute('onclick');

// Incluindo html com conteúdo do popup
btn.innerHTML = `
  <div id="dropdown-content" style="
    display: none;
    position: absolute;
    border-radius: .25rem;
    bottom: 90px;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;">
    <ul class="list list--header-phones list--border-bottom">
      <li class="header__card-whatsapp-item">
        <a class="header-mobile__whatsapp-link" href="https://api.whatsapp.com/send?phone=551199999999" target="_blank" 
          style="color: #000;
          text-decoration: none;
        "><strong>Seminovos:</strong> <span class="header-mobile__whatsapp-number text-mask-phone">+55 (11) 99999-9999</span></a>
        <i class="icon icon-whatsapp"></i>
      </li>
      <li class="header__card-whatsapp-item">
        <a class="header-mobile__whatsapp-link" href="https://api.whatsapp.com/send?phone=55111111111111" target="_blank" 
          style="color: #000;
          text-decoration: none;
        "><strong>Serviços:</strong> <span class="header-mobile__whatsapp-number text-mask-phone">+55 (11) 11111-11111</span></a>
        <i class="icon icon-whatsapp"></i>
      </li>
      <li class="header__card-whatsapp-item">
        <a class="header-mobile__whatsapp-link" href="https://api.whatsapp.com/send?phone=5511888888888" target="_blank" 
          style="color: #000;
          text-decoration: none;
        "><strong>Central de Vendas:</strong> <span class="header-mobile__whatsapp-number text-mask-phone">+55 (11) 88888-8888</span></a>
        <i class="icon icon-whatsapp"></i>
      </li>
    </ul>
  </div> 
  `

// Setando evento de abrir e fechar popup (dropdown)
btn.addEventListener("click" , () => {
  const dropdown = document.getElementById("dropdown-content");
  if(dropdown.style.display == "none"){
      dropdown.style.display = "block"
    } else {
      dropdown.style.display = "none"
    }
})
 
```

<div id='parte-2'/> 

# Parte 2 - Montando Layout

Codifique a seguinte interface: [Interface](https://www.figma.com/file/mEuuuja11kYw9M9swY69wl/Desafio-Genius?node-id=34%3A42)
- Não há necessidade de criar um dropdown nos botões do header. Crie um hyperlink para o telefone e um para o WhatsApp
- Link do vídeo para a área ["Conheça o BMW"](https://www.youtube.com/watch?v=cFyrTEYyq64)

<div id='preview'/> 

## Preview do layout criado
![image](https://media0.giphy.com/media/JdztjQwl66yz3Yj639/giphy.gif)

<div id='deploy'/> 

## Deploy
[Link para demonstração](https://paulohmoreira.github.io/desafio-suporte-frontend/)
