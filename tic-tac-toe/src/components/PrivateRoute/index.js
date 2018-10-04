import React from 'react';
import { Route, Redirect } from 'react-route-dom';

import * as wUtils from '../../utils/windowUtils';

export function PrivateRoute({ path, component }) {
  if (wUtils.getItem('token')) {
    return <Route path={path} component={component} />;
  }
  return <Redirect to="/" />;
}
