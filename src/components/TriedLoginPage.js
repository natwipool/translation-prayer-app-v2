import React from 'react';
import { connect } from 'react-redux';
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
      <div className="text-container">
        <p>กรุณาเข้าระบบก่อนใช้งาน บทสวดมนต์ของฉัน</p>
      </div>
      <button
        className="button"
        onClick={() => {
          handleShowModal(true);
        }}
      >
        เข้าสู่ระบบ
      </button>

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
