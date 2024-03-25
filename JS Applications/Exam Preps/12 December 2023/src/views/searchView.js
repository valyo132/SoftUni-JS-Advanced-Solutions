import { getSearched } from '../data/dataService.js';
import {html, render} from '../lib.js';
import { createSubmitHandler } from '../util.js';

const searchTemplate = (res) => html`
    <section id="search">
          <div class="form">
            <h4>Search</h4>
            <form @submit=${createSubmitHandler(onSearch)} class="search-form">
              <input type="text" name="search" id="search-input" />
              <button class="button-list">Search</button>
            </form>
          </div>
            ${res != undefined ? resultTemplate(res) : null}
        </section>
`;

const resultTemplate = (res) => html`
<div class="search-result">
    ${res.length > 0 ? res.map(el => singleCarTemplate(el)) : html`<h2 class="no-avaliable">No result.</h2>`}
</div>
`;

const singleCarTemplate = (item) => html`
        <div class="car">
              <img src=${item.imageUrl} alt="example1"/>
              <h3 class="model">${item.model}</h3>
              <a class="details-btn" href="/dashboard/details/${item._id}">More Info</a>
            </div>
`;

export function showSearchView(){
    render(searchTemplate());
}

async function onSearch({search}){
    if (search.length > 0){
        const data = await getSearched(search);
        render(searchTemplate(data));
    } else{
        alert("Enter value to search");
    }
    
}