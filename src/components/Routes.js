import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import Home from './Home';

function Routing(){
    return(
    <Router>
        <Switch>
            <Route path="/MovieDetails" component={MovieDetails}>
                <MovieDetails/>
            </Route>
            <Route path="/" component={Home}>
                <Home/>
            </Route>
        </Switch>
    </Router> 
    )
}

export default Routing;