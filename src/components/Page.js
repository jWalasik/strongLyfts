import React from 'react'
import { connect } from 'react-redux'

const Page = ({isDarkMode, children}) => (
  <main class={`page ${isDarkMode ? 'dark' : ''}`}>
    {children}
  </main>
)

const mapStateToProps = (state) => {
  return {
    isDarkMode: state.theme.isDarkMode
  }
}

export default connect(mapStateToProps, null)(Page)