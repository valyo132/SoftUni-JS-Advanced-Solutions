import { page } from "../lib.js";
import { get, post } from '../api.js';
import { clearUserData, saveUserData } from "../util.js";

const login = 'http://localhost:3030/users/login';
const logout = 'http://localhost:3030/users/logout';
const register = 'http://localhost:3030/users/register';

export async function onLogin({email, password}){
    if (email.length > 0 && password.length > 0){
        const data = await post(login, {email, password});
        if (data){
            saveUserData(data);
            page.redirect('/');
        }
    } else{
        alert("Password or email are invalid");
    }
}
export async function onRegister(obj){
    try {
        let [email, password, repass] = Object.values(obj);
    if (email.length > 0 && password.length > 0 && repass.length > 0){
        if (password == repass){
            const data = await post(register, {email, password});
            saveUserData(data);
            page.redirect('/');
        } else{
            throw new Error("Passwords dont match");
        }
       
    } else{
        throw new Error("Password or email are invalid");
    }
    } catch (error) {
        window.alert(error.message);
    }
    
}

export async function onLogout(){
    await get(logout);
    clearUserData();
    page.redirect('/');
}