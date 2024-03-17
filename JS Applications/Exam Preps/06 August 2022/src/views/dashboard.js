import { getItems } from '../data/dashboardData.js';
import { html, render } from '../lib.js';
import { updateNav } from '../nav.js';

const dashboardTemplate = (data) => html`
        <section id="dashboard">
            <h2>Job Offers</h2>
            ${data.length > 0 ? data.map(el => singeOfferTamplete(el)) : html`<h2>No offers yet.</h2>`}
        </section>
`;

const singeOfferTamplete = (offer) => html`
        <div class="offer">
            <img src=${offer.imageUrl} alt="example1" />
            <p>
              <strong>Title: </strong><span class="title">${offer.title}</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">${Number(offer.salary)}</span></p>
            <a class="details-btn" href="/dashboard/details/${offer._id}">Details</a>
          </div>
`;

export async function showDashboardView(){
    const data = await getItems();
    render(dashboardTemplate(data));
    updateNav();
}