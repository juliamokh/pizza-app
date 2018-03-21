class Api {
  constructor() {
    this.basePath = 'https://pizza-tele.ga/api/v1/';
  }

  get token() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : null
  }

  set token(requestToken) {
    return localStorage.setItem('token', requestToken)
  }

  isTokenExpire() {
    return false
  }

  isAuthorized() {
    if(this.token && !this.isTokenExpire()) {
      return true
    }
  }

  createPath(url) {
    return `${this.basePath}${url}`
  }

  createHeaders() {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    if (this.token) { 
      headers.append('authorization', `Bearer ${this.token}`)
    }
    return headers
  }

  makeRequest(url, options) {
    const path = this.createPath(url);

    const requestOptions = {
      method: options.method || 'GET',
      headers: this.createHeaders(),
      body: JSON.stringify(options.payload)
    }

    return fetch(path, requestOptions).then(res => {
        if (!res.ok) console.log(`Error requesting ${path}`);
        console.log(res);
        return res.json()
      })
  }

  get(url, payload) {
    return this.makeRequest(url, {
      method: 'GET',
      payload
    })
  }

  post(url, payload) {
    return this.makeRequest(url, {
      method: 'POST',
      payload
    })
  }

  getStoresList() {
    return this.get('store/list')
  }

  register(payload) {
    return this.post('user/create', payload)
  }

  login(payload) {
    return this.post('user/login', payload).then(res => {
      if (!res.success) {
        throw new Error(res.error)
      } else {
        this.token = res.token;
      }
      return res
    })
  }

  getUserData() {
    return this.get('user/my_info')
  }

  logout() {
    return localStorage.removeItem('token')
  }
}

export const api = new Api();
