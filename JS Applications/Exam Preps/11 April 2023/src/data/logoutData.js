import { page } from "../lib.js";
import { clearUserData } from "../util.js";

const url = 'http://localhost:3030/users/logout';

export async function onLogout(){
    clearUserData();
    page.redirect('/home');
}