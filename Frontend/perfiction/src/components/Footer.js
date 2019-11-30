import React from 'react';
import '../App.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="column">
        <li>
          <strong className="otsikot">Perfiction</strong>
        </li>
        <li>Roast And Coffee Shop</li>
        <li>Lönnrotinkatu 32</li>
        <li>00180</li>
        <li>HELSINKI</li>
        <li>
          <a href="https://www.facebook.com/groups/2107970076086665/">
            Facebook / Cup o'Roast
          </a>
        </li>
      </ul>
      <ul className="column">
        <li>
          <strong className="otsikot">INFO</strong>
        </li>
        <li>info@cuporoast.cof</li>
        <li>+358411234567</li>
        <li>Availability on weekdays:</li>
        <li>9:00 - 16:00</li>
      </ul>
      <ul className="column">
        <li>
          <strong className="otsikot">OPENING HOURS</strong>
        </li>
        <li>Coffee shop</li>
        <li>open:</li>
        <li>Mon - Thu 6:00 - 18:00</li>
        <li>Friday 6:00 - 21:00</li>
        <li>Sat - Sun 10:00 - 20:00</li>
      </ul>
    </footer>
  );
};
