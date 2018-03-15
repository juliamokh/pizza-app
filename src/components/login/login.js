import Component from '../../blackbox';

import './login.css';

import { bindAll } from '../../utils/';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.host = document.createElement('form');
    this.host.classList.add('login-form');

    bindAll(this, 'handleLogin');
    this.host.addEventListener('submit', this.handleLogin);
  }

  handleLogin(ev) {
    ev.preventDefault();
    const { onLogin } = this.props;
    onLogin();
  }

  render() {
    return `
      <input type="text" placeholder="Username" class="input-line">
      <input type="password" placeholder="Password" class="input-line">
      <button type="submit" class="btn-login">Log In</button>
      <div class="text-container">
        Have No Account ? 
        <a href="#/signup">Sign Up</a>
      </div>
    `
  }
};

export default LoginForm;
