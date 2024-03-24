import { onCreate } from '../data/dataService.js';
import {html, page, render} from '../lib.js';
import { createSubmitHandler } from '../util.js';

const createTemplate = () => html`
    <section id="create">
          <h2>Add Motorcycle</h2>
          <div class="form">
            <h2>Add Motorcycle</h2>
            <form @submit=${createSubmitHandler(onSubmit)} class="create-form">
              <input
                type="text"
                name="model"
                id="model"
                placeholder="Model"
              />
              <input
                type="text"
                name="imageUrl"
                id="moto-image"
                placeholder="Moto Image"
              />
              <input
              type="number"
              name="year"
              id="year"
              placeholder="Year"
            />
            <input
            type="number"
            name="mileage"
            id="mileage"
            placeholder="mileage"
          />
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="contact"
          />
            <textarea
              id="about"
              name="about"
              placeholder="about"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Motorcycle</button>
            </form>
          </div>
        </section>
`;

export function showCreateView(){
    render(createTemplate());
}

async function onSubmit({model, imageUrl, year, mileage, contact, about}){
  if (model.length > 0 && imageUrl.length > 0 && year.length > 0 && mileage.length > 0 && contact.length > 0 && about.length > 0){
    await onCreate({model, imageUrl, year, mileage, contact, about});
    page.redirect('/dashboard');
  } else{
    alert("Incorect Data!");
  }
}