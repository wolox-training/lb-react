import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer } from './tic-tac-toe/reducer';
import { reducer as loginReducer } from './login/reducer';

const rootReducer = combineReducers({
  reducer,
  form: formReducer,
  login: loginReducer
});

/* eslint-disable no-underscore-dangle */
export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
