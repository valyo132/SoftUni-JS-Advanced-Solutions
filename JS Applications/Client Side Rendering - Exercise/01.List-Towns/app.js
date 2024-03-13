import {html, render} from './node_modules/lit-html/lit-html.js';

const div = document.getElementById('root');
div.innerHTML = '<ul></ul>';
const root = document.querySelector('#root ul');
const townTemplate = (town) => html`<li>${town}</li>`

document.getElementById('btnLoadTowns').addEventListener('click', (event) => {
    event.preventDefault();

    const lines = document.getElementById('towns').value.split(', ');
    render(lines.map(el => townTemplate(el)), root);
});