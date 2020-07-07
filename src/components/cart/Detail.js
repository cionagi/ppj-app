import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';

const Detail = ({ product, updateProductClick, subtractProductCart }) => {
  return (
    <ListGroup.Item>
      <div className="d-flex justify-content-between">
        <span>{product.name}</span>
        <span>
          cant:
          {product.quantity}
        </span>
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

export default Detail;
