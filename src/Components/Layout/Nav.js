import { Button, Navbar,Container, Stack } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
// import Cart from './Cart';

const Navigator = (props) => {
console.log(props);
 
    return (<Stack>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
        <Container className='justify-content-center'>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
      
              <NavLink to="/Home" ><h4>Home</h4></NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink to="/AvailableProduct">
              <h4> Store</h4> 
              </NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink  to="/About">
              <h4>   About</h4> 
              </NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink  to="/ContactUs">
              <h4>Contact Us</h4> 
              </NavLink>
          {/* </Navbar.Collapse> */}
        </Container>
        <Button className='justify-content-end' onClick={props.show1} >Cart</Button>
      </Navbar>
      <Navbar className='bg-secondary  variant-primary justify-content-center  border '>
       <Navbar.Brand><h1>The Generics</h1></Navbar.Brand>
      </Navbar>
      </Stack>
    )
}

export default Navigator;