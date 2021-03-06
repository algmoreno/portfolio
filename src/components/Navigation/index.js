import React from 'react';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function Navigation() {
  return (
    <>
  <Navbar className='navigation' fixed='top' variant="dark">
    <Container >
    <Navbar.Brand className='navigation-brand' href="/">Alan Moreno</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}

export default Navigation;