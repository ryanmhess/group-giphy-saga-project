import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchPage from '../SearchPage/SearchPage';
import FavPage from '../FavPage/FavPage'
import { HashRouter as Router, Route } from 'react-router-dom';


function App(props) {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/">
          <SearchPage />
        </Route>
        <Route exact path="/favpage">
          <FavPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
