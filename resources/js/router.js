import Vue from 'vue';
import Router from 'vue-router';
import Index from  '../views/Index.vue';

Vue.use(Router);

const routes = [
    {
    path: '/',
    name: 'index',
    component: Index
    }
]

const router = new Router({
routes: routes
});

export default router;
