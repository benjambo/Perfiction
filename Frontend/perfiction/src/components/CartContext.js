import React, {useState} from 'react';

export const CartContext = React.createContext([]);

/**
 * get shopping cart info from local storage
 * if local storage is empty create empty array
 */
const shoppingCart = () =>{
  var shoppingList=JSON.parse(localStorage.getItem("shoppingList"))

  //if local storage is null return empty array
  //else return items from local storage
  if(shoppingList == null){
    return []
  }else{
    return shoppingList
  }
}

/**
 * allows all of this components child components to use the same hook
 * @param {*} props 
 */
export const CartProvider = (props) => {
  const [cart, setCart] = useState(shoppingCart());

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  )
}