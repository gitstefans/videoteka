import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Routes from './components/Routes';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
//import MovieList from './components/MovieList';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
///import Genres from './components/Genres';
import MovieGenres from './components/MovieGenres';
//import Zanr from './components/Zanr';
//import Zanrovi from './components/Zanrovi';
import GenresClass from './components/GenresClass';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
       <Router>
        <Navigation />
        <Switch>
            <Route path="/movies/genres/:genre" component={GenresClass}>
            </Route>
            <Route path="/movies/movie/:movieId" component={MovieDetails}>
            </Route>
            <Route path="/login" component={Login}>
            </Route>
            <Route path="/signUp" component={SignUp}></Route>
            <Route path="/" component={Home}>
            </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
