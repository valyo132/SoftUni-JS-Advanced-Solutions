import { getItems } from '../data/dataService.js';
import { html, render } from '../lib.js';

const dashboardTemplate = (data) => html`
    <h2>Characters</h2>
        <section id="characters">
            ${data.length > 0 ? data.map(el => singleTemplate(el)) : html`<h2>No added Heroes yet.</h2>`}
        </section>
         
`;

const singleTemplate = (item) => html`
    <div class="character">
            <img src=${item.imageUrl} alt="example1" />
            <div class="hero-info">
              <h3 class="category">${item.category}</h3>
              <p class="description">${item.description}</p>
              <a class="details-btn" href="/dashboard/details/${item._id}">More Info</a>
            </div>
          </div>
`;

export async function showDashboardView(){
    const data = await getItems();
    render(dashboardTemplate(data));
}