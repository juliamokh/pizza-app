import Component from '../../blackbox';
import { bindAll } from '../../blackbox/utils';
import { api } from '../../Api';
import './signup.css';

class SignupForm extends Component {
  constructor() {
    super();

    this.state = {
      error: ''
    }

    this.host = document.createElement('form');
    this.host.classList.add('signup-form');

    this.select = document.createElement('select');
    this.select.name = 'store_id';
    this.select.classList.add('input-line');

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
      password: ev.target.password.value,
      password_repeat: ev.target.password_repeat.value,
      email: ev.target.email.value,
      store_id: +ev.target.store_id.value,
      store_password: ev.target.store_password.value
    }

    api.register(userData).then(res => {
        if (res.success) {
          this.renderSuccessMessage();
        } else {
          this.updateState({ error: this.createErrorMessage(res) })
        }
      })
  }

  onBeforeUpdate() {
    api.getStoresList().then(res => {
      res.forEach(el => this.renderSelectOptions(el))
    })
  }

  renderSelectOptions(option) {
    this.insertChildren(
      `<option value="${option.id}" ${option.name === 'mokh' ? 'selected' : ''}>${option.name}</option>`,
      this.select
    )
  }

  renderSuccessMessage() {
    const success = `Registration successful, please <a href="#/login">log in</a>`;
    this.clearChildren(this.host)
    return this.insertChildren(`
      <div class ="success-message">
        <h2>Registration successful</h2>
        <a href="#/login" class="btn btn-login">
          <i class="fas fa-sign-in-alt"></i>
          Log in
        </a>
      </div>
    `,
    this.host)
  }

  render() {
    const { error } = this.state;

    return [`
      <input type="email" name="email" placeholder="Email" class="input-line">
      <input type="text" name="username" placeholder="Username" class="input-line">
      <input type="password" name="password" placeholder="Password" class="input-line">
      <input type="password" name="password_repeat" placeholder="Password repeat" class="input-line">
      `,
      this.select,
      `
      <input type="password" name="store_password" placeholder="Store's password" class="input-line">
      <div class ="error-message">
        ${error}
      </div>
      <button type="submit" class="btn-login">Sign Up</button>
      <div class="text-container">
        Already Have An Account ? 
        <a href="#/login">Log in</a>
      </div>
    `]
  }
}

export default SignupForm;
