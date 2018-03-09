import './styles/reset.css';
import './styles/app.css';

import Router from './blackbox/Router';
import routes from './routes';

const app = new Router({ host: document.getElementById('root'), routes });
console.log(app);
