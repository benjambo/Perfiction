import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import { Nav, Navbar } from 'react-bootstrap';
import auth from '../components/auth';
import axios from 'axios';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: rgba(0,0,0,0.9);
    }

    .navbar-default, .collapsed {
        border-color: white;
        background-color: white;
      }
      
      .navbar-default, .toggle{
       background-color: white;
      }

    .navbar-brand, .navbar-nav .nav-link  {
        color white;
        margin: 2vh 2vw 2vh 2vw;

        &:hover {
            color: #690505;
        }
    }

    .nav-item {
      color white;
      margin: 2vh 2vw 2vh 2vw;
    }
    `;

// Function to validate if input is acceptable
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // Validate form if it isn't filled out
  Object.values(rest).forEach(val => {
    val === '' && (valid = false);
  });

  return valid;
};

// An email validation code
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export class SignIn extends Component {
  constructor() {
    super();

    // The state of the form to begin with
    this.state = {
      email: '',
      password: '',
      formErrors: {
        email: '',
        password: ''
      }
    };
  }

  // The submit handler
  handleSubmit = event => {
    event.preventDefault();

    // If the format is valid print this to Console
    if (formValid(this.state)) {
      const oldUser = {
        email: this.state.email,
        password: this.state.password
      };

      axios
        .post('/', oldUser)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });

      /*auth.login(() => {
        this.props.history.push('/home');
      });*/
    } else {
      console.log('INVALID FORM - ERROR MESSAGE');
    }
  };

  // The Change handler
  handleChange = event => {
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    // Swith statement for form input rules
    switch (name) {
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Invald email address';
        break;

      case 'password':
        formErrors.password =
          value.length < 6 ? 'minimum 6 characters required' : '';
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    // Initializing formErrors property for it to be able to be used
    const { email, password, formErrors } = this.state;

    return (
      <Styles>
        <Navbar expand="lg" fixed="top">
          <Navbar.Brand href="/">Perfiction</Navbar.Brand>
          <Navbar.Toggle area-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>Welcome to Perfiction</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 1250 }}
        >
          {props => (
            <div style={props} className="wrapper">
              <div className="form-wrapper">
                <h1>Sign In</h1>
                <form action="/" className="forms" onSubmit={this.handleSubmit}>
                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                      className={formErrors.email.length > 0 ? 'error' : null}
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                    {formErrors.email.length > 0 && (
                      <span className="errorMessage">{formErrors.email}</span>
                    )}
                  </div>
                  <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                      className={
                        formErrors.password.length > 0 ? 'error' : null
                      }
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    {formErrors.password.length > 0 && (
                      <span className="errorMessage">
                        {formErrors.password}
                      </span>
                    )}
                  </div>
                  <div className="createAccount">
                    <button type="submit" href="/">
                      Login
                    </button>
                    <a href="/signup">
                      <small>Don't Have an Account? Register Here!</small>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Spring>
      </Styles>
    );
  }
}
