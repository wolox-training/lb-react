import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import Game from './components/Game';
import LoginPage from './components/LoginPage';
import store from './redux/store';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <PrivateRoute path="/game" component={Game} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
