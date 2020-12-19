import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login_form';
import Register from './components/Register_form';
import FrontPage from './components/Front_page';
import Admin from './components/Admin';

const Routes = () => {

    return (
        <React.Fragment> 
                <Switch>
                    <Route path="/" exact>
                        <FrontPage />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/register" exact>
                        <Register />
                    </Route>
                    <Route path="/user/admin" exact>
                        <Admin />
                    </Route>
                </Switch>
        </React.Fragment>
    );
}

export default Routes;