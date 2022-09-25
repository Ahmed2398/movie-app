import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/front/Home.vue'
import Movie from '../components/movies/Movie'
import Actor from '../components/actors/Actors'
import ActorDetail from '../components/actors/ActorDetail'



Vue.use(VueRouter)

const routes = [
  {
    path: '/movie-app',
    name: 'home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: Movie
  },
  {
    path: '/actors',
    name: 'actor',
    component: Actor
  },
  {
    path: '/actor/:id',
    name: 'actordetail',
    component: ActorDetail
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
