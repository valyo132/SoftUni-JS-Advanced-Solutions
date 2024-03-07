import { showLoginView } from "./login.js";
import { displayNav } from "./nav.js";

export function onLogout(event){
    event?.preventDefault();
    
    localStorage.clear();
    displayNav();
    showLoginView();
}