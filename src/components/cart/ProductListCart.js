// Dependency
import React from 'react';

// Store
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/reducers/cart';
import { subtractProductCartServices, updateCartServices } from '../../services/cart';

// Components
import Detail from './Detail';

const ProductDetailCart = ({ cart }) => {
  const dispatch = useDispatch();
  const updateProduct = (product) => {
    const response = updateCartServices(product, cart);
    dispatch(addProduct(response));
  };

  const subtractProductCart = (product) => {
    const response = subtractProductCartServices(product, cart);
    dispatch(addProduct(response));
  };
  const renderItemCart = () => {
    const { products } = cart;
    return products.map((product) => {
      return (
        <Detail
          key={`cart-detail-${product.tail}`}
          product={product}
          updateProductClick={updateProduct}
          subtractProductCart={subtractProductCart}
        />
      );
    });
  };
  return renderItemCart();
};

export default ProductDetailCart;
