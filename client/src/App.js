import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Form from './components/Form';
import NavBar from './components/NavBar';

function App() {
  return (
   <Router >
     <NavBar />
        <Switch>
            <Route path="/login" exact>
                  <Form />
            </Route>
        </Switch>
   </Router>
  );
}

export default App;
