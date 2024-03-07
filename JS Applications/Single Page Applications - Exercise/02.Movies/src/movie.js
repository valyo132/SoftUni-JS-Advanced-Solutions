import { showEditMovieView } from "./edit.js";
import { showHomeView } from "./home.js";
import {getLikes, isUserLikedMovie, likeMovie} from './likes.js';

const moviesUrl = 'http://localhost:3030/data/movies/';
const movieContainer = document.getElementById('movies-list');

export async function getDetails(id){
    const res = await fetch(moviesUrl + id, {
        method: 'get',
        headers: {'Content-Type': 'application/json'}
    });
    const movie = await res.json();
    displayDetailsMovie(movie);
}

async function displayDetailsMovie(movie){
    document.getElementById('form-login').style.display = 'none';
    document.getElementById('form-sign-up').style.display = 'none';
    document.getElementById('edit-movie').style.display = 'none';
    document.getElementById('movie-example').style.display = 'block';
    document.getElementById('add-movie').style.display = 'none';
    document.getElementById('home-page').style.display = 'none';

    const likes = await getLikes(movie._id);

    const isLiked = await isUserLikedMovie(movie._id, JSON.parse(localStorage.getItem('user'))._id);

    document.getElementById('movie-example').innerHTML = `
    <div class="container">
        <div class="row bg-light text-dark">
        <h1>Movie title: ${movie.title}</h1>
        <div class="col-md-8">
            <img
            class="img-thumbnail"
            src="${movie.img}"
            alt="Movie"
            />
        </div>
        <div class="col-md-4 text-center">
            <h3 class="my-3">Movie Description</h3>
            <p> ${movie.description} </p>
            <a class="btn btn-danger" href="#">Delete</a>
            <a class="btn btn-warning" href="#">Edit</a>
            <a class="btn btn-primary" href="#">Like</a>
            <span class="enrolled-span">Liked ${likes}</span>
        </div>
        </div>
    </div>
    `;

    for (const obj of Object.values(isLiked)) {
        if (obj._ownerId == JSON.parse(localStorage.getItem('user'))._id){
            document.getElementById('movie-example').querySelector('a.btn-primary').style.display = 'none';
        }
    }

    addEventListenerToLikeMoive(document.getElementById('movie-example').querySelector('a.btn-primary'), movie);
    addEventListenerToEditMovie(document.getElementById('movie-example').querySelector('a.btn-warning'), movie);
    addEventListenerToDeleteMovie(document.getElementById('movie-example').querySelector('a.btn-danger'), movie._id);

    if (JSON.parse(localStorage.getItem('user'))._id == movie._ownerId){
        document.getElementById('movie-example').querySelector('a.btn-danger').style.display = 'inline-block';
        document.getElementById('movie-example').querySelector('a.btn-warning').style.display = 'inline-block';
    } else{
        document.getElementById('movie-example').querySelector('a.btn-danger').style.display = 'none';
        document.getElementById('movie-example').querySelector('a.btn-warning').style.display = 'none';
    }
}

async function addEventListenerToDeleteMovie(btn, movieId){
    btn.addEventListener('click', async (event) => {
        event?.preventDefault();
        const res = await fetch(moviesUrl + movieId, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': JSON.parse(localStorage.getItem('user')).accessToken
            }
        });

        showHomeView();
    })
}

async function addEventListenerToLikeMoive(btn, movie){
    btn.addEventListener('click', async (event) => {
        event?.preventDefault();
        await likeMovie(movie._id);
    })
}

function addEventListenerToEditMovie(btn, movie){
    btn.addEventListener('click', async (event) =>{
        event?.preventDefault();
        showEditMovieView(movie);
    })
}

function addEventListenerToMovie(li) {
    li.querySelector('.details').addEventListener('click', (event) => {
        const li = event.target.parentNode.parentNode;
        getDetails(li.dataset.id);
    });
}

export function displayCreateMovieView(){
    document.getElementById('form-login').style.display = 'none';
    document.getElementById('form-sign-up').style.display = 'none';
    document.getElementById('edit-movie').style.display = 'none';
    document.getElementById('movie-example').style.display = 'none';
    document.getElementById('add-movie').style.display = 'block';
    document.getElementById('home-page').style.display = 'none';
}

export async function createMovie(){
    const form = document.getElementById('add-movie-form');
    const [titleInput, imgInput] = form.querySelectorAll('input');
    const descriptionInput = form.querySelector('textarea');

    let title = titleInput.value.trim();
    let img = imgInput.value.trim();
    let description = descriptionInput.value.trim();
    let _createdOn = new Date().getTime();
    let _ownerId = JSON.parse(localStorage.getItem('user'))._id;

    try {
        if (title.length > 0 && img.length > 0 && description.length > 0){
            const res = await fetch(moviesUrl, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': JSON.parse(localStorage.getItem('user')).accessToken
                },
                body: JSON.stringify({title, img, description, _createdOn, _ownerId})
            });
    
            if (!res.ok){
                const err = await res.json();
                throw new Error(err.message);
            }
        }

        showHomeView();
    } catch (error) {
        alert(error.message);
    }
}

export async function displayMovies(){
    const movies = await getAllMovies();
    movieContainer.innerHTML = '';

    for (const movie of movies) {
        let li = createMovieTemplate(movie)
        movieContainer.appendChild(li);
        addEventListenerToMovie(li)
    }
}

function createMovieTemplate(data){
    const li = document.createElement('li');
    li.style.listStyleType = "none"
    li.dataset.id = data._id;
    li.innerHTML = `
            <div class="col-md-8">
              <img class="img-thumbnail" src=${data.img} alt="Movie" />
            </div>
            <h1>${data.title}</h1>
            <div>
            <button class="details" style="background-color: lightblue; color: white;">Details</button>
            </div>
    `;

    return li;
}

async function getAllMovies(){
    try {
        const res = await fetch(moviesUrl, {
            method: 'get',
            headers: { 'Content-Type': 'application/json'}
        });

        if (!res){
            const err = await res.json();
			throw new Error(err.message);
        }

        return await res.json();

    } catch (error) {
        alert(error.message);
    }
}