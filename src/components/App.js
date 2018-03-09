import Component from '../blackbox';

import Header from './Header';
import Footer from './Footer';

import '../styles/reset.css';
import '../styles/app.css';

import { bindAll } from '../utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.header = new Header;
    this.footer = new Footer;

    this.main = null;
  }

  update(nextProps) {
    this.props = Object.assign({}, this.props, nextProps);
    const { currentComponent } = this.props;
    if (currentComponent) {
      this.main = new currentComponent;
    }
    return this._render();
  }

  render() {
    if (this.main) {
      return [
        this.header.update(),
        this.main.update(),
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
