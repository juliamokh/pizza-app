import Component from '../../blackbox';
import { api } from '../../Api';
import logo from './logo.svg';
import iconAdd from './iconAdd.svg';
import './header.css';

class Header extends Component {
  constructor() {
    super();

    this.host = document.createElement('header');
    this.host.classList.add('page-header');

    this.clock = document.createElement('div');
    this.clock.classList.add('current-time');
  }

  onBeforeUpdate() {
    setInterval(this.drawClock.bind(this), 1000)
  }

  drawClock() {
    const time = new Date();
    const prepareTime = item => item < 10 ? '0' + item : item;
    const hours = prepareTime(time.getHours());
    const minutes = prepareTime(time.getMinutes());
    const seconds = prepareTime(time.getSeconds());

    this.clearChildren(this.clock);
    this.insertChildren(`
        <i class="far fa-clock"></i>
        <time>${hours}:${minutes}:${seconds}</time>
      `, this.clock);

    return this.clock
  }

  drawButtons() {
    if (api.isAuthorized()) {
      return `
        <nav class="btn-wrapper">
          <a href="#" class="btn btn-add" title="Add new pizza">
            <img src="${iconAdd}" alt="">
          </a>
          <a href="#/user" class="btn btn-login" title="User info">
            <i class="fas fa-user"></i>
          </a>  
        </nav>    
      `
    } else {
      return `
        <nav class="btn-wrapper">
          <a href="#/login" class="btn btn-login" title="Log in / Sign up">
            <i class="fas fa-sign-in-alt"></i>
          </a>
        </nav>
      `
    }
  }

  render() {
    return [
      this.clock,
    `
      <a href="#/queue" class="title">
        <img src="${logo}" alt="logo">
        <h1>Pizza Queue</h1>
      </a>
    `,
      this.drawButtons()]
  }
};

export default Header;
