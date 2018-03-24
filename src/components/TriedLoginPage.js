import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import LoginPage from '../components/LoginPage';
import { handleShowModal } from '../actions/modal';

export const TriedLoginPage = ({ loginModal, handleShowModal }) => (
  <div className="content-container">
    <h4>กรุณาเข้าระบบก่อนใช้งาน รายกายสวดมนต์ของฉัน</h4>
    <Button
      bsStyle="success"
      onClick={() => {
        handleShowModal(true);
      }}
    >
      เข้าสู่ระบบ
    </Button>
    <LoginPage
      showLoginModal={!!loginModal.showModal}
      handleHideLoginModal={() => {
        handleShowModal();
      }}
    />
  </div>
);

const mapStateToProps = state => ({
  loginModal: state.modal
});

const mapDispatchToProps = dispatch => ({
  handleShowModal: isShow => dispatch(handleShowModal(isShow))
});

export default connect(mapStateToProps, mapDispatchToProps)(TriedLoginPage);
