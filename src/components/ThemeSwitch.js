import React from 'react';
import { connect } from 'react-redux';
import { toggleDarkMode } from '../actions/theme';

export class ThemeSwitch extends React.Component {
  handleClick = (e) => {
    this.props.toggleDarkMode()
  }
  componentWillUpdate(){
    const root = document.documentElement
    if(this.props.isDarkMode) root.classList.add('dark')
    else root.classList.remove('dark')
  }
 
  render(){
    return (
      <div className='toggle-switch'>
        <input onClick={this.handleClick} type='checkbox' className='toggle-switch__checkbox' name='darkmodeSwitch' id='darkmodeSwitch' />
        <label className='toggle-switch__label' htmlFor='darkmodeSwitch'>

        </label>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleDarkMode: () => dispatch(toggleDarkMode())
})

const mapStateToProps = (state) => {
  return {
    isDarkMode: state.theme.isDarkMode
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)