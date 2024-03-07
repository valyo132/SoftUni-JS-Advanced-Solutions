import { showHomeView } from "./home.js";
import { displayNav } from "./nav.js";

export function showLoginView(){
    document.getElementById('form-login').style.display = 'block';
    document.getElementById('form-sign-up').style.display = 'none';
    document.getElementById('edit-movie').style.display = 'none';
    document.getElementById('movie-example').style.display = 'none';
    document.getElementById('add-movie').style.display = 'none';
    document.getElementById('home-page').style.display = 'none';

	displayNav();
}

export async function onLogin(event){
    event.preventDefault();
	
	const formData = new FormData(event.target.parentNode);
	const data = Object.fromEntries(formData.entries());
	
	const email = data.email.trim();
	const password = data.password.trim();
	
	const url = 'http://localhost:3030/users/login';
	
	try{
		const res = await fetch(url, {
			method: 'post',
			headers: { 'Content-Type': 'application/josn' },
			body: JSON.stringify({email, password})
		});
		
		if (!res.ok){
			const err = await res.json();
			throw new Error(err.message);
		}
		
		const userData = await res.json();
		localStorage.setItem('user', JSON.stringify(userData));
		showHomeView();
		
	} catch (err){
		alert(err.message);
	}
}