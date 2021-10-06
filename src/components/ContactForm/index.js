import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import profilePic from '../../assets/images/ProfilePic.jpg'

function Contact() {
  return (
    <div className='row justify-content-evenly contact-form'>
      <h2>Contact</h2>
      <div className='col-2 projects-col'>
      
      </div>
      <div className='col-6'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="password" placeholder="Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Message</Form.Label>
    <Form.Control type="password" placeholder="Leave a message" />
  </Form.Group>
  <Button className='submit-btn' variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </div>
      <div className='col-2'>
      
      </div>
    </div>
  )
}

export default Contact;