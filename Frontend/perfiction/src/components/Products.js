import React, { useContext } from 'react';
import { CartContext } from './CartContext';
//import {Image, Transformation} from 'cloudinary-react';

/**
 *
 * @param {Json files} param0
 * @returns product with image link
 */
const Products = ({ prod }) => {
  const [cart, setCart] = useContext(CartContext);

  if (!cart) {
    console.log('No cart');
  }
  //get shopping list
  var shoppingList = JSON.parse(localStorage.getItem('shoppingList'));

  //create new list if null
  if (shoppingList == null) {
    shoppingList = [];
  }

  /**
   * add product info to local storage and cart array
   */
  const addToCart = () => {
    const coffee = { name: prod.name, price: prod.price, id: prod.id };
    setCart(currentState => [...currentState, coffee]);

    shoppingList.push(coffee);
    //put to local storage
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  };

  return (
    <div>
      <h1>{prod.name}</h1>
      {/*
            <Image cloudName="yepu" publicId="sample.jpg">
            <Transformation height="150" width="150" />
            </Image>
            */}
      <img src={prod.image} alt={prod.description}></img>
      <p>
        {prod.description} {prod.price}€
      </p>
      <button onClick={addToCart}>add to cart</button>
    </div>
  );
};

export default Products;
