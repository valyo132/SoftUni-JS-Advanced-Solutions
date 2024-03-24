import { geItems } from '../data/eventsData.js';
import { html, render } from '../lib.js';

const dashboardTamplate = (items) => html`
    <h2>Current Events</h2>
    ${items.length > 0 ? 
        html`<section id="dashboard">
            ${items.map(el => singleEventTemplate(el))}
        </section>` 
        : html`<h4>No Events yet.</h4>`}
`;

const singleEventTemplate = (ev) => html`
        <div class="event">
            <img src=${ev.imageUrl} alt="example1" />
            <p class="title">
              ${ev.name}
            </p>
            <p class="date">${ev.date}</p>
            <a class="details-btn" href="/event/details/${ev._id}">Details</a>
          </div>
`;

export async function showDashboardView() {
    const data = await geItems();
    render(dashboardTamplate(data));
}