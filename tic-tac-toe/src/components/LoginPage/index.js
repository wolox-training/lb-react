import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import LoginForm from '../LoginForm';
import * as wUtils from '../../utils/windowUtils';

class LoginPage extends React.Component {
  submit = values => {
    console.log(values);
    wUtils.localSetItem('email', values.email);
    this.props.dispatch(push('/game'));
  };
  render() {
    return <LoginForm onSubmit={this.submit} />;
  }
}

const mapStateToProps = store => {};

export default connect(mapStateToProps)(LoginPage);
