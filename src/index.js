import Router from './blackbox/Router';
import routes from './routes';

const app = new Router({ host: document.getElementById('root'), routes });
