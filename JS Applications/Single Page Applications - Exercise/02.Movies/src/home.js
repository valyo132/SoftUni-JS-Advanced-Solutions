import { displayMovies } from './movie.js';
import {displayNav} from './nav.js';

export async function showHomeView(){
    document.getElementById('form-login').style.display = 'none';
    document.getElementById('form-sign-up').style.display = 'none';
    document.getElementById('edit-movie').style.display = 'none';
    document.getElementById('movie-example').style.display = 'none';
    document.getElementById('add-movie').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';

    displayNav();

    if (localStorage.getItem('user')){
        document.getElementById('movie-example').innerHTML = '';
        document.getElementById('movie-example').style.display = 'block';
        document.getElementById('add-movie-button').style.display = 'block';
        await displayMovies();
    } else{
        document.getElementById('add-movie-button').style.display = 'none';
    }
}