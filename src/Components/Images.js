import { Button, Stack, } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { BsYoutube,BsSpotify,BsFacebook } from "react-icons/bs";
const productsArr = [

    {

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {

        title: 'Blue Color',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }

]
const Imager = () => {

    return (<Stack gap={20}>
        <div className="variant-dark">
        <Container  >
            <Row >
                <Col className=" text-center" ><h1>Music</h1></Col>
            </Row>
            <Row>
                <Col className=" text-center">
                <h3> Album 1</h3> 
                <Image src={productsArr[0].imageUrl} thumbnail />   
                </Col>
                <Col className=" text-center">
                <h3> Album 2</h3>
                <Image src={productsArr[1].imageUrl}  thumbnail />
                </Col>
            </Row>
            <Row>
                <Col className="text-center">{`$${productsArr[1].price}`}</Col>
                <Col><Button variant="primary">Add To Cart</Button></Col>
                <Col className="text-center">{`$${productsArr[0].price}`}</Col>
                <Col><Button variant="primary">Add To Cart</Button></Col>
            </Row>
        </Container></div>
        <div className="variant-dark">
        <Container>
        <Row>
                <Col className=" text-center">
                <h3> Album 3</h3> 
                <Image src={productsArr[2].imageUrl} thumbnail />   
                </Col>
                <Col className=" text-center">
                <h3> Album 4</h3>
                    <Image src={productsArr[3].imageUrl}  thumbnail />
                </Col>
            </Row>
            <Row>
                <Col className="text-center">{`$${productsArr[2].price}`}</Col>
                <Col><Button variant="primary">Add To Cart</Button></Col>
                <Col className="text-center">{`$${productsArr[3].price}`}</Col>
                <Col><Button variant="primary">Add To Cart</Button></Col>
            </Row>
            </Container>
            </div><br/>
            <div className="variant-dark">
            <Container>
            <Row className="text-center"><h1>Merch</h1></Row>
            <Row>
                <Col className=" text-center">
                <h3> Album 3</h3> 
                <Image src="https://prasadyash2411.github.io/ecom-website/img/Shirt.png" thumbnail />   
                </Col>
                <Col className=" text-center">
                <h3> Album 4</h3>
                    <Image src="https://prasadyash2411.github.io/ecom-website/img/Cofee.png"  thumbnail />
                </Col>
            </Row>
            <Row>
                <Col className="text-center">{`$${productsArr[2].price}`}</Col>
                <Col><Button variant="primary">Add To Cart</Button></Col>
                <Col className="text-center">{`$${productsArr[3].price}`}</Col>
                <Col><Button variant="primary">Add To Cart</Button></Col>
            </Row><br/>
            <Row ><Col className="text-center"><Button variant="secondary" size="lg" >See the Cart</Button></Col></Row>
        </Container>
        </div><br/> 
        <footer className="blockquote-footer bg-dark">
                <Row>
                    <Col className="footer-heading" xs={12} md={8}><h1>The Generics</h1></Col>
                    <Col className="justify-content-end" xs={6} md={4}>
                    <div><br/>
                  <BsYoutube color="red" size={70}/>  &nbsp;&nbsp;&nbsp;
                    <BsSpotify  color="green" size={50}/>&nbsp;&nbsp;&nbsp;
                    <BsFacebook color="light-blue" size={50}/>
                    </div>
                </Col>
                </Row>
          </footer>   
    </Stack>)
}

export default Imager;