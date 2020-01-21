import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/HomeView';
import PropertyView from '../views/PropertyView';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/property/:id',
            name: 'property',
            component: PropertyView,
            meta: {title: 'Details'}
        },
        {
            path: '/',
            component: HomeView,
            meta: { title: 'Rent a property' }
        },
        {
            // catch not found
            path: '*'
        }
    ]
})
