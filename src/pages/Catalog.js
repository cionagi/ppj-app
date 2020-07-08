// Dependency
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { addProducts, isFetchingState, productListState } from '../store/reducers/product';

// Components
import Layout from '../layout/Layout';
import Cart from '../components/cart/cart';
import ProductList from '../components/product/productList';
import SpinnerCustom from '../components/SpinnerCustom';
import Filters from '../components/Filters';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const list = useSelector(productListState);
  const isFetching = useSelector(isFetchingState);

  const [filters, setFilters] = useState([]);
  const [productList, setProductList] = useState([]);
  const [filterSelected, setFilterSelected] = useState();
  useEffect(() => {
    if (!list.length) {
      dispatch(addProducts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filterDump = list.reduce((a, r) => {
      return a.includes(r.gameSeries) ? [...a] : [...a, r.gameSeries];
    }, []);
    setFilters([...filterDump]);
    setProductList(list);
  }, [list]);

  const filterProductsBySerie = (gameSeries) => {
    const listDump = list.filter((item) => {
      return item.gameSeries === gameSeries;
    });
    setFilterSelected(gameSeries);
    setProductList(listDump);
  };

  return (
    <Layout>
      <h1>Amiibo Shop</h1>
      <Row>
        <Col xs={12}>
          <Filters
            filterList={filters}
            filterAction={filterProductsBySerie}
            filterSelected={filterSelected}
          />
        </Col>
      </Row>
      <Row className="align-items-start">
        <Col xs={12} md={8}>
          {isFetching ? <SpinnerCustom /> : <ProductList productList={productList} />}
        </Col>
        <Col xs={12} md={4}>
          <Row>
            <Col xs={12} className="d-none d-md-block">
              <Cart />
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default CatalogPage;
