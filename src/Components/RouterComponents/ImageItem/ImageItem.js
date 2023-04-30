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

    const cartCtx = useContext(CartContext);

    const pk = (props) => {

        cartCtx.addItem({

            id: props.id,

            key:props.key,

            title: props.title,

            price: props.price,

            imageUrl: props.imageUrl,

            subHeading: props.subHeading,

            review:props.review,

        })

    
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

}}} >See Details</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="primary" onClick={pk} size="lg" >Add To Cart</Button></div>
            </Row>
        </Container></>)
}

export default ImageItem;
