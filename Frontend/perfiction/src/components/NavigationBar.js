import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import auth from './auth';

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

    .navbar-light .navbar-nav .nav-link {
      color: white;

      &:hover {
            color: #690505;
        }
    }

    .navbar-light .navbar-brand {
      color: white;

      &:hover {
            color: #690505;
        }
    }
  
  `;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" fixed="top">
      <Navbar.Brand href="/home">Perfiction</Navbar.Brand>
      <Navbar.Toggle area-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/catalog">Catalog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                auth.logout(() => {
                  this.props.history.push('/');
                });
              }}
              className="logout"
              href="/"
            >
              Logout
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-dark">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
