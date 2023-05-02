import { Button, Navbar,Container, Stack } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
// import Cart from './Cart';
import CartContext from '../store/CartContext';
import { useContext } from 'react';
const Navigator = (props) => {

  const authCtx=useContext(CartContext)
  const removeHandler=()=>{
     authCtx.logout();
     localStorage.removeItem('email')
  }
 
    return (<Stack>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
        <Container className='justify-content-center'>
        {authCtx.isLoggedIn &&<NavLink to="/Home" ><h4>Home</h4></NavLink>}&nbsp;&nbsp;&nbsp;
        {authCtx.isLoggedIn && <NavLink to="/AvailableProduct">
              <h4> Store</h4> 
              </NavLink>}&nbsp;&nbsp;&nbsp;
              {authCtx.isLoggedIn &&<NavLink  to="/About">
              <h4>   About</h4> 
              </NavLink>}&nbsp;&nbsp;&nbsp;
              {!authCtx.isLoggedIn && <NavLink  to="/ContactUs">
              <h4>Login</h4> 
              </NavLink>}
                {authCtx.isLoggedIn && <Button onClick={removeHandler} variant='danger'>Logout</Button>}
          {/* </Navbar.Collapse> */}
        </Container>
        {authCtx.isLoggedIn && <Button className='justify-content-end' onClick={props.show1} >Cart</Button>}
      </Navbar>
      <Navbar className='bg-secondary  variant-primary justify-content-center  border '>
       <Navbar.Brand><h1>The Generics</h1></Navbar.Brand>
      </Navbar>
      </Stack>
    )
}

export default Navigator;