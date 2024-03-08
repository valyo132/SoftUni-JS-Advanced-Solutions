import { hasUser } from "./util.js";

export function updateNav(){
    let isUserAv = hasUser();
    const guestA = document.querySelectorAll('a[data-permission="guest"]');
    const userA = document.querySelectorAll('a[data-permission="user"]');
    if (isUserAv){
        guestA.forEach(el => el.style.display = 'none');
        userA.forEach(el => el.style.display = 'block');
    } else{
        guestA.forEach(el => el.style.display = 'block');
        userA.forEach(el => el.style.display = 'none');
    }
}