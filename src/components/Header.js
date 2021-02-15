import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ isDarkMode }) => (
  <header className={`header ${isDarkMode ? 'dark' : ''}`}>
    <Link className="header__title" to="/dashboard">
      <h1>Strong Lyfts</h1>
    </Link>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});
const mapStateToProps = (state) => {
  return {
    isDarkMode: state.theme.isDarkMode
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
