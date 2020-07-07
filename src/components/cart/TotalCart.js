import React from 'react';
import { Button } from 'react-bootstrap';
import { format } from 'money-formatter';

const TotalCart = ({ cart }) => {
  return (
    <div>
      <h1>
        Total:
        {format('CLP', cart.total)}
      </h1>
      <Button variant="info" onClick={() => {}} block>
        Pagar
      </Button>
    </div>
  );
};

export default TotalCart;
