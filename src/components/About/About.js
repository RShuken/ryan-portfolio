import React, { Component } from 'react';
import './About.css';
import maskImage from '../../images/mask1.png';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='aboutWrapper'>
        <div className='titleBox' id='about'>
          <h1>About</h1>
          <div className='designBox'>
            <div className='design1'></div>
            <div className='design2'></div>
            <div className='design1'></div>
            <div className='design2'></div>
            <div className='design1'></div>
            <div className='design2'></div>
          </div>
        </div>
        <div className='introBox'>
          <p>
            I'm an ex-venture capitalist turned coder, following my love of
            coding. I grew up in the US, but I've spent half of my life living
            in Shanghai, China. I have always loved coding since I was 12. I was
            caught up building startups for many years, then jumped into venture
            capital for the last 10 years. Now I'm on a mission to design my own
            future with coding. I've seen the incredible progress made through
            the hard work of developers bringing ideas into reality and I want
            to learn how to join the ranks of developers and work my way up to
            building AIs.
          </p>
        </div>
        <div className='imageContainer'>
          <img src={maskImage} alt='coffeeImage'></img>
        </div>
        <div className='introBox'>
          <p>
            You can find me playing music or home-brewing beer most weekends. I
            am constantly starting/finishing a new coding project at home and I
            love the science behind everything as I strive to always be
            learning. I am passionate about helping other people and love
            teaching.
          </p>
          <h4 className='signature'>Ryan Shuken</h4>
        </div>
      </div>
    );
  }
}

export default About;
