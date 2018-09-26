import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import Game from './components/Game';
import store from './redux/store';

// store.dispatch({ type: 'EDIT_TILE' });

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
