import { getById, onEdit } from '../data/dataService.js';
import {html, page, render} from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTamplate = (item) => html`
        <section id="edit">
          <div class="form form-auto">
            <h2>Edit Your Car</h2>
            <form data-id=${item._id} @submit=${createSubmitHandler(onSubmit)} class="edit-form">
              <input type="text" name="model" id="model" placeholder="Model" value=${item.model} />
              <input
                type="text"
                name="imageUrl"
                id="car-image"
                placeholder="Your Car Image URL"
                value=${item.imageUrl}
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
                value=${item.price}
              />
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight in Kg"
                value=${item.weight}
              />
              <input
                type="text"
                name="speed"
                id="speed"
                placeholder="Top Speed in Kmh"
                value=${item.speed}
              />
              <textarea
                id="about"
                name="about"
                placeholder="More About The Car"
                rows="10"
                cols="50"
                .value=${item.about}
              ></textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;

export async function showEditView(ctx){
    let id = ctx.params.id;
    const car = await getById(id);
    render(editTamplate(car));
}

async function onSubmit({model, imageUrl, price, weight, speed, about}, event){
    if (model.length > 0 && imageUrl.length > 0 && price.length > 0 && weight.length > 0 && speed.length > 0 && about.length > 0){
        let data = {model, imageUrl, price, weight, speed, about};
        let id = event.target.dataset.id;
        await onEdit(id, data);
        page.redirect(`/dashboard/details/${id}`);
    }
}