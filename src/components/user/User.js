import Component from '../../blackbox';
import { api } from '../../Api';
import './user.css';

class User extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      uuid: '',
      email: '',
      createdAt: '',
      lastLogin: ''
    }

    this.host.classList.add('user-info')
  }

  onBeforeUpdate() {
    api.getUserData().then(res => {
      this.updateState({
        username: res.username,
        uuid: res.uuid,
        email: res.email,
        createdAt: res.created_at,
        lastLogin: res.last_login
      })
    })
  }

  render() {
    const { username, uuid, email, createdAt, lastLogin } = this.state;

    return `
      <h2>User info</h2>
      <p>username: ${username}</p>
      <p>uuid: ${uuid}</p>
      <p>email: ${email}</p>
      <p>created at: ${createdAt}</p>
      <p>last login: ${lastLogin}</p>
      <a href="#/logout" class="btn btn-logout">
        <i class="fas fa-sign-out-alt"></i>
        Log out
      </a>
    `
  }
}

export default User;
