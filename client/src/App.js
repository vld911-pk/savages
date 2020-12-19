
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Routes from './Routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
      return (
            <React.Fragment>
                  <Router>
                        <NavBar />
                        <Routes />
                        <Footer />
                  </Router>
            </React.Fragment>
      )
}

export default App;
