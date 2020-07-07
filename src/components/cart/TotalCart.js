import React from 'react';
import { format } from 'money-formatter';
import { Link } from 'react-router-dom';
import { emptyCart } from '../../store/reducers/cart';
import { useDispatch } from 'react-redux';

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
        className={`btn btn-info btn-lg btn-block`}
      >
        Pagar
      </Link>
    </div>
  );
};

export default TotalCart;
