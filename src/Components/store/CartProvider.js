import CartContext from "./CartContext";
import { useState } from "react";

const CartProvider = props=>{
    const[data,setData]=useState([

        {
            id:'m1',
            key:'m1',
    
            title: 'Colors',
    
            price: 100,
    
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
            subHeading:'Album 1',
    
            review:"Awesome",
            Qty:0
    
        },
    
        {
            id:'m2',
            
            key:'m2',
            title: 'Black and white Colors',
    
            price: 50,
    
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
            subHeading:'Album 2',
    
            review:"Good",

            Qty:0
    
        },
    
        {
            id:'m3',
            key:'m3',
            title: 'Yellow and Black Colors',
    
            price: 70,
    
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
            subHeading:'Album 3',
    
            review:"Best",

            Qty:0
    
        },
    
        {
            id:'m4',
            key:'m4',
            title: 'Blue Color',
    
            price: 100,
    
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
            subHeading:'Album 4',
    
            review:"Top-Notch",

            Qty:0
    
        }
      
    ])

    async function addItemToCartHandler(id) {{
      var addItem=data.filter((item)=>{
        if(item.id===(id)){
          return item.Qty=Number(item.Qty)+1
        }
        return item
      })}
      settingLocal(addItem);
      setData(addItem)
    }
    function settingLocal(d){
        localStorage.setItem("cartItem",JSON.stringify(d))
    }
   async function removeItemFromCartHandler(id) {{
      var addItem=JSON.parse(localStorage.getItem("cartItem")).map((item)=>{
        if(item.id===id && item.Qty>0){
          item.Qty=Number(item.Qty)-1
        }
        return item
      })}
      settingLocal(addItem);
      setData(addItem)
    }
     
    let intialToken=localStorage.getItem('token');
    const [token,setToken]=useState(intialToken)
    const userIsLoggedIn=!!token;
    // console.log(userIsLoggedIn)

    const loginHandler=(token)=>{
       setToken(token);
       localStorage.setItem('token',token);

    }

    const logoutHandler=()=>{
        setToken(null)
        localStorage.removeItem('token');
    }
  
    const startDataHandler=(val)=>{
        console.log(val)
      setData([
        {
            id:'m1',
            key:'m1',
            title: 'Colors',
    
            price: 100,
    
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
            subHeading:'Album 1',
    
            review:"Awesome",
            Qty:val.q1,
    
        },
    
        {
            id:'m2',
            key:'m2',
            title: 'Black and white Colors',
    
            price: 50,
    
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
            subHeading:'Album 2',
    
            review:"Good",

            Qty:val.q2
    
        },
    
        {
            id:'m3',
            key:'m3',
            title: 'Yellow and Black Colors',
    
            price: 70,
    
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
            subHeading:'Album 3',
    
            review:"Best",

            Qty:val.q3
    
        },
    
        {
            id:'m4',
            key:'m4',
            title: 'Blue Color',
    
            price: 100,
    
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
            subHeading:'Album 4',
    
            review:"Top-Notch",

            Qty:val.q4
    
        }
    ]);
    localStorage.setItem("cartItem",JSON.stringify(data))
        }

     const cartContext1 ={
        items:data,
        addItemToCart:addItemToCartHandler,
        removeItemFromCart:removeItemFromCartHandler,
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
        startData:startDataHandler
     }

    return(<CartContext.Provider value={cartContext1}>
        {props.children}
        </CartContext.Provider>)
}

export default CartProvider;