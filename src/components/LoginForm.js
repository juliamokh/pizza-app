import Component from '../blackbox';

class LoginForm extends Component {
  constructor() {
    super();
    this.host.classList.add('page-main');
  }

  render() {
    return `
      <div>Login Form</div>
      <div>
        Have No Account ? 
        <a href="#/signup">Sign Up</a>
      </div>
    `
  }
};

export default LoginForm;
