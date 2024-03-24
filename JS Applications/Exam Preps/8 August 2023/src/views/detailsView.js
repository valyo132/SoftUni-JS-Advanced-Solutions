import { getById } from '../data/dataService.js';
import {html, render} from '../lib.js';
import { hasOwner, hasUser } from '../util.js';

const detailsTamplte = (item) => html`    
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <p id="details-title">${item.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="year">Year: ${item.year}</p>
                <p class="mileage">Mileage: ${item.mileage} km.</p>
                <p class="contact">Contact Number: ${item.contact}</p>
                   <p id = "motorcycle-description">${item.about}</p>
              </div>
               ${hasUser() ? buttonsTamplete(item) : null}
            </div>
        </div>
      </section>
`;

const buttonsTamplete = (item) => html`
    ${hasOwner(item._ownerId) ? html` <div id="action-buttons">
            <a href="/dashboard/edit/${item._id}" id="edit-btn">Edit</a>
            <a href="/dashboard/delete/${item._id}" id="delete-btn">Delete</a>
          </div>` : null}
`;

export async function showDetailsView(ctx){
    let id = ctx.params.id;
    const moto = await getById(id);
    render(detailsTamplte(moto));
}