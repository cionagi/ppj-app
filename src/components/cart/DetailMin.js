// Dependency
import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { format } from 'money-formatter';

const DetailMin = ({ product, updateProductClick, subtractProductCart }) => {
  const { image, name, quantity, price } = product;
  return (
    <ListGroup.Item>
      <div className="cart__detail_min">
        <div className="product__image">
          <img src={image} alt="imagen detalle carro" />
        </div>
        <div className=" ">
          <div>{name}</div>
          <div>
            cant:
            {quantity}
          </div>
          <div>
            {' '}
            valor unit:
            {format('CLP', price)}
          </div>
        </div>
      </div>
      <div className="cart__detail_min__btn">
        <ButtonGroup>
          <Button variant="secondary" onClick={() => subtractProductCart(product)}>
            -
          </Button>
          <Button variant="secondary" onClick={() => updateProductClick(product)}>
            +
          </Button>
        </ButtonGroup>
      </div>
    </ListGroup.Item>
  );
};

export default DetailMin;
