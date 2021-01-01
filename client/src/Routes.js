import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login_form';
import Register from './components/Register_form';
import FrontPage from './components/Front_page';

import PrivateRouter from './PrivateRouter/PrivateRouter';
import Admin from './components/admin/admin_page/Admin';
import PersonData from './components/admin/profile/PersonData';
import AdminNumbers from './components/admin/admin_page/admin_page_components/Numbers/AdminNumbers';
import AdminEmt from './components/admin/admin_page/admin_page_components/AdminEmt';
import AdminCards from './components/admin/admin_page/admin_page_components/AdminCards';

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
                    <PrivateRouter exact path="/user/admin/numbers"  component = {AdminNumbers} />
                    <PrivateRouter exact path="/user/admin/cards"  component = {AdminCards} />
                    <PrivateRouter exact path="/user/admin/empty"  component = {AdminEmt} />
                </Switch>
        </React.Fragment>
    );
}

export default Routes;