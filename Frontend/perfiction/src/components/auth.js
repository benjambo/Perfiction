class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    this.authenticated = true;
    cb();
    //console.log('---LOGIN---', this.authenticated);
  }

  logout(cb) {
    this.authenticated = false;
    cb();
    //console.log('---LOGOUT---', this.authenticated);
  }

  isAuthenticated() {
    //console.log('--Auhtentication--', this.authenticated);
    return this.authenticated;
  }
}

export default new Auth();
