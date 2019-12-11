import React from 'react';
import { Jumbotron } from '../components/Jumbotron';
import { NavigationBar } from '../components/NavigationBar';
import ProductGallery from '../components/ProductGallery';

export const Catalog = () => {
  return (
    <div>
      <NavigationBar />
      <Jumbotron />
      <div className="paragraph">
        <h2>CATALOG PAGE</h2>
        <p>Welcome to our catalog page.</p>
        <p>
          Here we have all our products which can be purchased to any
          induvidual.
        </p>
        <p>
          We are proud to introduce you to the finest coffee-related products in
          the whole wide world.
        </p>
        <p>Just add the products to your shopping cart and order.</p>
        <p>After that just enjoy waiting for your package arrival</p>
        <ProductGallery></ProductGallery>
      </div>
    </div>
  );
};
