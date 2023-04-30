import  React from "react";

const CartContext=React.createContext({
    items:[],
    openCart:false,
    showCart:(item)=>{},
    addItemToCart:(id)=>{},
    removeItemFromCart:(id)=>{},
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}

});

export default CartContext;