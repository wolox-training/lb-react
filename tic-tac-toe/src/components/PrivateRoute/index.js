import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import * as wUtils from '../../utils/windowUtils';

export default function PrivateRoute({ path, component }) {
  if (wUtils.localGetItem('token')) {
    return <Route path={path} component={component} />;
  }
  return <Redirect to="/" />;
}
