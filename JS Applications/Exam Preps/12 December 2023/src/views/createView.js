import { onCreate } from '../data/dataService.js';
import {html, page, render} from '../lib.js';
import { createSubmitHandler } from '../util.js';

const createTamplate = () => html`
    <section id="create">
          <div class="form form-auto">
            <h2>Share Your Car</h2>
            <form @submit=${createSubmitHandler(onSubmit)} class="create-form">
              <input type="text" name="model" id="model" placeholder="Model"/>
              <input
                type="text"
                name="imageUrl"
                id="car-image"
                placeholder="Your Car Image URL"
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
              />
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight in Kg"
              />
              <input
                type="text"
                name="speed"
                id="speed"
                placeholder="Top Speed in Kmh"
              />
              <textarea
                id="about"
                name="about"
                placeholder="More About The Car"
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">Add</button>
            </form>
          </div>
        </section>
`;

export function showCreateView(){
    render(createTamplate());
}

async function onSubmit({model, imageUrl, price, weight, speed, about}){
    if (model.length > 0 && imageUrl.length > 0 && price.length > 0 && weight.length > 0 && speed.length > 0 && about.length > 0){
        let data = {model, imageUrl, price, weight, speed, about};
        await onCreate(data);
        page.redirect('/dashboard');
    } else{
        alert("Incorect data!");
    }
}