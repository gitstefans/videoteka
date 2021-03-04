import React from 'react';
import './MovieDetails.css';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import VideoPlayer from 'react-video-js-player';
//import Youtube from 'react-youtube';

function MovieDetails (props) {
    const [movie, setMovie]=useState({});
    
    useEffect(() => {
        fetch('http://localhost:5000/api/movies/movie/'+ props.match.params.movieId)
            .then(res => res.json())
            .then(
                (result) => {
                setMovie(result);
            });
    });
    //const videoUrl = movie.video;
    const videoUrl = '/videos/' + movie.video;
    //const video = '/videos/clouds.mp4';
    const video = videoUrl;

    return( 
            <div className="div1">
                <Card className="card">
                    <Card.Body>
                        <div className="divconfig"> 
                        <strong>
                        <div className="imageDiv">
                        <Card.Img className="movieImage" variant="top" src={"/images/" + movie.imageUrl} />
                        </div>
                        <div className="movieDescription">    
                        <Card.Text className="cardTitle">Name: {movie.name}</Card.Text>
                        <Card.Text>Actors: {movie.actors}</Card.Text>
                        <Card.Text>Description: {movie.description}</Card.Text>
                        <Card.Text>Year: {movie.year}</Card.Text>
                        <Card.Text>Genre: {movie.genre}</Card.Text>
                        </div>
                        </strong>
                        <VideoPlayer className="videoDiv" src={'/videos/'+movie.video} />
                        </div>
                        
                        
                        <br />
                        
                    </Card.Body>
                </Card>
            </div>
    )
}
 
export default MovieDetails;
