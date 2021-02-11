import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import exerciseReducer from '../reducers/exercises';
import modalReducer from '../reducers/modal';
import themeReducer from '../reducers/theme';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      exercises: exerciseReducer,
      modal: modalReducer,
      theme: themeReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
