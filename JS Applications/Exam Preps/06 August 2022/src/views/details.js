import { getById, getOfferApplications, hasApplied } from '../data/dashboardData.js';
import { html, render } from '../lib.js';
import { hasOwner, hasUser } from '../util.js';

const detailsTemplate = (offer, applies) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${offer.imageUrl} alt="example1" />
            <p id="details-title">${offer.title}</p>
            <p id="details-category">
              Category: <span id="categories">${offer.category}</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">${offer.salary}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span
                >
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span
                >
              </div>
            </div>
            <p>Applications: <strong id="applications">${applies}</strong></p>
           ${hasUser() ? buttonsTamplete(offer) : null}
        </section>
`;

const buttonsTamplete = (offer) => html`
            ${hasOwner(offer._ownerId) ? html`
             <div id="action-buttons">
              <a href="/offer/edit/${offer._id}" id="edit-btn">Edit</a>
              <a href="/offer/delete/${offer._id}" id="delete-btn">Delete</a>
            </div>
            ` : html`
                <div id="action-buttons">
                    <a href="/offer/apply/${offer._id}" id="apply-btn">Apply</a>
                </div>`}
`

export async function showDetailsView(ctx){
    let id = ctx.params.id;
    const offer = await getById(id);
    const applications = await getOfferApplications(id);
    hasApplied(id);
    render(detailsTemplate(offer, applications));
}