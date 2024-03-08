import { post } from "./request.js";
import { createSubmitHandler, saveUserData } from "./util.js";

const url = 'http://localhost:3030/users/register';

const registerSection = document.querySelectorAll('main > div')[1];
const form = registerSection.querySelector('form').addEventListener('submit', createSubmitHandler(onSubmit));

let context = null;
export function showRegisterView(ctx){
    context = ctx;
    context.render(registerSection);
}

async function onSubmit({email, password, repeatPassword}){
    try {
        if (email.length < 3 || password.length < 3 || password != repeatPassword){
            throw new Error("Invalid credentials"); 
        }

        const userData = await post(url, {email, password});
        saveUserData(userData);
        context.goTo('/03.SoftTerest/home');
        context.updateNav();

    } catch (error) {
        alert(error.message);
    }
}   