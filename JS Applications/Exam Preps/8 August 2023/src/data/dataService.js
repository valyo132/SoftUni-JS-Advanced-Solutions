import { get, put, del, post } from "../api.js";
import { page } from "../lib.js";

const dashboardURL = 'http://localhost:3030/data/motorcycles?sortBy=_createdOn%20desc';
const baseURL = 'http://localhost:3030/data/motorcycles/';
const test = 'http://localhost:3030/data/motorcycles';

export async function getItems(){
    return get(dashboardURL);
}

export async function getById(id){
    return await get(baseURL + id);
}

export async function onCreate(data){
    await post(test, data);
}

export async function onEdit({model, imageUrl, year, mileage, contact, about}, event){
      if (model.length > 0 && imageUrl.length > 0 && year.length > 0 && mileage.length > 0 && contact.length > 0 && about.length > 0){
        let id = event.target.dataset.id;
        const data = await put(baseURL + id, {model, imageUrl, year, mileage, contact, about});
        page.redirect(`/dashboard/details/${id}`);
      }
  }

export async function onDelete(ctx){
    if (confirm("delete motor?")){
        let id = ctx.params.id;
        const res = await del(baseURL + id);
        page.redirect('/dashboard');
    }
}

export async function getSearched(search){
    if (search.length > 0){
        return await get(`http://localhost:3030/data/motorcycles?where=model%20LIKE%20%22${search}%22`);
    }
}