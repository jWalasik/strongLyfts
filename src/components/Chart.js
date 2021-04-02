import React from 'react'
import { connect } from 'react-redux'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const placeholderData = [
]

const Chart = ({isDarkMode, progress}) => {
  console.log(progress)
  return (
    <div className={`chart`}>
      <div>Your progress</div>
      {progress.stats.length === 0 && 
        <div className='chart-overlay__empty'>
          You don't have any data yet
        </div>
      }
      
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={placeholderData}
          margin={{
            left: -10,
          }}
        >
          {/* <Legend verticalAlign='top' height='36' /> */}
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis padding={{top: 20}} dataKey='date' tick={{fontSize: 12}}  />
          <YAxis padding={10} unit='kg' tick={{fontSize: 12}} width={20} />
          <Tooltip />

          <Line type='monotone' dataKey='Benchpress' stroke={isDarkMode ? '#e8554a' : '#b51d12'} activeDot={{r: 5}} dot={{r:1}} strokeWidth='2' />
          <Line type='monotone' dataKey='Deadlift' stroke={isDarkMode ? '#e8ce4a' : '#c4a91d'} activeDot={{r: 5}} dot={{r:1}} strokeWidth='2' />
          <Line type='monotone' dataKey='Squat' stroke={isDarkMode ? '#5ad94a' : '#30c41d'} activeDot={{r: 5}} dot={{r:1}} strokeWidth='2' />
          <Line type='monotone' dataKey='Barbell Row' stroke={isDarkMode ? '#4ac1d9' : '#1892ab'} activeDot={{r: 5}} dot={{r:1}} strokeWidth='2' />
          <Line type='monotone' dataKey='Shoulder Press' stroke={isDarkMode ? '#4265cf' : '#163aa8'} activeDot={{r: 5}} dot={{r:1}} strokeWidth='2' />
        </LineChart>
      </ResponsiveContainer>
    </div>
    
  )
}

const mapStateToProps = (state) => {
  return {
    progress: state.progress,
    isDarkMode: state.theme.isDarkMode
  }
}

export default connect(mapStateToProps, null)(Chart)