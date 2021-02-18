import React, { Component } from 'react';
import './MovieDetails.css';

class MovieDetails extends Component {
    constructor(props){
        super(props);
        }
    
    
    render() {
        return ( 
            <div className="div1">
                <div>
                    <br/>
                <strong><h3>{this.props.movie.name}</h3></strong>
                <strong>Description:</strong>"Young musician Zach Sobiech discovers his cancer has spread,  leaving him just a few months<br/>
                 to live. With limited time, he follows his dream and makes an album, unaware <br/>
                  that it will soon be a viral music phenomenon. "
                </div>
                <br/>
                <img className="imageDiv" src={"./images/clouds.jpg"}/>
                <div>
                    
                </div>
            </div>
         );
    }
}
 
export default MovieDetails;
