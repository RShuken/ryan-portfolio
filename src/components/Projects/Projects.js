import React, { Component } from 'react';
import './Projects.css';
import projectImg1 from '../../images/headshot.JPG';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='projectsWrapper'>
        <div className='projectsTitle'>
          <h1>Projects</h1>
        </div>
        <div className='projectContainer-left'>
          <div className='imageBox'>
            <img src={projectImg1} alt='alt' />
          </div>
          <div className='projectInfoBox'>
            <h1>Ok Language Learning</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-
            </p>
          </div>
        </div>
        <div className='projectContainer-right'>
          <div className='imageBox'>
            <img src={projectImg1} alt='alt' />
          </div>
          <div className='projectInfoBox'>
            <h1>Ok Language Learning</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-
            </p>
          </div>
        </div>
        <div className='projectContainer-left'>
          <div className='imageBox'>
            <img src={projectImg1} alt='alt' />
          </div>
          <div className='projectInfoBox'>
            <h1>Ok Language Learning</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
