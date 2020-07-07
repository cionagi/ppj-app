import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../layout/Layout';
import Cart from '../components/cart/cart';
import ProductList from '../components/product/productList';
import { addProducts, isFetchingState, productListState } from '../store/reducers/product';
import SpinnerCustom from '../components/SpinnerCustom';

const CatalogPage = ({}) => {
  const dispatch = useDispatch();
  const list = useSelector(productListState);
  const isFetching = useSelector(isFetchingState);

  useEffect(() => {
    if (!list.length) {
      dispatch(addProducts());
    }
  }, []);

  return (
    <Layout>
      <h1>Amiibo Shop</h1>
      <Row className="align-items-start">
        <Col xs={12} md={8}>
          {isFetching ? <SpinnerCustom /> : <ProductList productList={list} />}
        </Col>
        <Col xs={12} md={4}>
          <Row>
            <Col xs={12}>
              <Cart />
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default CatalogPage;
