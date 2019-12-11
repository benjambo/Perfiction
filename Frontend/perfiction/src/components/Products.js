import React, {useContext} from 'react'
import { CartContext } from './CartContext';
//import {Image, Transformation} from 'cloudinary-react';

const Products = ({prod}) =>{
    const [cart, setCart] = useContext(CartContext);

    //get shopping list
    var shoppingList=JSON.parse(localStorage.getItem("shoppingList"))

    //create new list if null
    if(shoppingList==null){
        var shoppingList = [];
    }

    const addToCart = () =>{
        const tshirt = { name: prod.name, price: prod.price, id: prod.id};
        setCart(currentState => [...currentState, tshirt]);  
        
        shoppingList.push(tshirt);
        //put to local storage
        localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
    }

    return(
        <div>
            <h1>{prod.name}</h1>
            {/*
            <Image cloudName="yepu" publicId="sample.jpg">
            <Transformation height="150" width="150" />
            </Image>
            */}
            <img src={prod.image} alt={prod.description}></img>
            <p>{prod.description} {prod.price}€</p>
            <button onClick={addToCart}>add to cart</button>
        </div>
    )
   
}

export default Products