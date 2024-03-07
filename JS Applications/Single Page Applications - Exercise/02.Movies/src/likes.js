import { getDetails } from "./movie.js";

const likesUrl = 'http://localhost:3030/data/likes';

export async function getLikes (movieId){
    const res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);
    return await res.json();
}

export async function isUserLikedMovie(movieId, userId){
    const res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`, {
        method: 'get',
        headers: {'Content-Type': 'application/json'}
    });
    return await res.json();
}

export async function likeMovie(id){
    try {
        const res = await fetch(likesUrl, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json', 
                'X-Authorization': JSON.parse(localStorage.getItem('user')).accessToken
            },
            body: JSON.stringify({movieId: id})
        });

        if (!res.ok){
			const err = await res.json();
			throw new Error(err.message);
		}

        getDetails(id);
    } catch (error) {
        alert(error.message);
    }
}