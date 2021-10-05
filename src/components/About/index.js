import React from 'react';
import Card from 'react-bootstrap/Card';
import profilePic from '../../assets/images/ProfilePic.jpg'

function About() {
  return (
    <div className='row justify-content-evenly about-container'>
      <div className='col-8'>
        <Card className='about-card'>
          <h1 >About</h1>
          <Card.Img className='profile-pic' variant="top" src={profilePic} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content. Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      {/* <div className='col-7'>
        <Card className='skills-card'>
          <Card.Body>HTML</Card.Body>
        </Card>
        <Card className='skills-card'>
          <Card.Body>CSS</Card.Body>
        </Card>
        <Card className='skills-card'>
          <Card.Body>JavaScript</Card.Body>
        </Card>
        <Card className='skills-card'>
          <Card.Body>MongoDB</Card.Body>
        </Card>
        
      </div> */}
    </div>
  )
}

export default About;