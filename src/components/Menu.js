import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogin } from '../actions/auth'
import ThemeSwitch from './ThemeSwitch'

export const Menu = ({ startLogout, isDarkMode}) => (
  <nav className={`menu ${isDarkMode && 'dark'}`}>
    <Link className='menu-button workout-button' to="/workout"><h3>Next Workout</h3></Link>

    <Link className='menu-button settings-button' to="/settings">
      <svg viewBox='0 0 100 100'>
        <defs>
          <path id='line' d='M20,50 L80, 50' />
        </defs>
        <use href='#line' y='-30' />
        <use href='#line' />
        <use href='#line' y='30' />
      </svg>
    </Link>

    <div className='menu-block__right'>
      <ThemeSwitch />
      <button className="menu-button logout-button" onClick={startLogout}>
        <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
          <path d="M7 12h14l-3 -3m0 6l3 -3" />
        </svg>
      </button>
    </div>    
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