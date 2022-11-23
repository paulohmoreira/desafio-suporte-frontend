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