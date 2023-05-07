import React, { Fragment, useContext, useEffect } from "react";
import CartContext from "../store/CartContext";
import { Row, Col, Card , Button} from "react-bootstrap";
const CartItem =  (props) => {
  const details = useContext(CartContext);
  let total = 0;
  function remove(e){
    details.removeItemFromCart(e.target.id)
  }
  const newArray=JSON.parse(localStorage.getItem("cartItem"))
  return (
    <>
      {newArray.map((item) => {
        total +=Number(item.Qty) * item.price;
        return (
          < Fragment key={item.key}>
            {item.Qty>0 && (
              <Row  className="align-items-center row-cols-3">
                <Col className="d-flex align-items-center ">
                  <Col>
                    <Card.Img
                      variant="left"
                      src={item.imageUrl}
                      style={{ width: "5rem" }}
                    />
                  </Col>
                  <Col>{item.title}</Col>
                </Col>
                <Col>${item.price}</Col>
                <Col className="d-flex align-items-center ">
                    <Col>{item.Qty}</Col>
                    <Button variant='danger' id={item.id} onClick={remove}>REMOVE</Button>
                </Col>
              </Row>
            )}
          </Fragment> 
        );
      })}
      <span className="text-end">Total Price:{total}</span>
    </>
  );
};

export default CartItem;