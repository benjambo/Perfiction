import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import coffeeShopImage from '../assets/coffee.jpg';

const Styles = styled.div`
    .jumbotron {
        background: url(${coffeeShopImage}) no-repeat ;
        background-size: cover;
        color: white;
        height: 600px;
        z-index: -2;
    }

    .overlay {
        text-color: white;
        text-align: center;
        margin 19vh 0 0 0;
        z-index: 0;
    }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay">
        <Container>
          <h2>Welcome To Perfiction</h2>
          <p>Everything start with a cup of Coffee</p>
        </Container>
      </div>
    </Jumbo>
  </Styles>
);
