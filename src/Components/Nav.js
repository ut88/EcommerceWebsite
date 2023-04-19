import { Button, Navbar,Container, Stack } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

// import Cart from './Cart';

const Navigator = (props) => {
console.log(props);
 
    return (<Stack>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
        <Container className='justify-content-center'>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
            <Nav >
              <Nav.Link href="#deets" variant="white"><h4>Home</h4></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              <h4> Store</h4> 
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              <h4>   About</h4> 
              </Nav.Link>
            </Nav>
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