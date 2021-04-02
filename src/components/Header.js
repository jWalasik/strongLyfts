import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ isDarkMode }) => (
  <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
    <h1 className='header-title'>
      <Link className="header-title__link" to="/dashboard">Strong Lifts</Link>
    </h1>
    <p className='header-about'>Your personal workout tracker</p>
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
