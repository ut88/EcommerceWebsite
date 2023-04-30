import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CloseButton } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import CartItem from './CartItem';
const Cart=(props)=>{
  
   const cartCtx=useContext(CartContext);console.log(cartCtx.items+"hiiiiiiiiiii")
    
   const cartItemRemoveHandler=(id)=>{
    cartCtx.removeItem(id);
};

const cartItemAddHandler=item=>{
    cartCtx.addItem({...item,amount:1});
}

const cartItem=(
  <ul>
      {cartCtx.items.map((item)=>(<CartItem  id={item.id} key={item.id} 
       name={item.name} amount={item.amount}
        price={item.price}
       onRemove={cartItemRemoveHandler.bind(null,item.id)}
        onAdd={cartItemAddHandler.bind(null,item)}/>))}</ul>) 
   //  const itemList=items.items.map((k)=>(<CartItem image={k.imageUrl} price={k.price} quantity={k.q} title={k.title} id={k.key} key={k.key} val={props.show3}/>))
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
     <Row>{cartItem}</Row> 
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