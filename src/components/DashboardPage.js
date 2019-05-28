import React from 'react';
import {Link} from 'react-router-dom'

const ExpenseDashboardPage = () => (
  <div className="page-header">
    <div className="content-container">
      <div className="dashboard">
        <Link to="/workout"><h3>Next Workout Session</h3></Link>
        <Link to="/settings"><h3>Settings</h3></Link>
      </div>      
    </div>    
  </div>
);

export default ExpenseDashboardPage;