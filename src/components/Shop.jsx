import React from "react";
import { useCart } from "react-use-cart";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";

import prodsjs from "../data/products.json";

function findQty(data, idToLookFor) {
  var categoryArray = data;
  console.log(categoryArray);
  for (var i = 0; i < categoryArray.length; i++) {
    if (categoryArray[i].id === idToLookFor) {
      console.log("insider loop");
      console.log(categoryArray[i].quantity);
      return categoryArray[i].quantity;
    }
  }
}

const Shop = () => {
  const {
    addItem,
    inCart,
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <>
      <Row className="mt-5">
        <Col md={3} style={{ marginBottom: "1em" }}>
          <ListGroup className="categories">
            <ListGroupItem>All Categories</ListGroupItem>
            <ListGroupItem>Nuts Chocolates</ListGroupItem>
            <ListGroupItem>Dark Chocolates</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={9}>
          <Row>
            {prodsjs.map((products, index) => {
              const alreadyAdded = inCart(products.id);

              return (
                <Col md={4} key={products.id} style={{ marginBottom: "1em" }}>
                  <Card>
                    {/*<Card.Header>Featured</Card.Header>*/}
                    <Card.Body>
                      <Card.Img variant="top" src={products.image} />
                      <Card.Title>{products.name}</Card.Title>
                      <Card.Text>{products.price}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="">
                      {alreadyAdded ? (
                        <Row>
                          <Col xs={3}>
                            <Button
                              variant="danger"
                              onClick={() =>
                                updateItemQuantity(
                                  products.id,
                                  findQty(items, products.id) - 1
                                )
                              }
                            >
                              -
                            </Button>
                          </Col>
                          <Col xs={6}>
                            <p className="text-center">
                              {findQty(items, products.id)}
                            </p>
                          </Col>

                          <Col xs={3}>
                            <Button
                              variant="primary"
                              onClick={() =>
                                updateItemQuantity(
                                  products.id,
                                  findQty(items, products.id) + 1
                                )
                              }
                            >
                              +
                            </Button>
                          </Col>
                        </Row>
                      ) : (
                        <Row>
                          <Col xs={12} className="text-center">
                            <Button
                              variant=""
                              Style="width:90%"
                              onClick={() => addItem(products)}
                            >
                              Add to cart
                            </Button>
                          </Col>
                        </Row>
                      )}
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Shop;
