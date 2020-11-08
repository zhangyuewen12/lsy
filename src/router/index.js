import Vue from 'vue'
import Router from 'vue-router'
import Page3 from '@/components/Page3'
import Page2 from "../components/Page2";
import Login from "../components/Login";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/page3',
      name: 'Page3',
      component: Page3
    }
  ]
})
