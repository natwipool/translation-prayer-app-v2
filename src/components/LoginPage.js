import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
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
    <button className="social-button google" onClick={props.startLoginWithGoogle}>
      Google
    </button>
    <button className="social-button facebook" onClick={props.startLoginWithFacebook}>
      Facebook
    </button>
    <button className="button button-link" onClick={props.handleHideLoginModal}>ปิด</button>
  </Modal>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
  startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);