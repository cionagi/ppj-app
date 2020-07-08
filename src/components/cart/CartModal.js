// Dependency
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

// Store

// Components
import Cart from './cart';

const CartModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button type="primary" className="cart-floating d-lg-none" onClick={handleShow}>
        Carro
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Cart />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CartModal;
