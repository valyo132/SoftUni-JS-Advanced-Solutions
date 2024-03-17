import page from "../node_modules/page/page.mjs";
import { onApply, onDelete } from "./data/dashboardData.js";
import { onLogout } from "./data/logout.js";
import { updateNav } from "./nav.js";
import { showCreateView } from "./views/create.js";
import { showDashboardView } from "./views/dashboard.js";
import { showDetailsView } from "./views/details.js";
import { showEditView } from "./views/edit.js";
import { showHomeView } from './views/home.js';
import { showLoginView } from "./views/login.js";
import { showRegisterView } from "./views/register.js";

updateNav();

page('/index.html', showHomeView);
page('/', showHomeView);
page('/login', showLoginView);
page('/register', showRegisterView);
page('/logout', onLogout);
page('/dashboard', showDashboardView);
page('/create', showCreateView);
page('/dashboard/details/:id', showDetailsView);
page('/offer/edit/:id', showEditView);
page('/offer/delete/:id', onDelete);
page('/offer/apply/:id', onApply);

page();