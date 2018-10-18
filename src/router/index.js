import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import User from '../components/User';

const NotFound = { template: '<p>Page not found</p><a href="/#/home">go Home</a>' };

const Home = { template: '<p>home page<br/> <a href="" onclick="$route.goBack()">go Back</a></p>' };

const About = { template: '<p>about page<br/> <a href="" onclick="$route.goBack()">go Back</a></p>' };

const UserProfile = { template: '<p>Profile: {{ $route.params.id }}</p>' };
const UserPosts = { template: '<p>UserPosts ,{{ $route.params.id }}</p>' };

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/user/:id',
      component: User ,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'profile',
          component: UserProfile
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'posts',
          component: UserPosts
        }
      ]}
  ]
})
