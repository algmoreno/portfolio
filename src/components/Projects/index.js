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
          <Button className='view-btn' target='blank' href='https://github.com/bobswiftfoot/pet-shop'>GitHub</Button>
          <Button className='view-btn' target='blank' href='https://codefellas-pet-shop.herokuapp.com/'>View App</Button>
        </Card>
        <Card className='project-card codequiz-card'>
        <Button className='view-btn' target='blank' href='https://github.com/algmoreno/codequiz'>GitHub</Button>
        <Button className='view-btn' target='blank' href='https://algmoreno.github.io/codequiz'>View App</Button>
        </Card>
      </div>
      
      <div className='col-4 projects-col'>
      <Card className='project-card congo-card'>
          <Button className='view-btn' target='blank' href='https://github.com/algmoreno/Project-2'>GitHub</Button>
          <Button className='view-btn' href='https://congomedia.herokuapp.com'>View App</Button>
        </Card>
        <Card className='project-card blogspot-card'>
          <Button className='view-btn' target='blank' href='https://github.com/algmoreno/blogspot'>GitHub</Button>
          <Button className='view-btn' target='blank' href='https://blogpostspot.herokuapp.com'>View App</Button>
        </Card>
      </div>

      <div className='col-4 projects-col'>
        <Card className='project-card weatherview-card'>
          <Button className='view-btn' target='blank' href='https://github.com/algmoreno/weatherview'>GitHub</Button>
          <Button className='view-btn' target='blank' href='https://algmoreno.github.io/weatherview'>View App</Button>
        </Card>
        <Card className='project-card jukebox-card'>
          <Button className='view-btn' target='blank' href='https://github.com/algmoreno/arm'>GitHub</Button>
          <Button className='view-btn' target='blank' href='https://algmoreno.github.io/arm/'>View App</Button>
        </Card>
      </div>
    </div>
  )
}

export default Projects;