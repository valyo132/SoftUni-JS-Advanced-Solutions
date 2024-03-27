import { getById, onEdit } from '../data/dataService.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (item) => html`
    <section id="edit">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Edit Character</h2>
            <form data-id=${item._id} @submit=${createSubmitHandler(onSubmit)} class="edit-form">
              <input
              type="text"
              name="category"
              id="category"
              placeholder="Character Type"
              value=${item.category}
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
              value=${item.imageUrl}
            />
            <textarea
            id="description"
            name="description"
            placeholder="Description"
            .value=${item.description}
            rows="2"
            cols="10"
          ></textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            .value=${item.moreInfo}
            rows="2"
            cols="10"
          ></textarea>
              <button type="submit">Edit</button>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
`;

export async function showEditView(ctx){
    let id = ctx.params.id;
    const data = await getById(id);
    console.log(data);
    render(editTemplate(data));
}

async function onSubmit({category, ['image-url']: imageUrl, description, ['additional-info']: moreInfo}, event){
    if (category == '' || imageUrl == '' || description == ' ' || moreInfo == ''){
        return alert("Requered fields!");
    }

    let id = event.target.dataset.id;
    await onEdit(id, {category, imageUrl, description, moreInfo});
    page.redirect(`/dashboard/details/${id}`);
}