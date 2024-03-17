import { page } from "../lib.js";
import { get } from '../api.js';
import { clearUserData } from "../util.js";
import { updateNav } from "../nav.js";

const url = 'http://localhost:3030/users/logout';

export async function onLogout(){
    await get(url);
    clearUserData();
    page.redirect('/dashboard');
}