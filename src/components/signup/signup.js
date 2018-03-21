import Component from '../../blackbox';
import { bindAll } from '../../blackbox/utils';
import { api } from '../../Api';
import './signup.css';

class SignupForm extends Component {
  constructor() {
    super();

    this.state = {
      success: '',
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
        if(res.success) {
          this.updateState({ success: `Registration successful, please <a href="#/login">Log in</a>` })
        } else {
          this.updateState({ error: res.validations })
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

  render() {
    const { success, error } = this.state;

    return [`
      <input type="email" name="email" placeholder="Email" class="input-line">
      <input type="text" name="username" placeholder="Username" class="input-line">
      <input type="password" name="password" placeholder="Password" class="input-line">
      <input type="password" name="password_repeat" placeholder="Password repeat" class="input-line">
      `,
      this.select,
      `
      <input type="password" name="store_password" placeholder="Store's password" class="input-line">
      <div class ="success-message">
        ${success}
      </div>
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
