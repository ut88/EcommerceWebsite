import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Image from 'react-bootstrap/Image';
import { CloseButton } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import CartItem from './CartItem';
const Cart=(props)=>{
  
   const items=useContext(CartContext);console.log(items+"hiiiiiiiiiii")
   const itemList=items.CartContext1.map((k)=>(<CartItem image={k.imageUrl} price={k.price} quantity={1} title={k.title} id={k.key} key={k.key} val={props.show3}/>))
    return (
      <>
        <Modal show={props.show3} onHide={!props.show3}>
          <Modal.Header ><CloseButton onClick={props.show2}/></Modal.Header>
            <Modal.Title><h1 className='text-center'>Cart</h1></Modal.Title>
          <Modal.Body>
          <Container>
          <Row>
        <Col><h4>Item</h4></Col>
        <Col><h4>Price</h4></Col>
        <Col><h4>Quantity</h4></Col>
      </Row><hr />
     <Row><h1>helloo</h1>{itemList}</Row> 
    </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button className='justify-content-start'>
              purchase
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Cart;