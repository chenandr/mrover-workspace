import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import PidTune from '../components/PidTune.vue'
import LCMEcho from '../components/LCMEcho.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/PidTune',
      name:'PidTune',
      component: PidTune
    },
    {
      path: '/LCMEcho',
      name: 'LCMEcho',
      component: LCMEcho
    }
  ]
})
