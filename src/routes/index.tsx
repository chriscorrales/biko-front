import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Register from 'pages/Register';
import Login from '../pages/Login';
import PublicRoute from './PublicRoute';
import FreelancerPrivateRoute from './Freelancer';
import RequestorPrivateRoute from './Requestor';

const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <PublicRoute exact path="/">
          <Login />
        </PublicRoute>
        <PublicRoute exact path="/register">
          <Register />
        </PublicRoute>
      </BrowserRouter>
      <BrowserRouter basename="/freelancer">
        <FreelancerPrivateRoute />
      </BrowserRouter>
      <BrowserRouter basename="/requestor">
        <RequestorPrivateRoute />
      </BrowserRouter>
    </>
  );
};

export default Routes;
