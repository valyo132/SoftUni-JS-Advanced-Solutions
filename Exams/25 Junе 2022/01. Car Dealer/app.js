window.addEventListener("load", solve);

function solve() {
  const [
    makeInput,
    modelkInput,
    yearInput,
    originalCostInput,
    sellingPriceInput,
  ] = document.querySelectorAll("input");
  const fuelInput = document.getElementById("fuel");

  const tbody = document.getElementById("table-body");
  const carList = document.getElementById('cars-list');
  const profit = document.getElementById('profit');

  const publishBtn = document.getElementById("publish");

  publishBtn.addEventListener("click", function (event) {
    event?.preventDefault();

    const isValid =
      makeInput.value.length > 0 &&
      modelkInput.value.length > 0 &&
      yearInput.value > 0 &&
      originalCostInput.value > 0 &&
      sellingPriceInput.value > 0 &&
      fuelInput.value.length > 0;

    if (isValid && Number(originalCostInput.value) < Number(sellingPriceInput.value)) {
      const tr = createCustomElement("tr", "none", "row");

      tr.appendChild(createCustomElement("td", makeInput.value), "none");
      tr.appendChild(createCustomElement("td", modelkInput.value), "none");
      tr.appendChild(createCustomElement("td", yearInput.value), "none");
      tr.appendChild(createCustomElement("td", fuelInput.value), "none");
      tr.appendChild(
        createCustomElement("td", originalCostInput.value),
        "none"
      );
      tr.appendChild(
        createCustomElement("td", sellingPriceInput.value),
        "none"
      );

      const buttonsSection = createCustomElement("td", "none", "none");
      const editBtn = createCustomElement("button", "Edit", "action-btn");
      editBtn.classList.add("edit");
      editBtn.addEventListener("click", loadEdit);
      const sellBtn = createCustomElement("button", "Sell", "action-btn");
      sellBtn.classList.add("sell");
      sellBtn.addEventListener('click', sellCar);

      buttonsSection.appendChild(editBtn);
      buttonsSection.appendChild(sellBtn);

      tr.appendChild(buttonsSection);
      tbody.appendChild(tr);

      makeInput.value = "";
      modelkInput.value = "";
      yearInput.value = "";
      originalCostInput.value = "";
      sellingPriceInput.value = "";
      fuelInput.value = "";
    }
  });

  function loadEdit(event) {
    const div = event.currentTarget.parentNode.parentNode;
    div.remove();

    makeInput.value = div.querySelectorAll('td')[0].textContent;
    modelkInput.value = div.querySelectorAll('td')[1].textContent;
    yearInput.value = div.querySelectorAll('td')[2].textContent;
    fuelInput.value = div.querySelectorAll('td')[3].textContent;
    originalCostInput.value = div.querySelectorAll('td')[4].textContent;
    sellingPriceInput.value = div.querySelectorAll('td')[5].textContent;
  }

  function sellCar(event){
    const div = event.currentTarget.parentNode.parentNode;
    div.remove();

    let makeModel = div.querySelectorAll('td')[0].textContent + ' ' + div.querySelectorAll('td')[1].textContent;
    let yearToDisplay = div.querySelectorAll('td')[2].textContent;
    let priceDiff = Math.abs(div.querySelectorAll('td')[4].textContent - div.querySelectorAll('td')[5].textContent);

    const li = createCustomElement('li', 'none', 'each-list');

    li.appendChild(createCustomElement('span', makeModel, 'none'));
    li.appendChild(createCustomElement('span', yearToDisplay, 'none'));
    li.appendChild(createCustomElement('span', priceDiff, 'none'));

    carList.appendChild(li);

    profit.textContent = Number(Number(profit.textContent) + Number(priceDiff)).toFixed(2);
  }

  function createCustomElement(type, content, classOf) {
    let item = document.createElement(type);

    if (content != "none") {
      item.textContent = content;
    }

    if (classOf != "none") {
      item.classList.add(classOf);
    }

    return item;
  }
}
