// Dependency
import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'money-formatter';

// Store
import { useDispatch } from 'react-redux';
import { emptyCart } from '../../store/reducers/cart';

const TotalCart = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>
        Total:
        {format('CLP', cart.total)}
      </h1>
      <Link
        to="/success"
        onClick={() => dispatch(emptyCart())}
        className="btn btn-info btn-lg btn-block"
      >
        Pagar
      </Link>
    </div>
  );
};

export default TotalCart;
