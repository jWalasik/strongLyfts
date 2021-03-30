import database from '../firebase/firebase'

export const setProgress = (progress) => ({
  type: 'SET_PROGRESS',
  progress
})

export const startSetProgress = (update) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/`).update(updates).then(()=>{
      dispatch(setProgress(update))
    })
  }
}

export const fecthProgress = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    
    return database.ref(`users/${uid}/progress/`)
      .once('value')
      .then(snapshot => snapshot.val() ? snapshot.val() : [])
      .then(data => {
        console.log(data)
        return dispatch(setProgress({
          day: data.day,
          stats: data.stats
        }))
      })
    
  }
}