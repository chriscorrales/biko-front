import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Routes: React.FC = () => {
  return (
    <Switch>
      <PublicRoute exact path="/">
        <Login />
      </PublicRoute>
      <PrivateRoute exact path="/home">
        <Home />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
