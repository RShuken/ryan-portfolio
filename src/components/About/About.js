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
        <div className='titleBox'>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
            nulla pellentesque dignissim enim sit amet. Ultrices eros in cursus
            turpis massa tincidunt dui ut. Blandit massa enim nec dui nunc. Mi
            quis hendrerit dolor magna eget est lorem. In tellus integer feugiat
            scelerisque varius morbi. Sit amet mattis vulputate enim nulla
            aliquet porttitor lacus luctus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Orci nulla pellentesque dignissim
            enim sit amet. Ultrices eros in cursus turpis massa tincidunt dui
            ut. Blandit massa enim nec dui nunc. Mi quis hendrerit dolor magna
            eget est lorem. In tellus integer feugiat scelerisque varius morbi.
            Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus.
          </p>
        </div>
        <div className='imageContainer'>
          <img src={maskImage} alt='coffeeImage'></img>
        </div>
        <div className='introBox'>
          <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
                    nulla pellentesque dignissim enim sit amet. Ultrices eros in cursus
                    turpis massa tincidunt dui ut. Blandit massa enim nec dui nunc. Mi
                    quis hendrerit dolor magna eget est lorem. In tellus integer 
          </p>
                <h4 className='signature'>Ryan Shuken</h4>
        </div>
      </div>
    );
  }
}

export default About;
