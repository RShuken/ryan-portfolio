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
      <div className='landingWrapper'>
        <section className='landing'>
          <div className='wordsTextBox'>
            <div className='designBox1'></div>
            <div className='designBox2'></div>
            <h1>Hello I'm Ryan Shuken</h1>
            <img src={headShot} alt='headshot' className="headshot_image" />
          </div>
          <h1 className='workTitle'>Full Stack Developer</h1>
        </section>
      </div>
    );
  }
}

export default Landing;
