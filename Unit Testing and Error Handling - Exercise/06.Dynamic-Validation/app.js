function validate() {
    const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    let emailInput = document.getElementById('email');

    emailInput.addEventListener('change', function(){
        if (!regex.test(emailInput.value)){
            console.log('OK');
            emailInput.classList.add('error');
        } else{
            emailInput.classList.remove('error');
        }
    })
}