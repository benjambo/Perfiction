class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    console.log('---LOGIN---', this.authenticated);
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    console.log('---LOGOUT---', this.authenticated);
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
