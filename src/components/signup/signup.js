import Component from '../../blackbox';

import './signup.css';

import { bindAll } from '../../utils/';

class SignupForm extends Component {
  constructor() {
    super();
    this.host = document.createElement('form');
    this.host.classList.add('signup-form');

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
      <input type="email" placeholder="Email" class="input-line">
      <input type="text" placeholder="Username" class="input-line">
      <input type="password" placeholder="Password" class="input-line">
      <input type="password" placeholder="Password repeat" class="input-line">
      <input type="text" placeholder="Store" class="input-line">
      <input type="password" placeholder="Store's password" class="input-line">
      <button type="submit" class="btn-login">Sign Up</button>
      <div class="text-container">
        Already Have An Account ? 
        <a href="#/login">Log in</a>
      </div>
    `
  }
};

export default SignupForm;
