import { getById, onEdit } from '../data/dataService.js';
import {html, render} from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTamplte = (item) => html`
    <section id="edit">
            <h2>Edit Motorcycle</h2>
            <div class="form">
              <h2>Edit Motorcycle</h2>
              <form data-id=${item._id} @submit=${createSubmitHandler(onEdit)} class="edit-form">
                <input
                  type="text"
                  name="model"
                  id="model"
                  placeholder="Model"
                  value=${item.model}
                />
                <input
                  type="text"
                  name="imageUrl"
                  id="moto-image"
                  placeholder="Moto Image"
                  value=${item.imageUrl}
                />
                <input
                type="number"
                name="year"
                id="year"
                placeholder="Year"
                value=${item.year}
              />
              <input
              type="number"
              name="mileage"
              id="mileage"
              placeholder="mileage"
              value=${item.mileage}
            />
            <input
              type="number"
              name="contact"
              id="contact"
              placeholder="contact"
              value=${item.contact}
            />
              <textarea
                id="about"
                name="about"
                placeholder="about"
                rows="10"
                cols="50"
                .value=${item.about}
              ></textarea>
                <button type="submit">Edit Motorcycle</button>
              </form>
          </div>
        </section>
`;

export async function showEditView(ctx){
    let id = ctx.params.id;
    const moto = await getById(id);
    render(editTamplte(moto));
}