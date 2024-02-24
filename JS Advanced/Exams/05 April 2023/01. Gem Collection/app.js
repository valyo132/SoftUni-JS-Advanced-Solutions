window.addEventListener("load", solve);

function solve() {
 const [nameInput, colorInput, caratsInput, priceInput] = document.querySelectorAll('input');
 const typeInput = document.getElementById('type');

 const ul = document.getElementById('preview-list');
 const ulCollection = document.getElementById('collection');

 const addBtn = document.getElementById('add-btn');

 addBtn.addEventListener('click', function(){
    const li = createCustomElement('li', '', 'gem-info');

    const article = createCustomElement('article', '', '');
    article.appendChild(createCustomElement('h4', nameInput.value, ''));
    article.appendChild(createCustomElement('p', `Color: ${colorInput.value}`, ''));
    article.appendChild(createCustomElement('p', `Carats: ${caratsInput.value}`, ''));
    article.appendChild(createCustomElement('p', `Price: ${priceInput.value}$`, ''));
    article.appendChild(createCustomElement('p', `Type: ${typeInput.value}`, ''));

    li.appendChild(article);

    const saveBtn = createCustomElement('button', 'Save to Collection', 'save-btn');
    saveBtn.addEventListener('click', saveGem);
    const editBtn = createCustomElement('button', 'Edit to Information', 'edit-btn');
    editBtn.addEventListener('click', loadEdit);
    const cancelBtn = createCustomElement('button', 'Cancel', 'cancel-btn');
    cancelBtn.addEventListener('click', cancelGem);

    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(cancelBtn);

    ul.appendChild(li);
    
    addBtn.disabled = true;

    nameInput.value = '';
    colorInput.value = '';
    caratsInput.value = '';
    priceInput.value = '';
    typeInput.value = '';
 })

 function cancelGem(event){
    const li = event.currentTarget.parentNode;
    li.remove();
    addBtn.disabled = false;
 }

 function saveGem(event){
    const li = event.currentTarget.parentNode;
    li.remove();

    let price = li.querySelectorAll('p')[2].textContent.split('Price: ')[1];
    price = price.substring(0, price.length - 1);
    let name = li.querySelectorAll('h4')[0].textContent;
    let color = li.querySelectorAll('p')[0].textContent.split('Color: ')[1];
    let carats = li.querySelectorAll('p')[1].textContent.split('Carats: ')[1];
    let type = li.querySelectorAll('p')[3].textContent.split('Type: ')[1];

    const newLi = createCustomElement('li', '', '');
    const p = createCustomElement('p', `${name} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`, 'collection-item');
    newLi.appendChild(p);

    ulCollection.appendChild(newLi);
    addBtn.disabled = false;
 }

 function loadEdit(event){
    const li = event.currentTarget.parentNode;
    li.remove();

    let price = li.querySelectorAll('p')[2].textContent.split('Price: ')[1];

    nameInput.value = li.querySelectorAll('h4')[0].textContent;
    colorInput.value = li.querySelectorAll('p')[0].textContent.split('Color: ')[1];
    caratsInput.value = li.querySelectorAll('p')[1].textContent.split('Carats: ')[1];
    priceInput.value = price.substring(0, price.length - 1);
    typeInput.value = li.querySelectorAll('p')[3].textContent.split('Type: ')[1];

    addBtn.disabled = false;
 }

 function createCustomElement(type, content, classOf){
    let item = document.createElement(type);

    if (content != ''){
        item.textContent = content;
    }

    if (classOf != ''){
        item.classList.add(classOf);
    }

    return item;
}
}
