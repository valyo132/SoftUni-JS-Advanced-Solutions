import { go, onDelete } from "./data/eventsData.js";
import { onLogout } from "./data/logoutData.js";
import { page } from "./lib.js";
import { updateNav } from "./nav.js";
import { showCreateView } from "./views/createView.js";
import { showDashboardView } from "./views/dashboardView.js";
import { showDetailsView } from "./views/details.js";
import { showEditView } from "./views/editView.js";
import { showHomeView } from "./views/homeView.js";
import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/registerView.js";

updateNav();
page.redirect('/');

page('/', showHomeView);
page('/home', showHomeView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/logout', onLogout);
page('/dashboard', showDashboardView);
page('/create', showCreateView);
page('/event/details/:id', showDetailsView);
page('/event/edit/:id', showEditView);
page('/event/delete/:id', onDelete);
page('/event/go/:id', go)

page();