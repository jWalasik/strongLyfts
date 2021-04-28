const progressReducerDefaultState = []

export default (state = progressReducerDefaultState, action) => {
  switch (action.type) {
    case 'RESET_PROGRESS':
      return progressReducerDefaultState
    case 'SET_PROGRESS':
      return [...state, ...action.progress]
    default : return state
  } 
}