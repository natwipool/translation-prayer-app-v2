import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
    <h1>สวดมนต์แปล</h1>
    <NavLink to="/trans-prayers" activeClassName="is-active">สารบัญ</NavLink>
    <NavLink to="/playlists" activeClassName="is-active">รายการ</NavLink>
    <NavLink to="/about" activeClassName="is-active">เกี่ยวกับ</NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);