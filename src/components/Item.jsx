import React,{useContext} from "react";
import {CartContext} from "../context/CartContext"
export const Item=(props)=>{
    const cart=useContext(CartContext)
    console.log("cart",cart)
    return(
        <>
        <div>Item name is: {props.name}</div>
        <div>Item price: ${props.price}</div>
        <button onClick={()=>cart.setItem([...cart.item,{name:props.name,price:props.price}])}>Add to cart</button>
        </>
    )
}