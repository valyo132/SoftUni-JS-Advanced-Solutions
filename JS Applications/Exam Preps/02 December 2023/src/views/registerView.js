import { onRegister } from '../data/userService.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const registerTemplate = () => html`
    <section id="register">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Register</h2>
            <form @submit=${createSubmitHandler(onSubmit)} class="register-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
         
        </section>
`;

export function showRegisterView(){
    render(registerTemplate());
}

async function onSubmit({email, password, ['re-password']: repass}){
    if (email == '' || password == ''){
        return alert("These fields are requered!");
    }

    if (password != repass){
        return alert("Passwords dont match!");
    }

    await onRegister({email, password});
    page.redirect('/');
}