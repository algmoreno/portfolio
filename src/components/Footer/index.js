import React from 'react';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi';

function Footer() {
  return (
    <>
  <Navbar className ='footer' fixed='bottom' variant="dark">
    <Container>
    <Nav className="">
      <Nav.Link className='footer-logos' href="https://github.com/algmoreno" target="_blank"><BsGithub  size={35}/></Nav.Link>
      <Nav.Link className='footer-logos' href="#https://www.linkedin.com/in/alan-moreno-b46907126/" target="_blank"><BsLinkedin size={35}/></Nav.Link>
      <Nav.Link className='footer-logos' href="mailto:alg.moreno00@gmail.com" target="_blank"><HiOutlineMail size={40}/></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}

export default Footer;