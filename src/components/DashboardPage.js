import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const DashboardPage = () => (
  <div className="page-header">
    <div className="content-container">
      <div className="dashboard">
        <Link to="/workout"><h3>Next Workout Session</h3></Link>
        <Link to="/settings"><h3>Settings</h3></Link>
      </div>      
    </div>    
  </div>
);

const mapStateToProps = (state) => {
  return {
    isDarkMode: state.theme.isDarkMode
  }
}

export default connect(mapStateToProps, null)(DashboardPage);