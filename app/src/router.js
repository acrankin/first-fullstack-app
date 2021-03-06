import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Drinks from './components/drinks/Drinks.vue';
import DrinkDetail from './components/drinks/DrinkDetail.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/drinks', component: Drinks },
    { path: '/drinks/:id', component: DrinkDetail },
    { path: '*', redirect: '/' }
  ]
});