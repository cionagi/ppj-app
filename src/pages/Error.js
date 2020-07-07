import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';

const ErrorPage = () => {
  return (
    <Layout>
      <Alert variant="danger">
        <Alert.Heading>Error! </Alert.Heading>
        <p>Esto no le gusta a Mario</p>
        <hr />
        <Link to="/">Volver al Home</Link>
      </Alert>
    </Layout>
  );
};

export default ErrorPage;
