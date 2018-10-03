import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { reducer } from './tic-tac-toe/reducer';

const rootReducer = combineReducers({
  reducer,
  form: formReducer
});

/* eslint-disable no-underscore-dangle */
export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
/* eslint-enable */
