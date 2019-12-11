import React, {useState, useContext} from 'react';
import {CartContext} from './CartContext';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartItem from './CartItem'

/**
 * 
 * 
 * @returns Popup window when button is clicked
 */
const MyVerticallyCenteredModal= () => {
    const [show, setShow] = useState(false);
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

    //handel modal opening and closing
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //get items from local storage
    var shoppingList=JSON.parse(localStorage.getItem("shoppingList"))

    //empty items from local storage
    const removeAll = () =>{
        localStorage.clear();
        setCart([]);
        handleClose();
      }

      /**
       * create items for pop up window if shopping cart is not empty
       * @returns CartItem products
       */
    const Items = () =>{
      //if list is null return shopping cart is empty
    if(shoppingList == null){
      return(
        <div>Shopping cart is empty</div>
      )
    }else{
        //if list has items return items as CartItems
    const products = () => shoppingList.map((shoppingList,i) => <CartItem key={i} cart={shoppingList}></CartItem>)
        return(
          <div>{products()}</div>
        )
   }
  }

  return (
    <div>
      <Button onClick={handleShow}>
       Shopping Cart: {cart.length}
      </Button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            Items in cart: {cart.length}
            <br/>
            <br/>
            {Items()}
            <br/>
            Total Price: {totalPrice}€
            </div>
            </Modal.Body>
        <Modal.Footer>
        <Button onClick={removeAll}>Empty Cart</Button>
            <Button>Checkout</Button>
          <Button onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
  }

  export default MyVerticallyCenteredModal;