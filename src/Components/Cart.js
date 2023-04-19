import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { CloseButton } from 'react-bootstrap';
const cartElements = [

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

quantity: 2,

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

quantity: 3,

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

quantity: 1,

}

] 
const Cart=(props)=>{
  
  console.log("hello")
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
      <Row>
        <Col><span><Image src={cartElements[0].imageUrl} thumbnail />&nbsp;{cartElements[0].title}</span> </Col>
        <Col>{cartElements[0].price}</Col>
        <Col>{cartElements[0].quantity} &nbsp;
        <Button variant="danger">Remove</Button></Col>
      </Row><hr />
      <Row>
        <Col><span><Image src={cartElements[1].imageUrl} thumbnail />&nbsp;{cartElements[1].title}</span> </Col>
        <Col>{cartElements[1].price}</Col>
        <Col>{cartElements[1].quantity} &nbsp;
        <Button variant="danger">Remove</Button></Col>
      </Row><hr />
      <Row>
        <Col><span><Image src={cartElements[2].imageUrl} thumbnail />&nbsp;{cartElements[2].title}</span> </Col>
        <Col>{cartElements[2].price}</Col>
        <Col>{cartElements[2].quantity} &nbsp;
        <Button variant="danger">Remove</Button></Col>
      </Row><hr />
    </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button className='justify-content-center'>
              purchase
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Cart;