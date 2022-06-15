import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Homepage/Homepage'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
} from "react-router-dom";
import Work from './Pages/Work/Work';
import Contact from './Pages/Contact/Contact';
import { useHistory } from "react-router-dom";
function App() {
  return (
    <div className="App" >
      {/* Navbar */}
      <Navbar/>
      {/* Routes */}
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/work">
            <Work/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/" >
            <Redirect to="/home" /> 
          </Route>
        </Switch>
      </Router>
      {/* Test to see the scroll */}
    </div>
  );
}

export default App;
