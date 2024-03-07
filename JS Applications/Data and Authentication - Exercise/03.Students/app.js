const url = 'http://localhost:3030/jsonstore/collections/students';

async function attachEvents() {
    await load();

    const submitBtn = document.getElementById('submit').addEventListener('click', postStudent);    
}

async function load(){
    const tbody = document.querySelector('tbody');

    const res = await fetch(url);
    const data = await res.json();

    for (const [_id, obj] of Object.entries(data)) {
        const tr = createCustomElement('tr', '', '');
        tr.appendChild(createCustomElement('td', obj.firstName, ''));
        tr.appendChild(createCustomElement('td', obj.lastName, ''));
        tr.appendChild(createCustomElement('td', obj.facultyNumber, ''));
        tr.appendChild(createCustomElement('td', Number(obj.grade).toFixed(2), ''));

        tbody.appendChild(tr);
    }
}

async function postStudent(event){
    event?.preventDefault();

    const [firstNameInput, lastNameInput, facNumInput, gradeInput] = document.querySelectorAll('input');
    let firstName = firstNameInput.value.trim();
    let lastName = lastNameInput.value.trim();
    let facultyNumber = facNumInput.value.trim();
    let grade = gradeInput.value.trim();

    try {
        await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({firstName, lastName, facultyNumber, grade})
        });
    } catch (error) {
        alert(error.message);
    }
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