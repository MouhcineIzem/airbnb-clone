import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from "./Home";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
