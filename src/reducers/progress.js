const progressReducerDefaultState = []

export default (state = progressReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_PROGRESS':
      return action.progress
    default : return state
  } 
}