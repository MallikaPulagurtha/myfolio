import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
// import Navbar from './navbar'
import Welcome from './welcome';



function App() {

  return (
    <>
      <Router>
        {/* <Navbar></Navbar> */}
        <Switch>
          <Route path="/" exact="true"><Welcome /></Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
