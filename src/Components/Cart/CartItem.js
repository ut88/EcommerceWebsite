// import Cart from "./Cart";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container, Row } from "react-bootstrap";
import { Modal } from 'react-bootstrap';
const CartItem= (props)=>{
  console.log("CartItem")
   return(
   <Modal show={props.val} onHide={!props.val}><h1>hello</h1>
   <Container>
   <Row>
    <Col><span><Image src={props.imageUrl} thumbnail />&nbsp;{props.title}</span> </Col>
    <Col>{props.price}</Col>
    <Col>{props.quantity} &nbsp;
    <Button variant="danger">Remove</Button></Col>
  </Row>
  </Container><hr />
  </Modal>)
}

export default CartItem;