import { getById, getGoings, hasGone } from '../data/eventsData.js';
import { html, render } from '../lib.js';
import { hasOwner, hasUser } from '../util.js';

const detailsTamplate = (ev, goings, hasApplied) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${ev.imageUrl} alt="example1" />
            <p id="details-title">${ev.name}</p>
            <p id="details-category">
              Category: <span id="categories">${ev.category}</span>
            </p>
            <p id="details-date">
              Date:<span id="date">${ev.date}</span></p>
            <div id="info-wrapper">
              <div id="details-description">
                <span>${ev.description}</span>
              </div>

            </div>

            <h3>Going: <span id="go">${goings}</span> times.</h3>
            ${hasUser() ? buttonsTamplate(ev, hasApplied) : null}
          </div>
        </section>
`;

const buttonsTamplate = (ev, hasApplied) => html`
    ${hasOwner(ev._ownerId) ? html`
        <div id="action-buttons">
              <a href="/event/edit/${ev._id}" id="edit-btn">Edit</a>
              <a href="/event/delete/${ev._id}" id="delete-btn">Delete</a>
            </div>
    ` : html`${!hasApplied ? html`<div id="action-buttons"><a href="/event/go/${ev._id}" id="go-btn">Going</a></div>` : null}`}
`;

export async function showDetailsView(ctx){
    let id = ctx.params.id
    const event = await getById(id);
    let goings = await getGoings(id);
    let hasApplied = null;
    if (hasUser()){
      hasApplied = await hasGone(id);
    }
    render(detailsTamplate(event, goings, hasApplied));
}