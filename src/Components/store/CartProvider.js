import CartContext from "./CartContext";
import { useState } from "react";

const CartProvider = props=>{
     
    const [CartContext1,setCartContext1]=useState([])
    //   CartContext1=[];

    return(<CartContext.Provider value={{CartContext1,setCartContext1}}>
        {props.children}
        </CartContext.Provider>)
}

export default CartProvider;