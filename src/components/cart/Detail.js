import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { format } from 'money-formatter';

const Detail = ({ product, updateProductClick, subtractProductCart, full = false }) => {
  const { image, name, gameSeries, quantity, price } = product;
  return (
    <ListGroup.Item>
      <div className="d-flex justify-content-between cart__detail__container">
        <div className="product__image">
          <img src={image} alt="imagen detalle carro" />
        </div>
        <div className="product__name">
          <span>{name}</span>
          <span className="series">{gameSeries}</span>
        </div>
        <div className="product__quantity">
          cant:
          {quantity}
        </div>
        <div className="product__price">
          {' '}
          valor unit:
          {format('CLP', price)}
        </div>
        <div className="product__total">
          {' '}
          Total:
          {format('CLP', price * quantity)}
        </div>
        <div className="product__btn">
          <ButtonGroup>
            <Button variant="secondary" onClick={() => subtractProductCart(product)}>
              -
            </Button>
            <Button variant="secondary" onClick={() => updateProductClick(product)}>
              +
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default Detail;
