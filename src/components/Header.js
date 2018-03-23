import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { startLogout } from '../actions/auth';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginModal: false
    };
  }

  onShowLoginModal = () => {
    this.setState(() => ({ showLoginModal: true }));
  }

  render() {
    return  (
      <div>
        <header className="header">
          <div className="content-container">
            <Link className="header__title" to="/">
              <h1>หนังสือเสียง สวดมนต์แปล</h1>
              <p>ฉบับวัดหนองป่าพง</p>
            </Link>
            {!this.props.isAuthenticated ?(
              <button onClick={this.onShowLoginModal}>Login</button>
            ) : (
              <button onClick={this.props.startLogout}>Logout</button>
            )}
            {this.state.showLoginModal && <Redirect to="/login" />}
          </div>
        </header>
        <nav className="menu">
          <div className="content-container">
            <NavLink to="/" activeClassName="is-active" exact={true}>หน้าแรก</NavLink>
            <NavLink to="/trans-prayers" activeClassName="is-active">สารบัญ</NavLink>
            <NavLink to="/playlists" activeClassName="is-active">รายการ</NavLink>
            <NavLink to="/about" activeClassName="is-active">เกี่ยวกับ</NavLink>
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);