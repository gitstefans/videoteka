import React, {Component} from 'react';
import './Home.css';
import MovieCard from '../components/MovieCard';
//import MovieList from '../components/MovieList';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';  


class Home extends Component {
    constructor(){
        super();
        this.state = {
            movies: []
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
        let movieCards = this.state.movies.map(movie =>{
            return (
                <Col sm="3">
                    <MovieCard movie={movie}  className="movie"/>
                </Col>
            )
        })
        return ( 
            <Container fluid className="con">
                <Row>
                    {movieCards}
                </Row>
            </Container>
         );
    }
}
 
export default Home;
