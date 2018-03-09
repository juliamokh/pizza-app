import Queue from './components/Queue';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

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
    onEnter: (navigateTo, { login }) => {
      if (!login) {
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
