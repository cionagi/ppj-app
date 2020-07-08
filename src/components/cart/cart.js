// Dependency
import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'money-formatter';
import { Button, Card, ListGroup } from 'react-bootstrap';

//Store
import { addProduct, cartState, emptyCart } from '../../store/reducers/cart';
import { useDispatch, useSelector } from 'react-redux';
import { subtractProductCartServices, updateCartServices } from '../../services/cart';

// Components
import DetailMin from './DetailMin';

const Cart = () => {
  const cart = useSelector(cartState);
  const dispatch = useDispatch();

  const updateProduct = (product) => {
    const response = updateCartServices(product, cart);
    dispatch(addProduct(response));
  };

  const subtractProductCart = (product) => {
    const response = subtractProductCartServices(product, cart);
    dispatch(addProduct(response));
  };

  const renderCartDetail = () => {
    const { products } = cart;
    return products.map((product) => {
      return (
        <DetailMin
          key={`cart-detail-${product.tail}`}
          product={product}
          updateProductClick={updateProduct}
          subtractProductCart={subtractProductCart}
        />
      );
    });
  };

  return (
    <Card className="cart fixed">
      <Card.Header>Carro de compras</Card.Header>
      <Card.Body>
        <Card.Title className="mb-2 text-muted">Detalle</Card.Title>
        <div className="mb-3">
          <ListGroup>{renderCartDetail()}</ListGroup>
        </div>
        <div className="mb-3">
          <Card.Subtitle>
            Total:
            {format('CLP', cart.total)}
          </Card.Subtitle>
        </div>
        <Button
          variant="danger"
          onClick={() => {
            dispatch(emptyCart());
          }}
          disabled={!cart.products.length}
        >
          Vaciar
        </Button>

        <Link to="/cart" className={`btn btn-info ${cart.products.length ? null : 'disabled'}`}>
          Pagar
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Cart;
