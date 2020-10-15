import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login_form';
import Register from './components/Register_form';
import Front_page from './components/Front_page';

function App() {
  return (
   <Router >
     <NavBar />
        <Switch>
            <Route path="/" exact>
                  <Front_page />
            </Route>
            <Route path="/login" exact>
                  <Login />
            </Route>
            <Route path="/register" exact>
                  <Register />
            </Route>
        </Switch>
   </Router>
  );
}

export default App;
