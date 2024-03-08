import { getIdea } from "./dashboard.js";
import { del } from "./request.js";
import { hasOwner } from "./util.js";

const url = 'http://localhost:3030/data/ideas/';
const detailsSection = document.querySelectorAll('main > div')[4];
let context = null;

export async function showDetailsVeiw(ctx, data){
    context = ctx;
    ctx.render(detailsSection);

    const idea = await getIdea(data[0]);
    let isOwner = hasOwner(idea._ownerId);
    console.log(isOwner);
    detailsSection.innerHTML = createideaTemplate(idea, isOwner);
    if (isOwner){
        detailsSection.querySelector('a').addEventListener('click', onDeletehandler);
    }
}

async function onDeletehandler(event){
    const id = event.target.dataset.id;
    const res = await del(url + id);
    context.goTo('/03.SoftTerest/dashboard');
}

function createideaTemplate(obj, isOwner){
    return `
    <img class="det-img" src=${obj.img} />
    <div class="desc">
        <h2 class="display-5">${obj.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">
            ${obj.description}
        </p>
    </div>
    <div class="text-center">
        ${isOwner ? `<a class="btn detb" href="#" data-id=${obj._id}>Delete</a>`: ""}
    </div>
    `;
}