import React from 'react';
import { connect } from 'react-redux';
import { toggleDarkMode } from '../actions/theme';

export class ThemeSwitch extends React.Component {
  handleClick = (e) => {
    this.props.toggleDarkMode()
  }
  render(){
    console.log('theme', this.props)
    return (
      <div className='toggle-switch'>
        <input onClick={this.handleClick} type='checkbox' className='toggle-switch__checkbox' name='darkmodeSwitch' id='darkmodeSwitch' />
        <label className='toggle-switch__label' htmlFor='darkmodeSwitch'>
          Dark Mode
        </label>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleDarkMode: () => dispatch(toggleDarkMode())
})

const mapStateToProps = (state) => {
  console.log(state.theme.isDarkMode)
  return {
    isDarkMode: state.theme.isDarkMode
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)