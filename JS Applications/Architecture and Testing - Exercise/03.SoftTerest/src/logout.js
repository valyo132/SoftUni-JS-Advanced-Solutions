import { updateNav } from './nav.js';
import { get } from './request.js'
import { clearUserData } from './util.js';

const url = 'http://localhost:3030/users/logout';

export function logout(){
    get(url);
    clearUserData();
    updateNav();
}