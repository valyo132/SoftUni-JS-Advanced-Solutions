import { post } from "./request.js";
import { createSubmitHandler, saveUserData } from "./util.js";

const url = 'http://localhost:3030/users/login';
const loginSection = document.querySelectorAll('main > div')[2];
const form = loginSection.querySelector('form').addEventListener('submit', createSubmitHandler(onSubmit));

let context = null
export function showLoginView(ctx){
    context = ctx;
    ctx.render(loginSection);
}

async function onSubmit({email, password}){
    const res = await post(url, {email, password});
    saveUserData(res);
    context.goTo('/03.SoftTerest/home');
    context.updateNav();
}