import { del, get, post, put } from "../api.js";
import { page } from "../lib.js";
import { getUserData } from "../util.js";

const url =  'http://localhost:3030/data/offers?sortBy=_createdOn%20desc';
const createUrl =  'http://localhost:3030/data/offers/';
const applyUrl = 'http://localhost:3030/data/applications';

export async function getItems(){
    return await get(url);
}

export async function onCreate({title, imageUrl, category, description, requirements, salary}){
    if (title.length > 0 && imageUrl.length > 0 && category.length > 0 && description.length > 0 && requirements.length > 0 && salary.length > 0){
        const data = await post(createUrl, {title, imageUrl, category, description, requirements, salary});
        page.redirect('/dashboard');
    }
}

export async function onEdit({title, imageUrl, category, description, requirements, salary}, event){
    if (title.length > 0 && imageUrl.length > 0 && category.length > 0 && description.length > 0 && requirements.length > 0 && salary.length > 0){
        let id = event.target.dataset.id;
        const data = await put(createUrl + id, {title, imageUrl, category, description, requirements, salary});
        page.redirect(`/dashboard/details/${id}`);
    }
}

export async function onDelete(ctx){
    let id = ctx.params.id;
    const res = await del(createUrl + id);
    page.redirect('/dashboard');
}

export async function onApply(ctx){
    let id = ctx.params.id;
    const res = await post(applyUrl, {offerId: id});
    page.redirect(`/dashboard/details/${id}`);
}

export async function getOfferApplications(id){
    return await get(`http://localhost:3030/data/applications?where=offerId%3D%22${id}%22&distinct=_ownerId&count`);
}

export async function hasApplied(offerId){
    let id = getUserData().id;
    const data = await get(`http://localhost:3030/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${id}%22&count`);
}

export async function getById(id){
    return await get(createUrl + id);
}