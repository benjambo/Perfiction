import React from 'react'

const CartItem = ({cart}) =>{
    console.log("cart")
    console.log(cart)

    const removeItem = () =>{
        
    }

    return(
        <div>
            {cart.name} {cart.price}€ <button onClick={removeItem}>X</button>
        </div>
    )
   
}

export default CartItem