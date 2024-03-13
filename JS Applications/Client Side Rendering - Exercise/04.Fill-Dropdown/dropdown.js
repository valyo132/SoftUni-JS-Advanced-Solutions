import { html, render } from './node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

const optionTemplate = (text, id) => html`<option value=${id}>${text}</option>`;

const select = document.getElementById('menu');
document.querySelector('form').addEventListener('submit', addItem);

await loadOptions();

async function addItem(e) {
    e.preventDefault();
    let textInput = e.target.querySelector('input');
    await postItem(textInput.value);
    textInput.value = '';
    await loadOptions();
}

async function loadOptions(){
    const data = await getItems();
    render(Object.values(data).map(el => optionTemplate(el.text, el._id)), select);
}

async function getItems(){
    const res = await fetch(url, {
        method: 'get',
        headers: {'Content-Type': 'application/json'}
    });

    return res.json();
}

async function postItem(text){
    await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/jspn'
        },
        body: JSON.stringify({text})
    });
}