import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import profilePic from '../../assets/images/ProfilePic.jpg'

function Contact() {
  return (
    <div className='row justify-content-evenly projects-container'>
      <h1>Contact</h1>
      <div className='col-2 projects-col'>
      
      </div>
      <div className='col-6'>
      <Card className='project-card'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className='col-2'>
      
      </div>
    </div>
  )
}

export default Contact;