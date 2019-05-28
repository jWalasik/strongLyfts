const weightReducerDefaultState = []

export default (state = weightReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_WEIGHTS':
            return action.updates
        case 'EDIT_WEIGHTS':
            if(state.exercisies !== undefined){
                return state.map((exercise)=>{
                    exercise.load = action.updates.exercises[exercise.id]
                    return exercise;
                })
            } else {
                state = [{id: 'Barbell Row', load: action.updates.exercises['Barbell Row'], sets: 5, day: 'A'},
                        {id: 'Bench Press', load: action.updates.exercises['Bench Press'], sets: 5, day: 'A'},
                        {id: 'Deadlift', load: action.updates.exercises['Deadlift'], sets: 1, day: 'B'},
                        {id: 'Overhead Press', load: action.updates.exercises['Overhead Press'], sets: 5, day: 'B'},
                        {id: 'Squat', load: action.updates.exercises['Squat'], sets: 5, day: 'AB'},
                        {id: 'session', value: action.updates.session}];
                return state;
            }
        case 'RESET_WEIGHTS':
            return weightReducerDefaultState;            
        case 'SET_WEIGHTS':
            return action.exercises;
        default: return state;
    }
}