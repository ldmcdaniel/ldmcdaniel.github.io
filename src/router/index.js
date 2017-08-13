import Vue from 'vue';
import Router from 'vue-router';
import Blog from '@/components/Blog';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});
