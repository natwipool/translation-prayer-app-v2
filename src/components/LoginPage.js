import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { GoogleLoginButton, FacebookLoginButton } from 'react-social-login-buttons';
import { Button } from 'react-bootstrap';
import { startLoginWithGoogle, startLoginWithFacebook } from '../actions/auth';

export const LoginPage = (props) => (
  <Modal
    isOpen={!!props.showLoginModal}
    onRequestClose={props.handleHideLoginModal}
    contentLabel="เข้าสู่ระบบ"
    ariaHideApp={false}
    closeTimeoutMS={200}
    className="Modal"
  >
    <h3 className="modal__title">เข้าสู่ระบบด้วย</h3>
    <GoogleLoginButton text="Google" onClick={props.startLoginWithGoogle} />
    <FacebookLoginButton text="Facebook" onClick={props.startLoginWithFacebook} />
    <Button className="close-button" onClick={props.handleHideLoginModal}>ปิด</Button>
  </Modal>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
  startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);