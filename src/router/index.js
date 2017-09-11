import Vue from 'vue';
import Router from 'vue-router';
import Blog from '@/components/Blog';
import Home from '@/components/Home';
import MyMusic from '@/components/MyMusic';
import AboutMe from '@/components/AboutMe';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/music',
      name: 'MyMusic',
      component: MyMusic,
    },
    {
      path: '/about',
      name: 'AboutMe',
      component: AboutMe,
    },
  ],
});
