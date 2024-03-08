import { showLoginView } from "./login.js";
import { updateNav  } from "./nav.js";
import { showRegisterView } from "./register.js";
import { logout } from './logout.js';
import { showHomeView } from "./home.js";
import { showDashboardView } from "./dashboard.js";
import { showDetailsVeiw } from "./details.js";
import { showCreateView } from "./create.js";

document.querySelectorAll('main > div').forEach(el => {
    el.remove();
});
const main = document.querySelector('main');

updateNav();

const routes = {
    '/03.SoftTerest/': showHomeView,
    '/03.SoftTerest/home': showHomeView,
    '/03.SoftTerest/dashboard': showDashboardView,
    '/03.SoftTerest/create': showCreateView,
    '/03.SoftTerest/login': showLoginView,
    '/03.SoftTerest/logout': () => {
        logout();
        goTo('/03.SoftTerest/home');
    },
    '/03.SoftTerest/register': showRegisterView,
    '/03.SoftTerest/details': showDetailsVeiw
};

const nav = document.querySelector('nav');
nav.addEventListener('click', onNavigate);

function renderer (view){
    main.replaceChildren(view);
}

function onNavigate(e){
    e?.preventDefault();
    let element = e.target;
    if (e.target.tagName !== 'A' && e.target.tagName !== 'IMG'){
        return;
    }
    if (e.target.tagName == 'IMG'){
        element = e.target.parentElement;
    }

    const viewName = new URL(element.href).pathname;
    goTo(viewName);
}

const ctx = {
    render: renderer,
    goTo,
    updateNav
}

function goTo(name, ...params){    
    const handler = routes[name];
    handler(ctx, params);
}

goTo('/03.SoftTerest/home');