import { Button, } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useContext } from "react";
import CartContext from "../../store/CartContext"

const ImageItem= (props)=>{

    const cartCtx=useContext(CartContext);

    const pk=()=>{
        // console.log(cartCtx)
        cartCtx.setCartContext1({

            key:props.id,

            title: props.title,
    
            price:props.price,
    
            imageUrl: props.imageUrl,

            quantity:props.quantity
    
        })  
    }
    console.log(cartCtx)
  return(<>
       <Container  >
             <Row >
                 <Col className=" text-center" ><h1>{props.subHeading}</h1></Col>
             </Row><br />
             <Row>
                 <Col className=" text-center">
                 <h3>{props.title}</h3> 
                 <Image src={props.imageUrl} thumbnail />   
                 </Col>
             </Row>
             <Row  className="text-center">
                 <Col className="text-end">{`$${props.price}`} </Col>
                 <Col className="text-start" ><Button variant="primary" onClick={pk} >Add To Cart</Button></Col>
                 </Row>
         </Container></>)
}

export default ImageItem
