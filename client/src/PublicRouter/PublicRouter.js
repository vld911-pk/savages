import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
//import { selectUserToken } from '../../selectors/userDataSelector';

const PublicRouter = () =>{
    <Route
    {...rest}
    render={(props) => (!token ? <Component { ...props } />
      : <Redirect to={{ pathname: '/'}} />)}
  />
}