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
  } = useCart();
  return (
    <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
      <Table responsive="lg">
        <thead>
          <tr>
            <th scope="col" class="border-0 bg-light">
              <div class="p-2 px-3 text-uppercase">Product</div>
            </th>
            <th scope="col" class="border-0 bg-light">
              <div class="py-2 text-uppercase">Price</div>
            </th>
            <th scope="col" class="border-0 bg-light">
              <div class="py-2 text-uppercase">Quantity</div>
            </th>
            <th scope="col" class="border-0 bg-light">
              <div class="py-2 text-uppercase">Remove</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>you have {totalItems} Items in your cart</th>
            <th></th>
            <th></th>
            <th>
              <Button variant="danger" onClick={() => emptyCart()}>
                Clear Cart
              </Button>
            </th>
          </tr>
          {isEmpty ? (
            <tr>
              <td> Cart Empty Please Add Products to view cart</td>
            </tr>
          ) : (
            items.map((cartItem, index) => {
              return (
                <>
                  <tr>
                    <th scope="row" class="border-0">
                      <div className="p-2">
                        <img
                          src=""
                          alt=""
                          width="70"
                          class="img-fluid rounded shadow-sm"
                        />
                        <div className="ml-3 d-inline-block align-middle">
                          <h5 className="mb-0">
                            {cartItem.name}
                            <a
                              href="#"
                              className="text-dark d-inline-block align-middle"
                            ></a>
                          </h5>
                        </div>
                      </div>
                    </th>
                    <td className="border-0 align-middle">
                      <strong>{cartItem.price}</strong>
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
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
