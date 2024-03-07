import { showHomeView } from "./home.js";
import { onLogin, showLoginView } from "./login.js";
import { onLogout } from "./logout.js";
import { onRegister, showRegisterView } from "./register.js";
import {createMovie, displayCreateMovieView} from './movie.js';


showHomeView();

// nav
document.querySelector('.navbar-brand[href="#"]').addEventListener('click', showHomeView);

// Login
document.querySelector('.nav-item.guest a[href="#"]').addEventListener('click', showLoginView);
document.getElementById('login-form').querySelector('button[type="submit"]').addEventListener('click', onLogin);

// Logout
document.querySelector('.nav-item.user a[href="#"]').addEventListener('click', onLogout);

// Register
document.querySelectorAll('.nav-item.guest a[href="#"]')[1].addEventListener('click', showRegisterView);
document.querySelector('#register-form button[type="submit"]').addEventListener('click', onRegister);

document.getElementById('add-movie-button').addEventListener('click', (event) => {
    event?.preventDefault();
    if (localStorage.getItem('user')){
        displayCreateMovieView();
    }
});

document.querySelector('#add-movie-form button[type="submit"]').addEventListener('click', async (event) => {
    event?.preventDefault();
    await createMovie();
});
