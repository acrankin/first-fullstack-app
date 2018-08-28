import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Drinks from './components/drinks/Drinks.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/drinks', component: Drinks },
    { path: '*', redirect: '/' }
  ]
});