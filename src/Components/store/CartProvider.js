import CartContext from "./CartContext";
import { useState } from "react";

const CartProvider = props=>{
    const[cartOpen,setCartOpen]=useState(false)
    const[data,setData]=useState([

        {
            id:'m1',
    
            title: 'Colors',
    
            price: 100,
    
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
            subHeading:'Album 1',
    
            review:"Awesome",
            Qty:0
    
        },
    
        {
            id:'m2',
    
            title: 'Black and white Colors',
    
            price: 50,
    
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
            subHeading:'Album 2',
    
            review:"Good",

            Qty:0
    
        },
    
        {
            id:'m3',
    
            title: 'Yellow and Black Colors',
    
            price: 70,
    
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
            subHeading:'Album 3',
    
            review:"Best",

            Qty:0
    
        },
    
        {
            id:'m4',
    
            title: 'Blue Color',
    
            price: 100,
    
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
            subHeading:'Album 4',
    
            review:"Top-Notch",

            Qty:0
    
        }
      
    ])
    function showCartHandler(){
        if(cartOpen){
          setCartOpen(false)
        }else{
          setCartOpen(true)
        }
    }
    async function addItemToCartHandler(id) {
      const addItem=data.filter((item)=>{
        if(item.id===(id)){
          return item.Qty=Number(item.Qty)+1
        }
        return item
      })
      const response = await fetch(`https://react-practice-38954-default-rtdb.firebaseio.com/${localStorage.getItem('email')}.json`,{
        method:'POST',
        body:JSON.stringify(addItem),
        headers:{
            "Content-Type": "application/json",
          },
    })
    let result=await response.json();
    console.log(result)
      setData(addItem)
    }
   async function removeItemFromCartHandler(id) {
      const addItem=data.filter((item)=>{
        console.log(item);
        if(item.id===(id) && item.Qty>=0){
         return item.Qty=Number(item.Qty)-1
        }
        
        return item
        
      })
      const response = await fetch(`https://react-practice-38954-default-rtdb.firebaseio.com/${localStorage.getItem('email')}.json`,{
        method:'POST',
        body:JSON.stringify(addItem),
        headers:{
            "Content-Type": "application/json",
          },
    })
      setData(addItem)
    }
     
    let intialToken=localStorage.getItem('token');
    const [token,setToken]=useState(intialToken)
    const userIsLoggedIn=!!token;

    const loginHandler=(token)=>{
       setToken(token);
       localStorage.setItem('token',token);
    }

    const logoutHandler=()=>{
        setToken(null)
        localStorage.removeItem('token');
    }

    const emailHandler=(e)=>{
       localStorage.setItem("email", e.replace("@", "").replace(".", ""))
    }
  
    const startDataHandler=(val)=>{
      setData(val);
    }

     const cartContext1 ={
        items:data,
        showCart:showCartHandler,
        openCart:cartOpen,
        addItemToCart:addItemToCartHandler,
        removeItemFromCart:removeItemFromCartHandler,
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
        email:emailHandler,
        startData:startDataHandler
     }

    return(<CartContext.Provider value={cartContext1}>
        {props.children}
        </CartContext.Provider>)
}

export default CartProvider;