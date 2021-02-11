import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import ThemeSwitch from './ThemeSwitch';

export const Header = ({ startLogout, isDarkMode }) => (
  <header className={`header ${isDarkMode ? 'dark' : ''}`}>
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Strong Lyfts</h1>
        </Link>
        <ThemeSwitch />
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
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
