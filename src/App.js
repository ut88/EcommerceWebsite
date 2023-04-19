import { Stack } from "react-bootstrap";
import Navigator from "./Components/Nav"; 
import Images from "./Components/Images"
import { useState } from 'react';
import Cart from "./Components/Cart"
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
console.log(preshow);
  return (
    <Stack gap={4}>
   <Cart show3={preshow} show2={handleClose} />
    <Navigator show1={handleShow} />
    <Images/>
    </Stack>
  );
}

export default App;
