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
      <div className='theme-switch' onClick={this.handleClick}>
        {/* <input onClick={this.handleClick} type='checkbox' className='toggle-switch__checkbox' name='darkmodeSwitch' id='darkmodeSwitch' />
        <label className='toggle-switch__label' htmlFor='darkmodeSwitch'>

        </label> */}
        <svg className={`switch-icon ${this.props.isDarkMode ? 'sun' : 'moon'}`} viewBox="0 0 612.001 612.001" >
          <defs>
            <path id='ray' d="M274.194,117.278h63.612c5.032,0,9.356-2.101,11.863-5.763c2.508-3.662,2.9-8.453,1.079-13.146L315.749,8.257
            c-2.789-7.184-7.305-8.256-9.749-8.256s-6.96,1.073-9.749,8.255l-35,90.114c-1.821,4.692-1.427,9.482,1.079,13.145
            C264.837,115.178,269.162,117.278,274.194,117.278z"/>
          </defs>
          <circle cx='306' cy='306' r='160' />

          <circle id='shadow' cx='600' cy='600' r='130' />

          <g id='rays'>
            <use href='#ray' />
            <use href='#ray' transform='rotate(45)' transform-origin='center' />
            <use href='#ray' transform='rotate(90)' transform-origin='center' />
            <use href='#ray' transform='rotate(135)' transform-origin='center' />
            <use href='#ray' transform='rotate(180)' transform-origin='center' />
            <use href='#ray' transform='rotate(225)' transform-origin='center' />
            <use href='#ray' transform='rotate(270)' transform-origin='center' />
            <use href='#ray' transform='rotate(315)' transform-origin='center' />
          </g>
        </svg>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    toggleDarkMode: () => dispatch(toggleDarkMode())
  }
}



const mapStateToProps = (state) => {
  return {
    isDarkMode: state.theme.isDarkMode
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)