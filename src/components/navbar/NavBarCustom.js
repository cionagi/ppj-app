import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBarCustom = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="/">PPJ-App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/catalog" className="nav-link">
            Catálogo
          </Link>
          <Link to="/cart" className="nav-link">
            Carrito
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarCustom;
