import React, {useState} from 'react';

export const CartContext = React.createContext([]);

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

export const CartProvider = (props) => {
  const [cart, setCart] = useState(shoppingCart());

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  )
}