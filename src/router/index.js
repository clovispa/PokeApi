import Vue from 'vue'
import VueRouter from 'vue-router'
import PokemonHome from '../views/PokemonHome.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PokemonHome',
    component: PokemonHome
  },
  {
    path: '/pokemon-favorites',
    name: 'PokemonFavorites',
    component: () => import(/* webpackChunkName: "PokemonFavorites" */ '../views/PokemonFavorites.vue')
  },
  {
    path: '/pokemon-list',
    name: 'PokemonList',
    component: () => import(/* webpackChunkName: "PokemonList" */ '../views/PokemonList.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
