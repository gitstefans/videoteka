import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
//import MovieList from './components/MovieList';


function App() {
  return (
    <div className="App">
        <Navigation />
        <Home /> 
    </div>
  );
}

export default App;
