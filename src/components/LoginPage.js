import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { GoogleLoginButton, FacebookLoginButton } from 'react-social-login-buttons';
import { startLoginWithGoogle, startLoginWithFacebook } from '../actions/auth';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: true
    }
  }
  closeModalHandle = () => {
    this.setState(() => ({ isModalOpen: false }))
  }

  render() {
    return (
      <Modal
        isOpen={this.state.isModalOpen}
        onRequestClose={this.closeModalHandle}
        contentLabel="Login"
        ariaHideApp={false}
      >
        <GoogleLoginButton text="Google" onClick={this.props.startLoginWithGoogle} />
        <FacebookLoginButton text="Facebook" onClick={this.props.startLoginWithFacebook} />
        <button onClick={this.closeModalHandle}>ปิด</button>
      </Modal>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
  startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);