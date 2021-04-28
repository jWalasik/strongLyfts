import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/auth'
import ThemeSwitch from './ThemeSwitch'

import Exit from './svg/Exit'
import Barbell from './svg/Barbell'
import Home from './svg/Home'
import List from './svg/List'


export const Menu = ({startLogout, isDarkMode}) => (
  <nav className={`menu ${isDarkMode ? 'dark' : 'light'}`}>
    <Link className='menu-button workout-button' to="/">
      <Home className='menu-icon' />
    </Link>

    <Link className='menu-button workout-button' to="/workout">
      <Barbell className='menu-icon' />
    </Link>

    <Link className='menu-button settings-button' to="/settings">
      <List className='menu-icon' />
    </Link>

    <ThemeSwitch />

    <Exit className='menu-icon' onClick={startLogout} />
  </nav>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});
const mapStateToProps = (state) => {
  return {
    isDarkMode: state.theme.isDarkMode
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);