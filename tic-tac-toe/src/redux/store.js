import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { reducer } from './tic-tac-toe/reducer';

export const history = createHistory();

const rootReducer = combineReducers({
  reducer,
  form: formReducer,
  router: routerReducer
});

/* eslint-disable no-underscore-dangle */
const middlewares = [routerMiddleware(history)];

const enhancers = [applyMiddleware(...middlewares)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(...enhancers), applyMiddleware(thunk));
/* eslint-enable */
