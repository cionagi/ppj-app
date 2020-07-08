// Dependency
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { format } from 'money-formatter';

// Store
import { addProduct, cartState } from '../../store/reducers/cart';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartServices } from '../../services/cart';

//

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(cartState);
  const { image, name, type, amiiboSeries, price } = product;

  const addProductToCart = () => {
    const response = updateCartServices(product, cart);
    dispatch(addProduct(response));
  };

  return (
    <Card className="mb-4">
      <Card.Img
        loading="lazy"
        variant="top"
        src={image}
        className="product-card__container"
        style={{ maxHeight: '200px', maxWidth: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text>
          Tipo:
          {type}
        </Card.Text>
        <Card.Text>
          Serie:
          {amiiboSeries}
        </Card.Text>
        <Card.Text>
          Precio:
          {format('CLP', price)}
        </Card.Text>
        <Button variant="primary" onClick={() => addProductToCart()} block>
          Agregar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
