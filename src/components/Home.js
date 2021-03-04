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
            movie : {},
            movieId: ""
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
    
    render() {          
        const movieCards = this.state.movies.map((movie) =>{       
            return (
                <div>
                    <Col sm="3">
                        <a className="movieLink" href={'/movies/movie/' + movie.movieId}  >
                            <MovieCard movie={movie} className="movie"/>
                        </a>
                    </Col>
                </div>
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
