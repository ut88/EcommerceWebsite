import { Stack } from "react-bootstrap";
import Navigator from "./Components/Layout/Nav"; 
import Images from "./Components/RouterComponents/ImageItem/Images"
import { useState } from 'react';
import Cart from "./Components/Cart/Cart"
import CartProvider from "./Components/store/CartProvider";
import Footer from "./Components/Layout/footer"
import {Route,Switch} from "react-router-dom";
import About from "./Components/RouterComponents/About";
import Home from "./Components/RouterComponents/Home";
import ContactUs from "./Components/RouterComponents/ContactUs";
import Product from "./Components/RouterComponents/Product";
import {Routes} from "react-router-dom";
// import ThemeProvider from 'react-bootstrap/ThemeProvider'
// import Navigator1 from "./Components/Nav2";
const App=()=>{
  const [preshow, setShow] = useState(false);

  const handleShow = () =>{ 
    console.log("hi");
    setShow(true);
  }
  const handleClose = () =>{
    setShow(false);
}
  return (
    <CartProvider>
    <Stack gap={4}>
    <Cart show3={preshow} show2={handleClose} />
    <Navigator show1={handleShow} />
    
    <Routes>
      <Route exact path="/Home"  element={<Home />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/AvailableProduct" element={<Images />}/>
      <Route exact path ="/ContactUs"  element={<ContactUs />}/>
      <Route exact path ="/product"  element={<Product />}/>
      </Routes>
    
    {/* <Images/> */}
    <Footer />
    </Stack>
    </CartProvider>
  );
}

export default App;
