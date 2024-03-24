import { onRegister } from '../data/userService.js';
import {html, render} from '../lib.js';
import { createSubmitHandler } from '../util.js';

const registerTamplate = () => html`
    <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${createSubmitHandler(onRegister)} class="register-form">
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
          </div>
        </section>
`;

export function showRegisterView(){
    render(registerTamplate());
}