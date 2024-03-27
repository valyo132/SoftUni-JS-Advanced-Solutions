import { getById, getLikes, hasLiked } from '../data/dataService.js';
import { html, render } from '../lib.js';
import { hasOwner, hasUser } from '../util.js';

const detailsTemplate = (item, likes, hasUserLiked) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <div>
            <p id="details-category">${item.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${item.description}</p>
                   <p id ="more-info">${item.moreInfo}</p>
              </div>
            </div>
              <h3>Is This Useful:<span id="likes">${likes}</span></h3>
              ${hasUser() ? buttonsTemplate(item, hasUserLiked) : null}
        </div>
      </section>
`;

const buttonsTemplate = (item, hasUserLiked) => html`
<div id="action-buttons">
    ${hasOwner(item._ownerId) ? html`<a href="/dashboard/edit/${item._id}" id="edit-btn">Edit</a>
        <a href="/dashboard/delete/${item._id}" id="delete-btn">Delete</a>` : likeBtnTemplate(item, hasUserLiked)}
</div>
`;

const likeBtnTemplate = (item, hasUserLiked) => html`
  ${hasUserLiked == 0 ? html`<a href="/like/${item._id}" id="like-btn">Like</a>` : null}
`;

export async function showDetailsView(ctx){
    let id = ctx.params.id;
    const data = await getById(id);
    const likes = await getLikes(id);
    const hasUserLiked = await hasLiked(id);
    console.log(hasUserLiked);
    render(detailsTemplate(data, likes, hasUserLiked));
}