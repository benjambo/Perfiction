import React from 'react'

/**
 * 
 * @param {array} param0 
 * @returns CartItem
 */
const CartItem = ({cart}) =>{
    const removeItem = () =>{
        
    }
    return(
        <div>
            {cart.name} {cart.price}€ <button onClick={removeItem}>X</button>
        </div>
    )
   
}

export default CartItem