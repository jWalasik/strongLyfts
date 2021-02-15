import React from 'react'
import { connect } from 'react-redux'

const Chart = ({isDarkMode}) => {
  return (
    <div className={`chart ${isDarkMode && 'dark'}`}>
      THIS IS YOU PROGRESS CHART
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isDarkMode: state.theme.isDarkMode
  }
}

export default connect(mapStateToProps, null)(Chart)