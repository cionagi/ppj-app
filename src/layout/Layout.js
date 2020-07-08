// Dependency
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import NavBarCustom from '../components/navbar/NavBarCustom';
import CartModal from '../components/cart/CartModal';

const Layout = ({ children }) => {
  return (
    <Container fluid className="container-custom">
      <NavBarCustom />
      <Container className="pt-5">{children}</Container>
      <CartModal />
    </Container>
  );
};

Layout.propTypes = {};

export default Layout;
