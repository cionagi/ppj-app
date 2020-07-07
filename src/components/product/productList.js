import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from './productCard';

const ProductList = ({ productList }) => {
  const renderProduct = () => {
    return productList.map((product) => {
      return (
        <Col xs={6} md={6} lg={4} key={`product-card-${product.tail}`}>
          <ProductCard product={product} />
        </Col>
      );
    });
  };

  return <Row>{renderProduct()}</Row>;
};

export default ProductList;
