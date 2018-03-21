import Component from '../../blackbox';
import { bindAll } from '../../blackbox/utils';
import { navigateTo } from '../../blackbox/Router';
import { api } from '../../Api';
import './login.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ''
    }

    this.host = document.createElement('form');
    this.host.classList.add('login-form');

    bindAll(this, 'handleSubmit');
    this.host.addEventListener('submit', this.handleSubmit);
  }

  createErrorMessage(res) {
    let errMsg = `${res.error}<br>`;
    res.validations.forEach(item => errMsg += `${item}<br>`);
    return errMsg
  }

  handleSubmit(ev) {
    ev.preventDefault();

    const userData = {
      username: ev.target.username.value,
      password: ev.target.password.value
    }

    api.login(userData).then(res => {
        if (res.success) {
          navigateTo('#/queue')
        } else {
          this.updateState({ error: this.createErrorMessage(res)})
        }
      })
  }

  render() {
    const { error } = this.state;

    return `
      <input name="username" type="text" placeholder="Username" class="input-line">
      <input name="password" type="password" placeholder="Password" class="input-line">
      <div class ="error-message">
        ${error}
      </div>
      <button type="submit" class="btn-login">Log In</button>
      <div class="text-container">
        Have No Account ? 
        <a href="#/signup">Sign Up</a>
      </div>
    `
  }
}

export default LoginForm;
