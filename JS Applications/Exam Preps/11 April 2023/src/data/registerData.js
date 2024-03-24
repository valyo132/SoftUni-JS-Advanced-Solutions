import { page } from "../lib.js";
import { post } from '../api.js';
import { saveUserData } from "../util.js";

const url = 'http://localhost:3030/users/register';

export async function onRegister(entires){
    let [email, password, repass] = Object.values(entires);
    if (password != repass){
        alert("Passwords not matcing");
    } else if (email.length > 0 && password.length > 0){
        const data = await post(url, {email, password});
        if (data){
            saveUserData(data);
            page.redirect('/home');
        }
    }
}