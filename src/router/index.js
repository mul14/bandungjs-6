import Vue from 'vue'
import Router from 'vue-router'
import Jsx from '@/components/Jsx'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: require('@/components/Home').default },

    { path: '/what', name: 'what', component: require('@/components/What').default },
    { path: '/history', name: 'history', component: require('@/components/History').default },
    { path: '/upcoming', name: 'upcoming', component: require('@/components/Upcoming').default },
    { path: '/current', name: 'current', component: require('@/components/Current').default },


    { path: '/single', name: 'single', component: require('@/components/Single').default },
    { path: '/html', name: 'html', component: require('@/components/Html').default },
    { path: '/data', name: 'data', component: require('@/components/Data').default },
    { path: '/lifecycle', name: 'lifecycle', component: require('@/components/Lifecycle').default },
    { path: '/two', name: 'two', component: require('@/components/Two').default },
    { path: '/method', name: 'method', component: require('@/components/Method').default },
    { path: '/filter', name: 'filter', component: require('@/components/Filter').default },
    { path: '/computed', name: 'computed', component: require('@/components/Computed').default },
    { path: '/vuex', name: 'vuex', component: require('@/components/Vuex').default },
    { path: '/style', name: 'style', component: require('@/components/Style').default },
    { path: '/jsx', name: 'jsx', component: Jsx },
    { path: '/coffee', name: 'coffee', component: require('@/components/Coffee').default },
    { path: '/watcher', name: 'watcher', component: require('@/components/Watcher').default },
  ]
})
