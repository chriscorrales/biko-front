import { Private } from "components/Layout";
import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const isAuthenticated = true;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <Private>{children}</Private>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
