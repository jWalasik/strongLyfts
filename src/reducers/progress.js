const progressReducerDefaultState = {
  weight: 0,
  day: 0,
  stats: []
}

export default (state = progressReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_PROGRESS':
      return action.progress
    default : return state
  } 
}