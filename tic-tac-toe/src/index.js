import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import Game from './components/Game'; // eslint-disable-line import/first

const initialState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  xIsNext: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'EDIT_TILE':
      return {
        state
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
store.dispatch({ type: 'EDIT_TILE' });

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
