import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import exerciseReducer from '../reducers/exercises';
import modalReducer from '../reducers/modal';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      exercises: exerciseReducer,
      modal: modalReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
