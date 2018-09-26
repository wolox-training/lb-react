import { createStore } from 'redux';

import { reducer } from './tic-tac-toe/reducer';

/* eslint-disable no-underscore-dangle */
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
