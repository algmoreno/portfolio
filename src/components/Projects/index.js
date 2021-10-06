import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import profilePic from '../../assets/images/ProfilePic.jpg'

function Projects() {
  return (
    <div className='row justify-content-evenly projects-container'>
      <h2>Portfolio</h2>
      <div className='col-4 projects-col'>
        <Card className='project-card pet-shop-card'>

        </Card>
        <Card className='project-card codequiz-card'>
          
        </Card>
      </div>
      
      <div className='col-4 projects-col'>
      <Card className='project-card congo-card'>
          <Card.Body>
            
          </Card.Body>
        </Card>
        <Card className='project-card blogspot-card'>
          <Card.Body>
            
          </Card.Body>
        </Card>
      </div>

      <div className='col-4 projects-col'>
      <Card className='project-card weatherview-card'>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>

            </Card.Text>

          </Card.Body>
        </Card>
        <Card className='project-card jukebox-card'>

          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>

            </Card.Text>

          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Projects;