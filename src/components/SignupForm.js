import Component from '../blackbox';

class SignupForm extends Component {
  constructor() {
    super();
    this.host.classList.add('page-main');
  }

  render() {
    return `
    <div>Signup Form</div>
      <div>
      Already Have An Account ? 
      <a href="#/login">Log in</a>
    </div>
    `
  }
};

export default SignupForm;
