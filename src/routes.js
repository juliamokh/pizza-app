import LoginForm from './components/login';
import SignupForm from './components/signup';
import User from './components/user';
import Queue from './components/queue';
import { navigateTo } from './blackbox/Router';
import { api } from './Api';

export default [
  {
    href: '',
    redirectTo: '/queue',
  },
  {
    href: '/',
    redirectTo: '/queue',
  },
  {
    href: '/login',
    component: LoginForm,
    onEnter: () => {
      if (api.isAuthorized) {
        navigateTo('/user');
        return false
      }
      else return
    }
  },
  {
    href: '/signup',
    component: SignupForm,
    onEnter: () => {
      if (api.isAuthorized) {
        navigateTo('/user');
        return false
      }
      else return
    }
  },
  {
    href: '/logout',
    onEnter: () => api.logout(),
    redirectTo: '/login',
  },
  {
    href: '/user',
    component: User,
    onEnter: () => {
      if (!api.isAuthorized) {
        navigateTo('/login');
        return false
      }
      else return
    }
  },
  {
    href: '/queue',
    component: Queue,
    onEnter: () => {              
      if (!api.isAuthorized()) {
        navigateTo('/login');
        return false
      }
      else return
    }
  }
]
