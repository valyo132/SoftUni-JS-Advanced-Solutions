import { getById, onEdit } from '../data/eventsData.js';
import { html, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTamplate = (ev) => html`
    <section id="edit">
          <div class="form">
            <h2>Edit Event</h2>
            <form data-id=${ev._id} @submit=${createSubmitHandler(onEdit)} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
                value=${ev.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image"
                value=${ev.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
                value=${ev.category}
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                .value=${ev.description}
                rows="5"
                cols="50"
              ></textarea>
              
              <label for="date-and-time">Event Time:</label>
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
              value=${ev.date}
            />

              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;

export async function showEditView(ctx){
    const event = await getById(ctx.params.id);
    render(editTamplate(event));
}