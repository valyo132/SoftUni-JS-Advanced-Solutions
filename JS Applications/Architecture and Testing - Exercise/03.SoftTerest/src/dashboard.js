import { del, get, put } from "./request.js";

const url = 'http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc';
const singleIdea = 'http://localhost:3030/data/ideas/'
const dashboardSection = document.querySelectorAll('main > div')[3];
let context = null;

export async function showDashboardView(ctx){
    context = ctx;
    ctx.render(dashboardSection);
    await displayIdeas();
}

async function displayIdeas(){
    const data = await getIdeas();
    dashboardSection.innerHTML = '';
    if (!data){
        dashboardSection.innerHTML = '<h1>No ideas yet! Be the first one :)</h1>';
    } else{
        for (const obj of Object.values(data)) {
            dashboardSection.innerHTML += createTemplate(obj);
        }
    }

    dashboardSection.querySelectorAll('a').forEach(el => el.addEventListener('click', onDetailsHandler));
}

async function onDetailsHandler(event){
    event.preventDefault();
    const id = event.target.dataset.id;
    context.goTo("/03.SoftTerest/details", id)
}

export async function getIdea(id){
    return await get(singleIdea + id);
}

async function updateIdea(id, data){
    return await put(singleIdea + id, data);
}

async function deleteIdea(id){
    return await del(url + id);
}

async function getIdeas(){
    return await get(url);
}

function createTemplate(obj){
    return `
    <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem">
        <div class="card-body">
            <p class="card-text">${obj.title}</p>
        </div>
        <img class="card-image" src=${obj.img} alt="Card image cap" />
        <a class="btn" href="/details" data-id=${obj._id}>Details</a>
    </div>
    `;
}