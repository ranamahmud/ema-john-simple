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
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
            <Header></Header>

      <Router>
        <Switch>
          <Route exact path="/shop">    <Shop></Shop>
          </Route>

          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>

        </Switch>

        <Route path="/">    <Shop></Shop>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
      </Router>
    </div>
  );
}

export default App;