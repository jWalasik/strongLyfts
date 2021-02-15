import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Chart from './Chart';
import { ThemeSwitch } from './ThemeSwitch';

const DashboardPage = ({isDarkMode}) => (
  <main className={`page ${isDarkMode && 'dark'}`}>
    <div className="dashboard">
      <Chart />
    </div>      
  </main>
);

const mapStateToProps = (state) => {
  return {
    isDarkMode: state.theme.isDarkMode
  }
}

export default connect(mapStateToProps, null)(DashboardPage);