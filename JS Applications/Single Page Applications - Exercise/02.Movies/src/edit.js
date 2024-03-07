import {getDetails} from './movie.js'

const moviesUrl = 'http://localhost:3030/data/movies/';

export async function showEditMovieView(movie){
    document.getElementById('form-login').style.display = 'none';
    document.getElementById('form-sign-up').style.display = 'none';
    document.getElementById('edit-movie').style.display = 'block';
    document.getElementById('movie-example').style.display = 'none';
    document.getElementById('add-movie').style.display = 'none';
    document.getElementById('home-page').style.display = 'none';

    document.getElementById('edit-movie').innerHTML = `
    <form class="text-center border border-light p-5" action="#" method="">
          <h1>Edit Movie</h1>
          <div class="form-group">
            <label for="title">Movie Title</label>
            <input
              id="title"
              type="text"
              class="form-control"
              placeholder="Movie Title"
              value="${movie.title}"
              name="title"
            />
          </div>
          <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea
              class="form-control"
              placeholder="Movie Description..."
              name="description"
            >${movie.description}</textarea>
          </div>
          <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input
              id="imageUrl"
              type="text"
              class="form-control"
              placeholder="Image Url"
              value="${movie.img}"
              name="img"
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    `;

    document.getElementById('edit-movie').querySelector('button').addEventListener('click', async (event) =>{
        event?.preventDefault();
        await editMovie(movie);
    })
}

export async function editMovie(movie){
    const form = document.getElementById('edit-movie')
    const [titleInput, imgInput] = form.querySelectorAll('input');
    const descriptionInput = form.querySelector('textarea');

    let title = titleInput.value.trim();
    let img = imgInput.value.trim();
    let description = descriptionInput.value.trim();
    let _createdOn = movie._createdOn;
    let _ownerId = movie._ownerId;
    let id = movie._id;

    try {
        const res = await fetch(moviesUrl + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json', 
                'X-Authorization': JSON.parse(localStorage.getItem('user')).accessToken
            },
            body: JSON.stringify({_ownerId, title, img, description, _createdOn})
        });

        if (!res.ok){
			const err = await res.json();
			throw new Error(err.message);
		}

        await getDetails(id);

    } catch (error) {
        alert(error.message);
    }
}