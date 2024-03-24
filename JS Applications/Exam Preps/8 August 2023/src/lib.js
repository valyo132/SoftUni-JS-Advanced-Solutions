import {html, render as renderBase} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

function render(template){
    renderBase(template, document.querySelector('main'));
}

export {
    html,
    render,
    page,
    renderBase
}