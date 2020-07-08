// Dependency
import React from 'react';
import { Col, Row } from 'react-bootstrap';

// Store
import { cartState } from '../store/reducers/cart';
import { useSelector } from 'react-redux';

// components
import Layout from '../layout/Layout';
import ProductDetailCart from '../components/cart/ProductListCart';
import TotalCart from '../components/cart/TotalCart';

const CartPage = () => {
  const cart = useSelector(cartState);
  return (
    <Layout>
      <h1>Detalle de compra</h1>
      {cart.total > 0 ? (
        <Row className="align-items-start">
          <Col xs={12} md={8}>
            <ProductDetailCart cart={cart} />
          </Col>
          <Col xs={12} md={4}>
            <Row>
              <Col xs={12}>{cart.total > 0 && <TotalCart cart={cart} />}</Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <div className="mt-5 p-3 mb-2 bg-warning text-dark text-center">
          <h5 className="mt-2 text-secondary">Su carrito esta vacio :(</h5>
        </div>
      )}
    </Layout>
  );
};

export default CartPage;
