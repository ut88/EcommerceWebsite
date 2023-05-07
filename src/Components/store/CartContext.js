import  React from "react";

const CartContext=React.createContext({
    items:[],
    openCart:false,
    showCart:(item)=>{},
    addItemToCart:(id)=>{},
    removeItemFromCart:(id)=>{},
    token:'',
    isLoggedIn:null,
    login:(token)=>{},
    logout:()=>{}

});

export default CartContext;