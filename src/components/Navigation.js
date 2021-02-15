import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import { BrowserRouter as Router, Link} from "react-router-dom";


const Navigation = () =>{
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#sads">Videoteka</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="http//localhost:5000/api/movies">Pocetna</Nav.Link>
      <Nav.Link href="/api/movies">Filmovi</Nav.Link>
      <Nav.Link href="employees">Serije</Nav.Link>
      <Nav.Link href="assadasd">asdasdas</Nav.Link>
      <NavDropdown title="Zanrovi" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Akcioni</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Animirani</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Avantura</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Komedija</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Drama</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Romantika</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navigation;