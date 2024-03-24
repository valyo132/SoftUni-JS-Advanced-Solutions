import { get, post, put, del } from "../api.js";
import { page } from "../lib.js";
import { getUserData } from "../util.js";

const url = 'http://localhost:3030/data/events?sortBy=_createdOn%20desc';
const createUrl = 'http://localhost:3030/data/events/';
const goingUrl = 'http://localhost:3030/data/going';

export async function geItems(){
    return await get(url);
}

export async function onCreate({name, imageUrl, category, description, date}){
    if (name.length > 0 && imageUrl.length > 0 && category.length > 0 && description.length > 0 && date.length > 0){
        const data = await post(createUrl, {name, imageUrl, category, description, date});
        page.redirect('/dashboard');
    }
}

export async function onEdit({name, imageUrl, category, description, date}, event){
    if (name.length > 0 && imageUrl.length > 0 && category.length > 0 && description.length > 0 && date.length > 0){
        let id = event.target.dataset.id;
        const data = await put(createUrl + id, {name, imageUrl, category, description, date});
        page.redirect(`/event/details/${id}`);
    }
}

export async function onDelete(ctx){
    let id = ctx.params.id;
    const res = await del(createUrl + id);
    page.redirect('/dashboard');
}

export async function go(ctx){
    let id = ctx.params.id;
    await post(goingUrl, {eventId: id});
    page.redirect(`/event/details/${id}`);
}

export async function getGoings(id){
    return await get(`http://localhost:3030/data/going?where=eventId%3D%22${id}%22&distinct=_ownerId&count`);
}

export async function hasGone(eventId){
    let id = getUserData().id;
    return await get(`http://localhost:3030/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${id}%22&count`);
}

export async function getById(id){
    return await get(createUrl + id);
}