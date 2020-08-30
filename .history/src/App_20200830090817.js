import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/shop">    <Shop></Shop>
          </Route>

          <Route path="shop"></Route>
          <Route path="shop"></Route>

        </Switch>
      </Router>
      <Header></Header>
    </div>
  );
}

export default App;
