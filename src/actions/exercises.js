import database from '../firebase/firebase';

export const addWeights = (updates) => {
    return {
        type: 'ADD_WEIGHTS',
        updates
    }
}

export const startAddWeights = (updates, day) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const newLoads = {
            exercises:{}
        };
        //filter sets A/B and session, increment accordingly
        updates.map((exercise)=>{            
            exercise.day!==day&&exercise.id!=='session' ? exercise.load +=loadInc(exercise.id) : exercise
            exercise.id!=='session' ? newLoads.exercises[exercise.id] = exercise.load : newLoads.session = exercise.value+1
        })
        return database.ref(`users/${uid}/`).update(newLoads).then(()=>{
            updates[5].value+=1
            dispatch(addWeights(updates));
        })
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
    console.log('reset')
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
        return database.ref(`users/${uid}/`).once('value').then((snapshot)=>{
            const exercises = [];
            snapshot.forEach((childSnapshot) => {
                if(childSnapshot.key === "session"){
                    exercises.push({id: childSnapshot.key, value: childSnapshot.val()})
                } else {
                    childSnapshot.forEach((exercise) => {
                        exercises.push({
                            id: exercise.key,
                            load: exercise.val(),
                            sets: exercise.key === "Deadlift" ? 1 : 5,
                            day: sortDay(exercise.key)
                        });
                    })
                    
                }
            });
            dispatch(setWeights(exercises));
        });
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
    if(name==='Deadlift') return 5
    else return 2.5
}