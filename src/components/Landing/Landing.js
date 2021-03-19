import React, { Component } from 'react';
import headShot from '../../images/ryanheadshot.png';
import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <section className='landing'>
          <div className='wordsTextBox'>
            <img src={headShot} alt='headshot' className='headshot_image' />
          </div>
          <h1 className='workTitle'>Full Stack Developer</h1>
        </section>
    );
  }
}

export default Landing;
