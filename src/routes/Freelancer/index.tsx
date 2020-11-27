import React from 'react';
import { Switch } from 'react-router-dom';
import ServicesPage from '../../pages/Freelancer/Services';
import PrivateRoute from './PrivateRoute';

type RoutesRequestor = {
  path: string;
  component: React.ReactNode;
}[];

const FreelancerPrivateRoute: React.FC = () => {
  const routes: RoutesRequestor = [
    {
      path: '/home',
      component: <ServicesPage />,
    },
  ];

  return (
    <Switch>
      {routes.map((route) => (
        <PrivateRoute key={route.path} path={route.path}>
          {route.component}
        </PrivateRoute>
      ))}
    </Switch>
  );
};

export default FreelancerPrivateRoute;
