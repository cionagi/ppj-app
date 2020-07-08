// Dependency
import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

// Layout
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
