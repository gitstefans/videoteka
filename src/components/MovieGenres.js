import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import { useParams } from 'react-router-dom';

export default class MovieGenres extends React.Component{

    constructor(props){
        super(props);
        this.state = {           
            movies: [],
            genre: ""
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:5000/api/movies')
            .then(res => {
                const movies = res.data;
                this.setState({ movies })
                console.log(movies);
            }).
            catch(error => 
                console.log(error))
    }    
    render()
        {
        const movieGenres = this.state.movies.filter(movie=> movie.genre === "Comedy");
        const mg = movieGenres.map((movieByGenres) =>{
                return(
                    <div>
                        <Col sm="3">
                        <a href={'/movies/movie/' + movieByGenres.movieId}>
                        <MovieCard movie={movieByGenres} className="movie"/>
                        </a>
                        </Col>
                    </div>
                    )})      
        return(
            <div>
                <Container fluid className="con">
                    <Row>
                        {mg}
                    </Row>
                </Container>
            </div>
        )
    }
}