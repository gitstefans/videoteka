import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import './MovieCard.css';

class MovieCard extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div className="div1">
                <Card className="carddiv">
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Img className="imagediv" variant="top" src={"./images/" + this.props.movie.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.movie.name}</Card.Title>
                        <Card.Text>{this.props.movie.year}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
         );
    }
}

export default MovieCard
