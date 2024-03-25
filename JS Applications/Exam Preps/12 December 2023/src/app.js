import { onDelete } from "./data/dataService.js";
import { onLogout } from "./data/userService.js";
import { page } from "./lib.js";
import { updateNav } from "./nav.js";
import { showCreateView } from "./views/createView.js";
import { showDashboardView } from "./views/dashboardView.js";
import { showDetailsView } from "./views/detailsView.js";
import { showEditView } from "./views/editView.js";
import { showHomeView } from "./views/homeView.js";
import { showLoginView } from "./views/loginView.js";
import { showRegisterView } from "./views/registerView.js";
import { showSearchView } from "./views/searchView.js";

updateNav();

page('/', showHomeView);
page('/home', showHomeView);
page('/login', showLoginView);
page('/logout', onLogout);
page('/register', showRegisterView);
page('/dashboard', showDashboardView);
page('/create', showCreateView);
page('/dashboard/details/:id', showDetailsView);
page('/dashboard/edit/:id', showEditView);
page('/dashboard/delete/:id', onDelete);
page('/search', showSearchView);

page();