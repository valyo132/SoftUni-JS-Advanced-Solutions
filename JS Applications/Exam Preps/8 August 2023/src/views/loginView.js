import { onLogin } from '../data/userService.js';
import {html, render} from '../lib.js';
import { createSubmitHandler } from '../util.js';

const loginTemplate = () => html`
    <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${createSubmitHandler(onLogin)} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`;

export function showLoginView(){
    render(loginTemplate());
}