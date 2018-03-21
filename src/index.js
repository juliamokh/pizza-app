import Router from './blackbox/Router';
import routes from './routes';
import App from './components/app';

const app = new Router({ 
  App,
  host: document.getElementById('root'),
  routes 
})
