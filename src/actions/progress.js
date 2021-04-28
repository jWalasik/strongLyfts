import database from '../firebase/firebase'

export const setProgress = (progress) => ({
  type: 'SET_PROGRESS',
  progress
})

export const resetProgress = () => ({
  type: 'RESET_PROGRESS'
})

export const startProgressReset = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/progress/`)
      .remove()
      .then(() => dispatch(resetProgress()))
  }
}

export const startProgressUpdate = (update) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const progress = getState().progress
    const newEntry = {
      date: (new Date()).toISOString().split('T')[0],
      weights: {
        'Barbell Row': update[0].load,
        'Bench Press': update[1].load,
        'Deadlift': update[2].load,
        'Overhead Press': update[3].load,
        'Squat': update[4].load,
      }
    }
    const progressUpdate = progress.push(newEntry)
    return database.ref(`users/${uid}/progress/`)
      .push(newEntry)
      .then(() => {
        console.log('progress update: ', progress, progressUpdate, newEntry)
        return dispatch(setProgress( progressUpdate ))})
  }
}

export const fecthProgress = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid

    return database.ref(`users/${uid}/progress/`)
      .once('value')
      .then(snapshot => snapshot.val() ? snapshot.val() : [])
      .then(data => dispatch(setProgress( Object.values(data) )))
    
  }
}