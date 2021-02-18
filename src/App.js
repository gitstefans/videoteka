import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
//import MovieList from './components/MovieList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />      
        <Switch>
            <Route path="/Serije" component={MovieDetails}>
                <MovieDetails/>
            </Route>
            <Route path="/" component={Home}>
                <Home/>
            </Route>
        </Switch>
    </Router> 
    </div>
  );
}

export default App;
