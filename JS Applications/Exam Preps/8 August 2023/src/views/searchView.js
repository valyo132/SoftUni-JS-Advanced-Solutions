import { getSearched } from '../data/dataService.js';
import {html, render} from '../lib.js';
import { createSubmitHandler } from '../util.js';

const searchTamplte = (res) => html`
<!-- Search page -->
<section id="search">
    <div class="form">
        <h4>Search</h4>
        <form @submit=${createSubmitHandler(onSearch)} class="search-form">
            <input
            type="text"
            name="search"
            id="search-input"
            />
            <button class="button-list">Search</button>
        </form>
        <h4 id="result-heading">Results:</h4>
        ${res != undefined ? resultTemplate(res) : null}
    </div>
</section>
`;

const resultTemplate = (data) => html`
<div class="search-result">
        ${data.length > 0 ? data.map(el => singleSearched(el)) : html`<h2 class="no-avaliable">No result.</h2>`}
    </div>
`

const singleSearched = (moto) => html`
    <div class="motorcycle">
        <img src=${moto.imageUrl} alt="example1" />
        <h3 class="model">${moto.model}</h3>
        <a class="details-btn" href="/dashboard/details/${moto._id}">More Info</a>
    </div>
`;

export function showSearchView(){
    render(searchTamplte());
}

async function onSearch({ search }){
    const data = await getSearched(search);
    render(searchTamplte(data));
}