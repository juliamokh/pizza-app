import Component from './Component';
import { bindAll, isEqualPaths, extractUrlParams } from './utils';

class Router extends Component {
  constructor(props) {
    super();

    const { App, host, routes } = props;

    this.state = {
      routes,
      currentRoute: null,
      currentComponent: null,
    }

    this.host = host;

    this.app = new App;

    bindAll(this, 'hadleHashChange');
    window.addEventListener('hashchange', () => this.hadleHashChange(this.path));
    this.hadleHashChange(this.path);
  }

  get path() {
    return window.location.hash.slice(1)
  }

  hadleHashChange(path) {
    const { routes, currentRoute } = this.state;
    const nextRoute = routes.find( ({ href }) => isEqualPaths(href, path));

    if(nextRoute && nextRoute !== currentRoute) {
      
      if(nextRoute.onEnter) {
        nextRoute.onEnter()
      }

      if(nextRoute.redirectTo) {
        return this.navigateTo(nextRoute.redirectTo)
      }

      this.updateState({
        currentRoute: nextRoute,
        currentComponent: nextRoute.component,
      })
    }
  }

  navigateTo(url) {
    window.location.hash = url;
  }

  render() {
    const { currentRoute, currentComponent } = this.state;
 
    return this.app.update({ 
      currentComponent,
      params: extractUrlParams(currentRoute.href, this.path)
    })
  }
}

export const navigateTo = url => window.location.hash = url;

export default Router;
