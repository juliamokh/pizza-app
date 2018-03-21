import Component from '../../blackbox';
import { bindAll } from '../../blackbox/utils';

import Header from '../header';
import Footer from '../footer';

import './reset.css';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.header = new Header;
    this.footer = new Footer;
    this.main = null;
  }

  onBeforeUpdate(nextProps) {
    const { currentComponent } = nextProps;
    this.main = new currentComponent;
    this.main.host.classList.add('page-main');
  }

  render() {
    return [
      this.header.update(),
      this.main.update(),
      this.footer.update()
    ]
  }
}

export default App;
