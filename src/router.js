import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './pages/Login.vue';
import Create from './pages/Create.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Login },
    { path: '/Login', component: Login },
    { path: '/Create', component: Create }
  ]
});

export default router;