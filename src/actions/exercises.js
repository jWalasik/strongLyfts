import database from '../firebase/firebase';

export const addSession = (updates) => {
    return {
        type: 'ADD_SESSION',
        updates
    }
}

export const addWeights = (updates) => {
    return {
        type: 'ADD_WEIGHTS',
        updates
    }
}

export const startAddWeights = (updates, state) => {
    const day = state.day
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const session = getState().exercises.session
        
        //filter sets A/B and session, increment accordingly
        const weights = {}
        const newState = updates.map(ex=>{
            if (ex.day!==day && state[`${ex.id}-progress`]===0){
                const newLoad =  ex.load +loadInc(ex.id)
                weights[ex.id] = newLoad
                ex.load = newLoad
            }
            
            return ex
        })
        const promises = [
            database.ref(`users/${uid}/exercises`).update(weights),
            database.ref(`users/${uid}/`).update({session: session+1})
        ]

        return Promise.all([promises])
        .then(values => {
            dispatch(addWeights(newState))
            dispatch(addSession(session+1))
        })
        .catch(err=>console.log(err))
    }
}

export const editWeights = (updates) => ({
    type: 'EDIT_WEIGHTS',
    updates
})

export const startEditWeights = (updates) => {    
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/`).update(updates).then(()=>{
            dispatch(editWeights(updates));
        });
    };
};
export const resetWeights = () => ({
    type:'RESET_WEIGHTS'
})
export const startResetWeights = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/`).remove().then(()=>{
            dispatch(resetWeights());
        })
    }
}
export const setWeights = (exercises) => ({
    type: 'SET_WEIGHTS',
    exercises
})

export const startSetWeights = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        const session = database.ref(`users/${uid}/session/`).once('value').then((snapshot)=>snapshot.val())

        const exercises = database.ref(`users/${uid}/exercises/`).once('value')
            .then((snapshot)=>snapshot.val() ? snapshot.val() : [])
            .then(data => Object.keys(data).map(exercise => {
                    const values = {
                        id: exercise,
                        load: data[exercise],
                        sets: exercise === 'Deadlift' ? 1 : 5,
                        day: sortDay(exercise)
                    }
                    return values
                })
            ).catch(err=> err)
        
        return Promise.all([session, exercises]).then(values =>{
            return dispatch(setWeights({
                session: values[0] || 1,
                exercises: values[1] || []
            }))
        })
    };
};

const sortDay = (exercise) =>{
    if(exercise === 'Bench Press' || exercise === 'Barbell Row') {
        return 'A'
    } else if(exercise === 'Deadlift' || exercise === 'Overhead Press') {
        return 'B'
    } else return 'AB'
}
const loadInc = (name)=>{
    if(name==='Deadlift') return 4
    else return 2
}