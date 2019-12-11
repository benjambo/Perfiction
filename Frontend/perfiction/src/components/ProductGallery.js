import React from 'react';
import Products from './Products';
import { CartProvider } from './CartContext';
import data from '../products.json';
import '../App.css';
import ShoppingCartModal from './ShoppingCartModal'

const ProductGallery = () =>{

//json data as props
//render every product using json data
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
