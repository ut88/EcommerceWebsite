import { Stack } from "react-bootstrap";
import Navigator from "./Components/Layout/Nav"; 
import Images from "./Components/RouterComponents/ImageItem/Images"
import { useContext, useState } from 'react';
import Cart from "./Components/Cart/Cart"
import CartContext from "./Components/store/CartContext";
import Footer from "./Components/Layout/footer"
import {Route} from "react-router-dom";
import About from "./Components/RouterComponents/About";
import Home from "./Components/RouterComponents/Home";
import Login from "./Components/RouterComponents/ContactUs";
import Product from "./Components/RouterComponents/Product";
import {Routes} from "react-router-dom";
const App=()=>{
  const [preshow, setShow] = useState(false);
  const authCtx =  useContext(CartContext)
  const handleShow = () =>{ 
    setShow(true);
  }
  const handleClose = () =>{
    setShow(false);
}
  return (
    <Stack gap={4}>
    {preshow &&<Cart show2={handleClose} />}
    <Navigator show1={handleShow} />
    {!authCtx.isLoggedIn && <Login />}
    <Routes>
    {authCtx.isLoggedIn && <Route exact path="/Home"  element={<Home />} />}
    {authCtx.isLoggedIn &&  <Route exact path="/About" element={<About />} />}
    {authCtx.isLoggedIn &&  <Route exact path="/AvailableProduct" element={<Images />}/>}
    {authCtx.isLoggedIn && <Route exact path ="/product"  element={<Product />}/>}
     </Routes>
    
    <Footer />
    </Stack>
  );
}

export default App;
