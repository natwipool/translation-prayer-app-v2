import React from 'react';
import { connect } from 'react-redux';
import { startLoginWithGoogle, startLoginWithFacebook } from '../actions/auth';

export const LoginPage = ({ startLoginWithGoogle, startLoginWithFacebook }) => (
  <div>
    <button onClick={startLoginWithGoogle}>Login with Google</button>
    <button onClick={startLoginWithFacebook}>Login with Facebook</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
  startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);