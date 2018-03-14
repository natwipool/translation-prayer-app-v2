import React from 'react';
import { connect } from 'react-redux';
import { GoogleLoginButton, FacebookLoginButton } from 'react-social-login-buttons';
import { startLoginWithGoogle, startLoginWithFacebook } from '../actions/auth';

export const LoginPage = ({ startLoginWithGoogle, startLoginWithFacebook }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__tittle">สวดมนต์แปล</h1>
      <p>
        การสวดมนต์มีอานิสงค์มากมาย ดีต่อใจดีต่อกาย
        วันนี้ท่านสวดมนต์รึยัง?
        เรามาสวดมนต์กันเถอะ
        
      </p>
      <GoogleLoginButton text="เข้าสู่ระบบด้วย Google" onClick={startLoginWithGoogle} />
      <FacebookLoginButton text="เข้าสู่ระบบด้วย Facebook" onClick={startLoginWithFacebook} />
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
  startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);