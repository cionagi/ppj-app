import React from 'react';
import { Container } from 'react-bootstrap';
import NavBarCustom from '../components/navbar/NavBarCustom';

const Layout = ({ children }) => {
  return (
    <Container fluid className="container-custom">
      <NavBarCustom />
      <Container className="pt-5">{children}</Container>
    </Container>
  );
};

Layout.propTypes = {};

export default Layout;
