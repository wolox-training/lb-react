import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Game from '../Game';

class GamePage extends React.Component {
  render() {
    <Route
      (this.props.loggedUser != '') ? component={Game} : <Redirect to ="/" />
  }
}

const mapStateToProps = store => {};

export default connect(mapStateToProps)(GamePage);
