import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Register from 'pages/Register';
import ProfileSelect from 'pages/Login/ProfileSelect';
import Login from '../pages/Login';
import PublicRoute from './PublicRoute';
import FreelancerPrivateRoute from './Freelancer';
import RequestorPrivateRoute from './Requestor';

const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter forceRefresh basename="/">
        <PublicRoute exact path="/">
          <Login />
        </PublicRoute>
        <PublicRoute exact path="/register">
          <Register />
        </PublicRoute>
        <PublicRoute exact path="/profile">
          <ProfileSelect />
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
