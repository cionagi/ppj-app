import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartPage from './pages/Cart';
import CatalogPage from './pages/Catalog';
import CheckoutSuccess from './pages/CheckoutSuccess';
import ErrorPage from './pages/Error';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <CatalogPage />
          </Route>
          <Route path="/catalog">
            <CatalogPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
          <Route path="/success">
            <CheckoutSuccess />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
