import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('../assets/error.png'),
    loading: require('../assets/loading.svg'),
    attempt: 1,
})
Vue.use(VueRouter)

const router = new VueRouter(routes)

export default router
