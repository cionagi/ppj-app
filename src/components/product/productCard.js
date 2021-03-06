// Dependency
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { format } from 'money-formatter';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, cartState } from '../../store/reducers/cart';
import { updateCartServices } from '../../services/cart';

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
      <div className="product-card__container_image">
        <Card.Img loading="lazy" variant="top" src={image} className="product-card__container" />
      </div>

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
