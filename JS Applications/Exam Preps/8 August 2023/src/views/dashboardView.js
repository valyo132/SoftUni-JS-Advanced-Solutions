import { getItems } from '../data/dataService.js';
import {html, render} from '../lib.js';

// MIGTH BE AN ERROR
const motosTamplate = (data) => html`
    <h2>Available Motorcycles</h2>
        <section id="dashboard">
            ${data.length > 0 ? data.map(el => singleMotoTamplate(el)) : html` <h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
        </section>
`;

const singleMotoTamplate = (item) => html`
    <div class="motorcycle">
            <img src=${item.imageUrl} alt="example1" />
            <h3 class="model">${item.model}</h3>
            <p class="year">Year: ${item.year}</p>
            <p class="mileage">Mileage: ${item.mileage} km.</p>
            <p class="contact">Contact Number: ${item.contact}</p>
            <a class="details-btn" href="/dashboard/details/${item._id}">More Info</a>
          </div>
`;

export async function showDashboardView(){
    const data = await getItems();
    render(motosTamplate(data));
}