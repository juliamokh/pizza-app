import Component from '../../blackbox';

import Header from '../header';
import Footer from '../footer';

import './reset.css';
import './app.css';

import { bindAll } from '../../utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.header = new Header;
    this.footer = new Footer;

    this.main = null;

    bindAll(this, 'handleLogin');
  }

  update(nextProps) {
    this.props = Object.assign({}, this.props, nextProps);
    const { currentComponent } = this.props;
    if (currentComponent) {
      this.main = new currentComponent;
    }
    return this._render();
  }

  handleLogin() {
    const { onLogin } = this.props;
    onLogin();
  }

  render() {
    if (this.main) {
      this.main.host.classList.add('page-main');
      return [
        this.header.update(),
        this.main.update({
          onLogin: this.handleLogin
        }),
        this.footer.update()
      ];
    }
    else {
      return [
        this.header.update(),
        this.footer.update()
      ];
    }
  }
};

export default App;
