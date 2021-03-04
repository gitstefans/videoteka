import React, {Component} from 'react';
import MovieCard from '../components/MovieCard';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';


class GenresClass extends Component {
    constructor(props) {
        super(props);
        this.state = {           
            movies: []
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:5000/api/movies/genres/'+ this.props.match.params.genre)
            .then(res => {
                const movies = res.data;
                this.setState({ movies })
                console.log(movies);
            }).
            catch(error => 
                console.log(error))
    }
    
    render() { 
        const movieGenres = this.state.movies.map((movie) =>{       
            return (
                <div>
                    <Col sm="3">
                        <a href={'/movies/movie/' + movie.movieId}  >
                            <MovieCard movie={movie} className="movie"/>
                        </a>
                    </Col>
                </div>
            )})
        return ( 
            <dvi>
                <Container fluid className="con">
                <Row>
                    {movieGenres}
                </Row>
                </Container>
            </dvi>
        )
    }
}

export default GenresClass;