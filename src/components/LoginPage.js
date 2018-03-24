import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { GoogleLoginButton, FacebookLoginButton } from 'react-social-login-buttons';
import { startLoginWithGoogle, startLoginWithFacebook } from '../actions/auth';

export const LoginPage = (props) => (
  <Modal
    isOpen={!!props.showLoginModal}
    onRequestClose={props.handleHideLoginModal}
    contentLabel="เข้าสู่ระบบ"
    contentLabel="Login"
    ariaHideApp={false}
  >
    <h3>เข้าสู่ระบบ</h3>
    <GoogleLoginButton text="Google" onClick={props.startLoginWithGoogle} />
    <FacebookLoginButton text="Facebook" onClick={props.startLoginWithFacebook} />
    <button onClick={props.handleHideLoginModal}>ปิด</button>
  </Modal>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
  startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);