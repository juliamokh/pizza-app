import Component from '../../blackbox';

import './header.css';
import logo from './logo.svg';
import iconAdd from './iconAdd.svg';

import { bindAll } from '../../utils';

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
      <a href="#/queue" class="title">
        <img src="${logo}" alt="logo">
        <h1>Pizza Queue</h1>
      </a>
      <nav class="btn-wrapper">
        <a href="#" class="btn btn-add" title="Add new pizza">
          <img src="${iconAdd}" alt="">
        </a>
        <a href="#/login" class="btn btn-login" title="Log in / Sign up">
          <i class="fas fa-sign-in-alt"></i>
        </a>
      </nav>
    `
  }
};

export default Header;
