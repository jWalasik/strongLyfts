import React from 'react'
import { connect } from 'react-redux'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const placeholderData = [
  {
    date: '2020-05-01',
    'Deadlift': 100,
    'Barbell Row': 30,
    'Benchpress': 80,
    'Squat': 100,
    'Shoulder Press': 40
  },
  {
    date: '2020-05-02',
    'Deadlift': 110,
    'Barbell Row': 30,
    'Benchpress': 80,
    'Squat': 110,
    'Shoulder Press': 40
  },
  {
    date: '2020-05-03',
    'Deadlift': 120,
    'Barbell Row': 30,
    'Benchpress': 80,
    'Squat': 120,
    'Shoulder Press': 40
  },
  {
    date: '2020-05-04',
    'Deadlift': 115,
    'Barbell Row': 30,
    'Benchpress': 80,
    'Squat': 130,
    'Shoulder Press': 40
  },
  {
    date: '2020-05-05',
    'Deadlift': 120,
    'Barbell Row': 30,
    'Benchpress': 80,
    'Squat': 140,
    'Shoulder Press': 45
  },
  {
    date: '2020-05-06',
    'Deadlift': 130,
    'Barbell Row': 30,
    'Benchpress': 80,
    'Squat': 150,
    'Shoulder Press': 60
  }
]

const Chart = ({isDarkMode, progress}) => {
  return (
    <ResponsiveContainer width='100%' height='100%' >
      <LineChart
        width={500}
        height={300}
        data={placeholderData}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='Benchpress' stroke='#53c2c0' activeDot={{r: 8}} />
        <Line type='monotone' dataKey='Deadlift' stroke='#48db5a' activeDot={{r: 8}} />
        <Line type='monotone' dataKey='Squat' stroke='#4874db' activeDot={{r: 8}} />
        <Line type='monotone' dataKey='Barbell Row' stroke='#ffd65c' activeDot={{r: 8}} />
        <Line type='monotone' dataKey='Shoulder Press' stroke='#ff5c5c' activeDot={{r: 8}} />
      </LineChart>
    </ResponsiveContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    progress: state.progress,
    isDarkMode: state.theme.isDarkMode
  }
}

export default connect(mapStateToProps, null)(Chart)