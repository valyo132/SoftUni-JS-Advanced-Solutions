import { page } from "../lib.js";
import { post } from '../api.js';
import { saveUserData } from "../util.js";

const url = 'http://localhost:3030/users/login';

export async function onLogin({email, password}){
    if (email.length > 0 && password.length > 0){
        const data = await post(url, {email, password});
        if (data){
            saveUserData(data);
            page.redirect('/home');
        }
    }
}