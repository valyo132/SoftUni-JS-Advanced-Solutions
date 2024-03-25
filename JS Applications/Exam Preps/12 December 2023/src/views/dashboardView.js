import { getItems } from '../data/dataService.js';
import {html, render} from '../lib.js';

const dashboardTamplate = (items) => html`
    <h3 class="heading">Our Cars</h3>
        <section id="dashboard">
            ${items.length > 0 ? items.map(el => singleCarTamplate(el)) : html`<h3 class="nothing">Nothing to see yet</h3>`}
        </section>
        
`;

const singleCarTamplate = (item) => html`
    <div class="car">
            <img src=${item.imageUrl} alt="example1" />
            <h3 class="model">${item.model}</h3>
            <div class="specs">
              <p class="price">Price: €${item.price}</p>
              <p class="weight">Weight: ${item.weight} kg</p>
              <p class="top-speed">Top Speed: ${item.speed} kph</p>
            </div>
            <a class="details-btn" href="/dashboard/details/${item._id}">More Info</a>
          </div>
`;

export async function showDashboardView(){
    const data = await getItems();
    render(dashboardTamplate(data));
}