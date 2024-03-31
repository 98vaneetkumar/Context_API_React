import React,{useContext} from "react";
import {CartContext} from "../context/CartContext"
export const Cart=()=>{
    const cart=useContext(CartContext)
    let total=cart&&cart.item.reduce((a,b)=>a+parseInt(b.price),0)
    return(
        <>
        <h1>Cart</h1>
        {cart&&cart.item.map((item)=>
            <li>{item.name} - ${item.price}</li>
        )}
        <h5>Total Price -- {total}</h5>
        </>
    )
}