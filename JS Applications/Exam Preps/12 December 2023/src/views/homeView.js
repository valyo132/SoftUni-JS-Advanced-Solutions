import {html, render} from '../lib.js';
import { updateNav } from '../nav.js';

const homeViewTamplate = () => html`
    <section id="hero">
          <h1>
            Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
          </h1>
        </section>
`;

export function showHomeView(){
    render(homeViewTamplate());
    updateNav();
}