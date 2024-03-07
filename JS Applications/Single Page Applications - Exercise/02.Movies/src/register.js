import { showHomeView } from "./home.js";

export function showRegisterView(){
    document.getElementById('form-login').style.display = 'none';
    document.getElementById('form-sign-up').style.display = 'block';
    document.getElementById('edit-movie').style.display = 'none';
    document.getElementById('movie-example').style.display = 'none';
    document.getElementById('add-movie').style.display = 'none';
    document.getElementById('home-page').style.display = 'none';
}

export async function onRegister(event){
    event.preventDefault();
	
	const formData = new FormData(event.target.parentNode);
	const data = Object.fromEntries(formData.entries());
	
    console.log(data);
	const email = data.email.trim();
	const password = data.password.trim();
    const rePass = data.repeatPassword.trim();
	
	const url = 'http://localhost:3030/users/register';
	
	try{
        if (!email || !password){
            throw new Error("Invalid credentials");
        }
        if (password.length < 6){
            throw new Error('Invalid password');
        }
        if (password != rePass){
			throw new Error('Ivalid password');
		}

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