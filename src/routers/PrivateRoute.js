import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <div>
          <Header />
          <Component {...props} />
          <Menu />
        </div>
      ) : (
          <Redirect to="/" />
        )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
