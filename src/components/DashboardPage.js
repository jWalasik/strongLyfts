import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Chart from './Chart';
import { ThemeSwitch } from './ThemeSwitch';

const DashboardPage = ({isDarkMode}) => (
  <main className={`page ${isDarkMode ? 'dark' : ''}`}>
    <div className="dashboard">
      <h2>
        Week {0 ? 1 : 0}
      </h2>
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