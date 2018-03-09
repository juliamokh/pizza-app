import List from './components/List';

export default [
  {
    href: '',
    redirectTo: '/list',
  },
  {
    href: '/',
    redirectTo: '/list',
  },
  {
    href: '/list',
    component: List,
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
