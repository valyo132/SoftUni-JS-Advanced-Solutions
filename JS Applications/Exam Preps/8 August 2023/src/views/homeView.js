import {html, render} from '../lib.js';
import { updateNav } from '../nav.js';

const homeTamplate = () => html`
    <section id="home">
          <h1>
            Welcome to <span>Samurider</span> moto market, your premier destination for Japanese motorcycles.</h1>
          <img
            src="./images/motorcycle.png"
            alt="home"
          />
        </section>
`;

export function showHomeView(){
    render(homeTamplate());
    updateNav();
}