import React from 'react';

/**
 *
 * @param {array} param0
 * @returns CartItem
 */
const CartItem = ({ cart }) => {
  return (
    <div>
      {cart.name} {cart.price} €
    </div>
  );
};

export default CartItem;
