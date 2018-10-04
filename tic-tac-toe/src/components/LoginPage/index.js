import React from 'react';
import { connect } from 'react-redux';

import LoginForm from '../LoginForm';

class LoginPage extends React.Component {
  submit = values => {
    console.log(values);
    debugger; // eslint-disable-line
  };
  render() {
    return <LoginForm onSubmit={this.submit} />;
  }
}

const mapStateToProps = store => {};

export default connect(mapStateToProps)(LoginPage);
