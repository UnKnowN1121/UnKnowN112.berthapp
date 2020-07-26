import React from "react";
import { useCart } from "react-use-cart";
import { Table, Button, Col, Row } from "react-bootstrap";

const Cart = () => {
  const {
    isEmpty,
    items,
    removeItem,
    updateItemQuantity,
    totalItems,
    emptyCart,
    cartTotal,
  } = useCart();
  return (
    <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
      <p>you have {totalItems} Items in your cart</p>
      {isEmpty ? (
        <span>Please Add Products to view cart</span>
      ) : (
        <>
          <Button variant="danger" onClick={() => emptyCart()}>
            Clear Cart
          </Button>

          <Table responsive="lg">
            <thead>
              <tr>
                <th scope="col" className="border-0 bg-light">
                  <div className="p-2 px-3 text-uppercase">Product</div>
                </th>
                <th scope="col" className="border-0 bg-light">
                  <div className="py-2 text-uppercase">Price</div>
                </th>
                <th scope="col" className="border-0 bg-light">
                  <div className="py-2 text-uppercase">Quantity</div>
                </th>
                <th scope="col" className="border-0 bg-light">
                  <div className="py-2 text-uppercase">Remove</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {isEmpty ? (
                <tr></tr>
              ) : (
                items.map((cartItem, index) => {
                  return (
                    <>
                      <tr>
                        <th scope="row" className="border-0">
                          <div className="p-2">
                            <img
                              src=""
                              alt=""
                              width="70"
                              className="img-fluid rounded shadow-sm"
                            />
                            <div className="ml-3 d-inline-block align-middle">
                              <h5 className="mb-0">{cartItem.name}</h5>
                            </div>
                          </div>
                        </th>
                        <td className="border-0 align-middle">
                          <strong>{cartItem.price} Rs</strong>
                        </td>
                        <td className="border-0 align-middle">
                          <Row>
                            <Col xs={3}>
                              <Button
                                variant="danger"
                                onClick={() =>
                                  updateItemQuantity(
                                    cartItem.id,
                                    cartItem.quantity - 1
                                  )
                                }
                              >
                                -
                              </Button>
                            </Col>
                            <Col xs={6}>
                              <p className="text-center">{cartItem.quantity}</p>
                            </Col>

                            <Col xs={3}>
                              <Button
                                variant="primary"
                                onClick={() =>
                                  updateItemQuantity(
                                    cartItem.id,
                                    cartItem.quantity + 1
                                  )
                                }
                              >
                                +
                              </Button>
                            </Col>
                          </Row>
                        </td>
                        <td className="border-0 align-middle">
                          <Button
                            variant="danger"
                            onClick={() => removeItem(cartItem.id)}
                          >
                            <i className="fa fa-trash"></i>
                          </Button>
                        </td>
                      </tr>
                    </>
                  );
                })
              )}
              <tr>
                <td colSpan="3">
                  <h3>Total</h3>
                </td>
                <td>{cartTotal} Rs</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="success" href="/Checkout">
            Checkout
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;
