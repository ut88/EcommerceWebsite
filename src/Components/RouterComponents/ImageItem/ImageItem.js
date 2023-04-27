import { Button, } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useContext } from "react";
import CartContext from "../../store/CartContext"
import "./ImageItem.css"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
// import Product from "../Product";
const ImageItem = (props) => {

    const cartCtx = useContext(CartContext);

    const pk = (props) => {

        cartCtx.addItem({

            id: props.id,

            title: props.title,

            price: props.price,

            imageUrl: props.imageUrl,

            subHeading: props.subHeading,

            review:props.review,

        })

    
    }
//     return( <>
//       <Col >
//         <Card>
//           <Card.Img variant="top" src={props.imageUrl} width={150} thumbnail />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a longer card with supporting text below as a natural
//               lead-in to additional content. This content is a little bit
//               longer.
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </Col></>
//   )
  
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
