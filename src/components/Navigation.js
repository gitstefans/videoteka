import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
//import { BrowserRouter as Router, Link, NavLink} from "react-router-dom";
import {Link} from "react-router-dom";


const Navigation = () =>{
    return(
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Videoteka</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Pocetna</Nav.Link>
                <Nav.Link href="/api/movies">Filmovi</Nav.Link>
                <Link to="/api/series">
                <Nav.Link href="/#">Serije</Nav.Link>
                </Link>
                <NavDropdown title="Zanrovi" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/movies/genres/action">Akcioni</NavDropdown.Item>
                <NavDropdown.Item href="/movies/genres/animation">Animirani</NavDropdown.Item>
                <NavDropdown.Item href="/movies/genres/adventure">Avantura</NavDropdown.Item>
                <NavDropdown.Item href="/movies/genres/Comedy">Komedija</NavDropdown.Item>
                <NavDropdown.Item href="/movies/genres/Drama">Drama</NavDropdown.Item>
                <NavDropdown.Item href="/movies/genres/romance">Romantika</NavDropdown.Item>
                <NavDropdown.Item href="/movies/genres/crime">Krimi</NavDropdown.Item>
                <NavDropdown.Item href="/movies/genres/mistery">Misterija</NavDropdown.Item>
                <NavDropdown.Item href="/movies/genres/horror">Horor</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signUp">Sign Up</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>  
        </div>
    )
}

export default Navigation;