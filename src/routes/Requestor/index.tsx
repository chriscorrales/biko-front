import React from 'react';
import { Switch } from 'react-router-dom';
import ServicesPage from '../../pages/Requestor/Services';
import PrivateRoute from './PrivateRoute';

type RoutesRequestor = {
  path: string;
  component: React.ReactNode;
}[];

const RequestorPrivateRoute: React.FC = () => {
  const routes: RoutesRequestor = [
    {
      path: '/home',
      component: <ServicesPage />,
    },
  ];

  return (
    <Switch>
      {routes.map((route) => (
        <PrivateRoute path={route.path}>{route.component}</PrivateRoute>
      ))}
    </Switch>
  );
};

export default RequestorPrivateRoute;
