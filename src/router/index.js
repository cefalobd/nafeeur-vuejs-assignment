import Vue from "vue";
import Router from 'vue-router'
import genresRouter from './modules/genres'
import movieGenresRouter from './modules/movie_genres'
import movieDetailsRouter from './modules/movie'
import wishListRouter from './modules/wishlist'

Vue.use(Router)

const routeInfos = [
  genresRouter,
  movieGenresRouter,
  movieDetailsRouter,
  wishListRouter
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: routeInfos
})

const router = createRouter()
export default router