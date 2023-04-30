import CartContext from "./CartContext";
import { useReducer } from "react";
import { useState } from "react";

const defaultCartState={
    items:[],
    totalAmount:0
}

const cartReducer=(state,action)=>{
  if(action.type==='Add'){
    const updatedTotalAmount=state.totalAmount+action.item.price*action.item.amount;
    const existingCartItemIndex =state.items.findIndex(
        (item)=> item.id === action.item.id);
    const existingCartItem =state.items[existingCartItemIndex]
    let updatedItems;
    if(existingCartItem){
        const updatedItem={
            ...existingCartItem,
            amount:existingCartItem.amount +action.item.amount,
        }
        updatedItems=[...state.items];
        updatedItems[existingCartItem]=updatedItem;
    }else{
        updatedItems=state.items.concat(action.item);
    }
    return{
        items:updatedItems,
        totalAmount:updatedTotalAmount
    }
  }
   if(action.type==='Remove'){
     const existingCartItemIndex=state.items.findIndex(
        (item)=>item.id=== action.id);
       const existingItem=state.items[existingCartItemIndex];
       const updatedTotalAmount=state.totalAmount-existingItem.price;
       let updatedItems;
       if(existingItem.amount===1){
          updatedItems=state.items.filter(item=>item.id!==action.id); 
       }else{
         const updatedItem={...existingItem,amount:existingItem.amount-1};
          updatedItems=[...state.item];
          updatedItems[existingCartItemIndex]=updatedItem;
        }
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
   } 
   return defaultCartState;
}

const CartProvider = props=>{
     
    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);
    let intialToken=localStorage.getItem('token');
    setTimeout(()=>{
      intialToken=null;
      localStorage.removeItem('token');
    },300000)
    const [token,setToken]=useState(intialToken)
   
    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type:'Add',item:item})
    };

    const removeItemFromCartHandler=(id)=>{
        dispatchCartAction({type:'Remove',id:id})
    };



    const userIsLoggedIn=!!token;

    const loginHandler=(token)=>{
       setToken(token);
       localStorage.setItem('token',token);
    }

    const logoutHandler=()=>{
        setToken(null)
        localStorage.removeItem('token');
    }

     const cartContext1 ={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
     }

    return(<CartContext.Provider value={cartContext1}>
        {props.children}
        </CartContext.Provider>)
}

export default CartProvider;