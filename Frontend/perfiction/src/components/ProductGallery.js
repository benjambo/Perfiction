import React from 'react';
import Products from './Products';
import { CartProvider } from './CartContext';
import data from '../products.json';
import '../App.css';
import ShoppingCartModal from './ShoppingCartModal'

/**
 * everything under cartprovider is its child components
 * @returns everything under ShoppingCartModal and Gallery
 */
const ProductGallery = () =>{
/**
 * creates array of products
 * 
 * @param {products.json data} param0 
 * @returns grid container containing every product on json file
 */
const Gallery = ({gallery}) =>{
  const products = () => gallery.map(prod => <Products key={prod.id} prod={prod}></Products>)
      return(
        <div className="grid-container">{products()}</div>
      )
}
  return (
    <CartProvider>
      <div>
        <ShoppingCartModal></ShoppingCartModal>
        <Gallery gallery={data.products}></Gallery>
      </div>
    </CartProvider>
  );  
}

export default ProductGallery;
