import { Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useContext } from "react";
import CartContext from "../../store/CartContext"
import "./ImageItem.css"
import { Link } from "react-router-dom"
const ImageItem = (props) => {

    const details = useContext(CartContext);
    function addItemToCart(e) {
      details.addItemToCart(e.target.id);
    }

  
    return (<>
        <Container>
            <Row >
                <Col className=" text-center" ><h1>{props.subHeading}</h1></Col>
            </Row><br />
            <Row>
                <Col className=" text-center">
                    <h3>{props.title}</h3>
                    <div className="geeks"><Image src={props.imageUrl} thumbnail />  </div>

                </Col>
            </Row>
            <Row className="text-center">
            <h1>{`$${props.price}`} </h1> <div><Link to="/product" state={{
                items:{

id: props.id,

title: props.title,

price: props.price,

imageUrl: props.imageUrl,

subHeading: props.subHeading,

review:props.review,
Qty:props.Qty

}}} >See Details</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="primary" onClick={addItemToCart} size="lg" id={props.id}>Add To Cart</Button></div>
            </Row>
        </Container></>)
}

export default ImageItem;
