import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './pages/Login.vue';
import Create from './pages/Create.vue';
import Don from './pages/Don.vue';
import Dashboard from './pages/Dashboard.vue';
import Project from './pages/Project.vue';
import Petitions from './pages/Petitions.vue';
import Petition from './pages/Petition.vue';
import Account from './pages/Account.vue';
import Events from './pages/Events.vue';
import Evenmt from './pages/Evenmt.vue';
import EventDash from './pages/EventDash.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Dashboard },
    { path: '/Login', component: Login },
    { path: '/Create', component: Create },
    { path: '/Don', component: Don },
    { path: '/Dashboard', component: Dashboard },
    { path: '/Project/:id', component: Project },
    { path: '/Petitions/', component: Petitions },
    { path: '/Petition/:id', component: Petition },
    { path: '/Account', component: Account },
    { path: '/Event/:id/:mode', component: Evenmt },
    { path: '/Event/:id', component: Evenmt },
    { path: '/Event', component: Evenmt },
    { path: '/Events', component: Events },
    { path: '/EventDash', component: EventDash }
  ]
});

export default router;