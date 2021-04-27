import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Chart from './Chart';
import ExerciseList from './ExerciseList';
import Page from './Page';

const DashboardPage = ({isDarkMode, progress}) => {
  return (
    <Page>
      <div className="dashboard">
        <h2 className='dashboard-header'>
          <span>Day {progress.day ? progress.day : 0}</span>
          <Link className='workout-link' to="/workout">Next Workout</Link>
        </h2>
        <Chart />

        <ExerciseList />
      </div>   
    </Page>
   
  )
}
const mapStateToProps = (state) => {
  return {
    isDarkMode: state.theme.isDarkMode,
    progress: state.progress
  }
}

export default connect(mapStateToProps, null)(DashboardPage);