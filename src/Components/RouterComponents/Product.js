import { Image } from "react-bootstrap";
import "./Product.css"
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

const ProductItem = (props) => {
    
  const location = useLocation();
  const { items } = location.state
  return (  <>
    <Card>
    <Card.Body>
    <Card.Header className="text-center"><h3>{items.subHeading}</h3></Card.Header>
      </Card.Body>
      <div className="geeks1">
      <Image  src={items.imageUrl} />
      </div>
      <Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><h4>NAME:{items.title}</h4></ListGroup.Item>
        <ListGroup.Item><h4>Amount:${items.price}</h4></ListGroup.Item>
        <ListGroup.Item><h4>Reviews:{items.review}</h4></ListGroup.Item>
      </ListGroup>
       
      </Card.Body>
    </Card>
    <br />
  </>
  );
};

export default ProductItem;