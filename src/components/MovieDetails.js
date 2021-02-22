import React from 'react';
import './MovieDetails.css';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import VideoPlayer from 'react-video-js-player';

function MovieDetails (props) {
    const [movie, setMovie]=useState({});
    
    useEffect(() => {
        fetch('http://localhost:5000/api/movies/'+ props.match.params.movieId)
            .then(res => res.json())
            .then(
                (result) => {
                setMovie(result);
            });
    });
    const video = movie.video;

    return( 
            <div className="div1">
                <Card className="card">
                    <Card.Body>
                        <Card.Title className="cardTitle">Name: {movie.name}</Card.Title>
                        <Card.Text>Description: {movie.description}</Card.Text>
                        <Card.Text>Year: {movie.year}</Card.Text>
                        <Card.Text>Genre: {movie.genre}</Card.Text>
                        <br/>
                        <Card.Img className="movieImage" variant="top" src={"/images/" + movie.imageUrl} />
                        <br />
                        <VideoPlayer className="videoDiv" src={"/videos/" + movie.video} />
                    </Card.Body>
                </Card>
            </div>
    )
}
 
export default MovieDetails;
