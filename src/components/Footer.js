import Component from '../blackbox';

class Footer extends Component {
  constructor() {
    super();

    this.host = document.createElement('footer');
    this.host.classList.add('page-footer');
  }

  render() {
    return `
      <address class="address">
        Kottans, Kottans Str. 1, 
        <a href="tel:57778887">tel. 577-788-87</a>
      </address>
      <small class="copyright">
        Pizza Manager &copy; 2018
      </small>
    `
  }
};

export default Footer;
