import { post } from "./request.js";
import { createSubmitHandler, getUserData } from "./util.js";

const url = 'http://localhost:3030/data/ideas';
const createSection = document.querySelectorAll('main > div')[5];
let form = createSection.querySelector('form').addEventListener('submit', createSubmitHandler(onCreate));
let context = null;

export function showCreateView(ctx){
    context = ctx;
    ctx.render(createSection);
}

async function onCreate({title, description, imageURL}){
    try {
        if (title.length < 6 || description.length < 10 || imageURL.length < 5){
            throw new Error('Invalid input');
        }

        let _createdOn = new Date().getTime();
        let _ownerId = getUserData()._id;

        const res = await post(url, {title, description, imageURL, _createdOn, _ownerId});
        context.goTo('/03.SoftTerest/dashboard');
    } catch (error) {
        alert(error.message);
    }
}