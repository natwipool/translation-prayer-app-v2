import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import LoginPage from '../components/LoginPage';
import { handleShowModal } from '../actions/modal';

export const TriedLoginPage = ({ loginModal, handleShowModal }) => (
  <div>
    <div className="page-header">
      <div className="content-container-body">
        <h2 className="page-header__title">บทสวดมนต์ของฉัน</h2>
      </div>
    </div>
    <div className="content-container-body">
      <p>กรุณาเข้าระบบก่อนใช้งาน บทสวดมนต์ของฉัน</p>
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
  </div>
);

const mapStateToProps = state => ({
  loginModal: state.modal
});

const mapDispatchToProps = dispatch => ({
  handleShowModal: isShow => dispatch(handleShowModal(isShow))
});

export default connect(mapStateToProps, mapDispatchToProps)(TriedLoginPage);
