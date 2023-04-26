import { Button, } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useContext } from "react";
import CartContext from "../../store/CartContext"

const ImageItem= (props)=>{

    const cartCtx=useContext(CartContext);

    const pk=(props)=>{
        
        cartCtx.addItem({

            id:props.id,

            title: props.title,
    
            price:props.price,
    
            imageUrl: props.imageUrl,

            subHeading:props.subHeading,

            // quantity:props.quantity
    
        })  
        // console.log(cartCtx.items);
    }
    // console.log(cartCtx.items)
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
