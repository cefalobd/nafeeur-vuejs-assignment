import Vue from "vue";
import Router from 'vue-router'
import genresRouter from './modules/genres'

Vue.use(Router)

const routeInfos = [
  genresRouter
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: routeInfos
})

const router = createRouter()
export default router