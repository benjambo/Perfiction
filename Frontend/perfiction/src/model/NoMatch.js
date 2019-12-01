import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import { Nav, Navbar } from 'react-bootstrap';
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

export class NoMatch extends Component {
  render() {
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
                <form className="forms" onSubmit={this.handleSubmit} noValidate>
                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                      className=""
                      placeholder="Email"
                      type="email"
                      name="email"
                      noValidate
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                      className=""
                      placeholder="Password"
                      type="password"
                      name="password"
                      noValidate
                      onChange={this.handleChange}
                    />
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
