const url = 'http://localhost:3030/jsonstore/phonebook/';

function attachEvents() {
    const btnLoad = document.getElementById('btnLoad').addEventListener('click', loadPhones);
    const createBtn = document.getElementById('btnCreate').addEventListener('click', createPhone);
}

async function createPhone(){
    const [personInput, phoneInput] = document.querySelectorAll('input');
    let person = personInput.value.trim();
    let phone = phoneInput.value.trim();

    try {
        await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({person, phone})
        });
    } catch (err) {
        alert(err.message);
    }
}

async function loadPhones(){
    const ul = document.getElementById('phonebook');
    ul.innerHTML = '';

    const res = await fetch(url);
    const data = await res.json();

    for (const [_id, obj] of Object.entries(data)) {
        const li = createCustomElement('li', `${obj.person}: ${obj.phone}`, '');
        const deleteBtn = createCustomElement('button', 'Delete', '');
        deleteBtn.id = _id;
        deleteBtn.addEventListener('click', deletePhone);

        li.appendChild(deleteBtn);
        ul.appendChild(li);
    }
}

async function deletePhone(event){
    await fetch(url + event.target.id, {
        method: 'delete'
    });
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

attachEvents();