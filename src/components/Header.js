import Component from '../blackbox';

import logo from '../img/logo.svg';
import iconAdd from '../img/iconAdd.svg';
import { bindAll } from '../utils';

class Header extends Component {
  constructor() {
    super();

    this.host = document.createElement('header');
    this.host.classList.add('page-header');
  }

  render() {
    return `
      <div class="current-time">
        <i class="far fa-clock"></i>
        <time datetime="2017-02-01T00:00:00">00:00:00</time>
      </div>
      <div class="title">
        <img src="${logo}" alt="logo">
        <h1>Pizza Queue</h1>
      </div>
      <nav class="btn-wrapper">
        <button class="btn btn-add" type="button">
          <img src="${iconAdd}" alt="">
        </button>
        <a href="#/login" class="btn btn-login" type="button" aria-label="login / signup">
          <i class="fas fa-sign-in-alt"></i>
          <span>Log in / Sign up</span>
        </a>
      </nav>
    `
  }
};

export default Header;
