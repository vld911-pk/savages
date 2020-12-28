import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouter = ({component: Component, ...rest }) => {
  let token = localStorage.getItem('accessToken') || null;
  
    return (
        <Route
          {...rest}
          render={(props) => (!!token ? <Component {...props} />
            : <Redirect to={{ pathname: '/login'}} />)}
        />
      );
}
export default PrivateRouter;