import React from 'react';
import  { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import TriedLoginPage from '../components/TriedLoginPage';
import { handleShowModal } from '../actions/modal';

export const PrivateRoute = ({
  loginModal,
  handleShowModal,
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route  {...rest} component={(props) => (
    isAuthenticated ? (
      <div>
        <Header />
        <Component {...props}/>
      </div>
    ) : (
      <div>
        <Header />
        <TriedLoginPage />
      </div>
    )
  )} />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
  loginModal: state.modal
});

const mapDispatchToProps = dispatch => ({
  handleShowModal: (isShow) => dispatch(handleShowModal(isShow))
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);