import { get, put, del, post } from "../api.js";
import { page } from "../lib.js";

const dashboardURL = 'http://localhost:3030/data/cars?sortBy=_createdOn%20desc';
const baseURL = 'http://localhost:3030/data/cars/';
const test = 'http://localhost:3030/data/cars';

export async function getItems(){
    return get(dashboardURL);
}

export async function getById(id){
    return await get(baseURL + id);
}

export async function onCreate(data){
    await post(test, data);
}

export async function onEdit(id, data){
    await put(baseURL + id, data);
}

export async function onDelete(ctx){
    if (confirm("delete car?")){
        let id = ctx.params.id;
        const res = await del(baseURL + id);
        page.redirect('/dashboard');
    }
}

export async function getSearched(search){
    if (search.length > 0){
        return await get(`http://localhost:3030/data/cars?where=model%20LIKE%20%22${search}%22`);
    }
}