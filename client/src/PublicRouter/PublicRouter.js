import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRouter = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />
      }
    />
  );
};
export default PublicRouter;