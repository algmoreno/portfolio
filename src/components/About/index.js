import React from 'react';
import Card from 'react-bootstrap/Card';
import profilePic from '../../assets/images/ProfilePic.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai';

function About() {
  return (
    <div id='about' className='row justify-content-evenly about-container'>
      <div className='col-8'>
        <Card className='about-card'>
          <h2 >About</h2>
          <Card.Img className='profile-pic' variant="top" src={profilePic} />
          <Card.Body>
            <Card.Text>
              I'm a full-stack web developer from Tucson, AZ with a bachelor's degree in business management. I plan to 
              continue my career in web development because I love the combination of problem solving and creativity it involves.
            </Card.Text>
          <a href='https://docs.google.com/document/d/1IQVP6CRHNe1_5iL9m8HfmQVs2Yg6G0i777GyTrVldPg/edit?usp=sharing' target='blank' >Resume <AiOutlineArrowRight /></a>
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