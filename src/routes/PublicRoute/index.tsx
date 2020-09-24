import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Public } from '../../components/Layout';

const PublicRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  return (
    <Route {...rest}>
      <Public>{children}</Public>
    </Route>
  );
};

export default PublicRoute;
