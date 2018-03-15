import Queue from './components/queue';
import LoginForm from './components/login';
import SignupForm from './components/signup';

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
  },
  {
    href: '/signup',
    component: SignupForm,
  },
  {
    href: '/queue',
    component: Queue,
    onEnter: (navigateTo, { isLogin }) => {
      if (!isLogin) {
        navigateTo('/login');
        return false;
      }
      else return;
    }
  },
  // {
  //   href: '/list/:id',
  //   component: List,
  //   onEnter: (navigateTo, { login }) => {
  //     if (!users.some((el) => el === login)) {
  //       navigateTo('/login');
  //       return false;
  //     }
  //     else return;
  //   }
  // }
];
