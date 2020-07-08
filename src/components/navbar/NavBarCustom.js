// Dependency
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge, Nav, Navbar } from 'react-bootstrap';
import { format } from 'money-formatter';

// Store
import { cartState } from '../../store/reducers/cart';

const NavBarCustom = () => {
  const cart = useSelector(cartState);
  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
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
          <Link to="/cart" className="nav-link disabled">
            <Badge variant="warning">{format('CLP', cart.total)}</Badge>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarCustom;
