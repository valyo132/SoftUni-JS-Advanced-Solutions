import { getById } from '../data/dataService.js';
import {html, render} from '../lib.js';
import { hasOwner, hasUser } from '../util.js';

const detailsTemplate = (item) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <p id="details-title">${item.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="price">Price: €${item.price}</p>
                <p class="weight">Weight: ${item.weight} kg</p>
                <p class="top-speed">Top Speed: ${item.speed} kph</p>
                <p id="car-description">${item.about}</p>
              </div>
             ${hasUser() ? buttonsTemplate(item) : null}
            </div>
          </div>
        </section>
`;

const buttonsTemplate = (item) => html`
    ${hasOwner(item._ownerId) ? html`
              <div id="action-buttons">
                <a href="/dashboard/edit/${item._id}" id="edit-btn">Edit</a>
                <a href="/dashboard/delete/${item._id}" id="delete-btn">Delete</a>
              </div>` : null}
`;

export async function showDetailsView(ctx){
    let id = ctx.params.id;
    const car = await getById(id);
    render(detailsTemplate(car));
}