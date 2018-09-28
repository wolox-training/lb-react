import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer } from './tic-tac-toe/reducer';

const rootReducer = combineReducers({
  reducer,
  form: formReducer
});

const store = createStore(rootReducer);

/* eslint-disable no-underscore-dangle */
export default createStore(
  store,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */



Componente onSubmit=...rootReducer




Componente 0
