import React from 'react';
import { Alert } from 'react-bootstrap';
import Layout from '../layout/Layout';

const CheckoutSuccess = ({}) => {
  return (
    <Layout>
      <Alert variant="success">
        <Alert.Heading>gracias por comprar en Amiibo Store</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going
          to run a bit longer so that you can see how spacing within an alert works with this kind
          of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
        </p>
      </Alert>
    </Layout>
  );
};

export default CheckoutSuccess;
