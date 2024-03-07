window.addEventListener('load', start);

function start(){
    document.querySelector('form').addEventListener('submit', onRegister);
}

async function onRegister(event){
	event.preventDefault();
	
	const formData = new FormData(event.target);
	const data = Object.fromEntries(formData.entries());
	
	const email = data.email.trim(); // CEARFUL WITH email AND password!!!
	const password = data.password.trim();
    const rePass = data.rePass.trim();
	
	const url = 'http://localhost:3030/users/register'; // CHANGE IF NEEDED
	
	try{
        if (!email || !password){
            throw new Error("Invalid credentials");
        }
        if (password != rePass){
			throw new Error('Ivalid password');
		}

		const res = await fetch(url, {
			method: 'post',
			headers: { 'Content-Type': 'application/josn' },
			body: JSON.stringify({email, password})
		});
		
        console.log(res);
		if (!res.ok){
			const err = await res.json();
			throw new Error(err.message);
		}
		
		const userData = await res.json();
		localStorage.setItem('user', JSON.stringify(userData));
		window.location = 'index.html';
		
	} catch (err){
		alert(err.message);
	}
}