import { get, put, del, post } from "../api.js";
import { page } from "../lib.js";
import { getUserData } from "../util.js";

const dashboardURL = 'http://localhost:3030/data/characters?sortBy=_createdOn%20desc';
const baseURL = 'http://localhost:3030/data/characters/';
const createUrl = 'http://localhost:3030/data/characters';

export async function getItems(){
    return get(dashboardURL);
}

export async function getById(id){
    return await get(baseURL + id);
}

export async function onCreate(data){
    await post(createUrl, data);
}

export async function onEdit(id, data){
    await put(baseURL + id, data);
}

export async function onDelete(ctx){
    if (confirm("delete character?")){
        let id = ctx.params.id;
        const res = await del(baseURL + id);
        page.redirect('/dashboard');
    }
}

export async function getLikes(id){
    return await get(`http://localhost:3030/data/useful?where=characterId%3D%22${id}%22&distinct=_ownerId&count`);
}

export async function postLike(ctx){
    let characterId = ctx.params.id;
    await post(`http://localhost:3030/data/useful`, {characterId});
    page.redirect(`/dashboard/details/${characterId}`);
}

export async function hasLiked(characterId){
    let id = getUserData().id;
    return await get(`http://localhost:3030/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${id}%22&count`);
}