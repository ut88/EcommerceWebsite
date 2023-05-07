import { Button, Navbar, Container, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CartContext from '../store/CartContext';
import { useContext } from 'react';
const Navigator = (props) => {
  const authCtx = useContext(CartContext)
  const numberOfCartItems = (JSON.parse(localStorage.getItem("cartItem")) === null) ? 0 : JSON.parse(localStorage.getItem("cartItem")).reduce((curNumber, item) => {
    return curNumber + item.Qty
  }, 0);

  const removeHandler = async () => {
    const obj = {
      q1: authCtx.items[0].Qty,
      q2: authCtx.items[1].Qty,
      q3: authCtx.items[2].Qty,
      q4: authCtx.items[3].Qty
    }
    const response = await fetch(`https://react-practice-38954-default-rtdb.firebaseio.com/${localStorage.getItem('email')}.json`, {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
    let result = await response.json();
    console.log(result)
    localStorage.removeItem('email')
    authCtx.logout();
  }

  return (<Stack>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
      <Container className='justify-content-center'>
        {authCtx.isLoggedIn && <NavLink to="/Home" ><h4>Home</h4></NavLink>}&nbsp;&nbsp;&nbsp;
        {authCtx.isLoggedIn && <NavLink to="/AvailableProduct">
          <h4> Store</h4>
        </NavLink>}&nbsp;&nbsp;&nbsp;
        {authCtx.isLoggedIn && <NavLink to="/About">
          <h4>   About</h4>
        </NavLink>}&nbsp;&nbsp;&nbsp;
        {!authCtx.isLoggedIn && <NavLink to="/Login">
          <h4>Login</h4>
        </NavLink>}
        {authCtx.isLoggedIn && <Button className='justify-content-end' onClick={props.show1} >Cart({numberOfCartItems})</Button>}
      </Container>
      {authCtx.isLoggedIn && <Button onClick={removeHandler} variant='danger'>Logout</Button>}
    </Navbar>
    <Navbar className='bg-secondary  variant-primary justify-content-center  border '>
      <Navbar.Brand><h1>The Generics</h1></Navbar.Brand>
    </Navbar>
  </Stack>
  )
}
// ({numberOfCartItems})
export default Navigator;