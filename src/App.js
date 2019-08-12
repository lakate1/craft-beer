import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import BeersList from "./components/beers-list.component";
import EditBeers from "./components/edit-beers.component";
import CreateBeers from "./components/create-beers.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
        <br/>
        <Route path="/" exact component={BeersList} />
        <Route path="/edit/:id" component={EditBeers} />
        <Route path="/create" component={CreateBeers} />
        <Route path="/user" component={CreateUser} />
        </div>
    </Router>
    
  );
}

export default App;
