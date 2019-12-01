import React from 'react';
import { Jumbotron } from '../components/Jumbotron';
import { NavigationBar } from '../components/NavigationBar';

export const Catalog = () => {
  return (
    <div>
      <NavigationBar />
      <Jumbotron />
      <div className="paragraph">
        <h2>CATALOG PAGE</h2>
        <h3>Product Images</h3>
        <p>
          Most products should have photos that show the product in use, if
          practical, and in an appealing light. Users should have the option to
          view the image from the top, the side, facing front, and more. All
          images should be available in larger sizes, to show the product in
          detail. And some visual element should indicate the size of the
          product.
        </p>
        <h3>Product Details</h3>
        <p>
          A picture is great, but, visitors also want to read about your
          products. Give them as much detailed information as you can. Maybe
          everyone won’t read all of it, but your most serious potential
          customers will.
        </p>
      </div>
    </div>
  );
};
