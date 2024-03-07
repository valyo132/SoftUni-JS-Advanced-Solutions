export function displayNav (){
    if (localStorage.getItem('user')){
        document.getElementById('welcome-msg').textContent = `Welcome, ${JSON.parse(localStorage.getItem('user')).email}`;
        document.querySelectorAll('.nav-item.guest a[href="#"]').forEach(el => {
            el.style.display = 'none';
        });
        document.querySelector('.nav-item.user a[href="#"]').style.display = 'block';
    } else{
        document.getElementById('welcome-msg').style.display = 'none';
        document.querySelectorAll('.nav-item.guest a[href="#"]').forEach(el => {
            el.style.display = 'block';
        });
        document.querySelector('.nav-item.user a[href="#"]').style.display = 'none';
    }
}