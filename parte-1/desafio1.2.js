// Seleciona primeiro fieldset do formulário
const firstFieldset = document.querySelector("fieldset:nth-child(1)");

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