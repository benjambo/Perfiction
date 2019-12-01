import React from 'react';
import { Jumbotron } from '../components/Jumbotron';
import { NavigationBar } from '../components/NavigationBar';

export const About = () => {
  return (
    <div>
      <NavigationBar />
      <Jumbotron />
      <div className="paragraph">
        <h3>ABOUT US</h3>
        <p>
          Hi! We are Benjamin Bowo and Jere Saarelma, two individuals with a
          passion for creativity — creativity makes us happy. We truly believe
          in the transformative power of illustration and design and their
          ability to simplify communications, elevate experiences, engage and
          inspire people everywhere. Good design and good relationships come
          from collaboration. We're excited to start a visual dialogue, learn
          about you, and make something beautiful together.
        </p>
      </div>
    </div>
  );
};
