import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import LoginPage from '../components/LoginPage';
import { startLogout } from '../actions/auth';
import { handleShowLoginModal } from '../actions/modal';

export const Header = props => (
  <header>
    <Navbar inverse collapseOnSelect>
      <div className="content-container">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">สวดมนต์แปล</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/trans-prayers">
              <NavItem>สารบัญ</NavItem>
            </LinkContainer>
            <LinkContainer to="/playlists">
              <NavItem>บทสวดมนต์ของฉัน</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem>เกี่ยวกับ</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem>
              {!props.isAuthenticated ? (
                <button 
                  className="button header-button"
                  onClick={() => {
                    props.handleShowLoginModal(true);
                  }}
                >
                  เข้าสู่ระบบ
                </button>
              ) : (
                <button 
                  className="button header-button logout-button"
                  onClick={props.startLogout}
                >
                  ออกจากระบบ
                </button>
              )}
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    <LoginPage
      showLoginModal={!!props.loginModal}
      handleHideLoginModal={() => {
        props.handleShowLoginModal();
      }}
    />
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
  loginModal: state.modal.showLoginModal
});

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout()),
  handleShowLoginModal: isShow => dispatch(handleShowLoginModal(isShow))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
