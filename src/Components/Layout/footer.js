import { BsYoutube,BsSpotify,BsFacebook } from "react-icons/bs";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Footer =()=>{

    return ( <footer className="blockquote-footer bg-dark">
            <Container>
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
                 </Container>
        </footer> )
}

export default Footer;