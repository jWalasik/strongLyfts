const weightReducerDefaultState = {
    session: 1,
    exercises: []
}

export default (state = weightReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_WEIGHTS':
            state.exercises = action.updates
            return state
        case 'ADD_SESSION':
            state.session = action.updates
            return state
        case 'EDIT_WEIGHTS':
            if(state.exercisies !== undefined){
                return state.exercises.map((exercise)=>{
                    exercise.load = action.updates.exercises[exercise.id]
                    return exercise;
                })
            } else {
                state.exercises = [
                    {id: 'Barbell Row', load: action.updates.exercises['Barbell Row'], sets: 5, day: 'A'},
                    {id: 'Bench Press', load: action.updates.exercises['Bench Press'], sets: 5, day: 'A'},
                    {id: 'Deadlift', load: action.updates.exercises['Deadlift'], sets: 1, day: 'B'},
                    {id: 'Overhead Press', load: action.updates.exercises['Overhead Press'], sets: 5, day: 'B'},
                    {id: 'Squat', load: action.updates.exercises['Squat'], sets: 5, day: 'AB'},
                ];
                return state;
            }
        case 'RESET_WEIGHTS':
            return weightReducerDefaultState;            
        case 'SET_WEIGHTS':
            return action.exercises;
        default: return state;
    }
}