import { Stack } from "react-bootstrap";
import Navigator from "./Components/Layout/Nav"; 
import Images from "./Components/RouterComponents/ImageItem/Images"
import { useState } from 'react';
import Cart from "./Components/Cart/Cart"
import CartProvider from "./Components/store/CartProvider";
import Footer from "./Components/Layout/footer"
import {Route,Switch} from "react-router-dom";
import About from "./Components/RouterComponents/About";
import Home from "./Components/RouterComponents/ImageItem/Home";
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
    <Switch>
      <Route exact path="/Home"  component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Images" component={Images}/>
    </Switch>
    {/* <Images/> */}
    <Footer />
    </Stack>
    </CartProvider>
  );
}

export default App;
