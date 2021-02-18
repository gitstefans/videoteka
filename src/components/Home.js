import React, {Component} from 'react';
import './Home.css';
import MovieCard from '../components/MovieCard';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import MovieDetails from './MovieDetails';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



class Home extends Component {
    constructor(){
        super();
        this.state = {
            movies: [],
            movie : ''
        }
    }

    componentDidMount()
    {
        axios.get('http://localhost:5000/api/movies')
            .then(res => {
                const movies = res.data;
                this.setState({ movies })
            }).
            catch(error => 
                console.log(error))
    }

    handleClick = value => event =>
    {
        var movie = value;
        this.setState({ movie });
        console.log(movie);
        <MovieDetails movieDetails={movie}/> 
    }

    render() {
        let movieCards = this.state.movies.map((movie) =>{
            return (
                <Col sm="3">
                    <Link to="/serije" key={movie} onClick={this.handleClick(movie)}>             
                    <MovieCard movie={movie} className="movie"/>
                    </Link>
                </Col>     
            )
        })
               
        return (
            <div>
            <Container fluid className="con">
                <Row>
                    {movieCards}
                </Row>
            </Container>
            </div>
         );
    }
}
 
export default Home;
