import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login_form';
import Register from './components/Register_form';
import FrontPage from './components/Front_page';

import PrivateRouter from './PrivateRouter/PrivateRouter';
import Admin from './components/admin/Admin';
import PersonData from './components/admin/profile/PersonData';

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
                    <PrivateRouter exact path="/user/admin"  component = {Admin} />
                    <PrivateRouter exact path="/user/admin/person"  component = {PersonData} />
                </Switch>
        </React.Fragment>
    );
}

export default Routes;