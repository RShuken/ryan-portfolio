import React, { Component } from 'react';
import styles from './About.module.scss';
import headshot from '../../images/ryanheadshot.png';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className={styles.aboutSection} id='about'>
        <h1>About</h1>
        <div className={styles.aboutContainer}>
          <img src={headshot} alt='headshot' />
          <div className={styles.blurb}>
            <p>
              I'm a Full-stack developer with a strong understanding of how to
              bring ideas to production. I've been part of teams and startups that have gone
              from ideation to product development and delivered products to
              over 400 million users globally.
            </p>
            <br/>
            <p>
              I have a customer-first approach with strong interpersonal and
              presentation skills, and a high degree of integrity. I enjoy
              cross-disciplinary development, connecting business needs and
              goals, with customer preferences and user-first design to ship
              products that people love. I use design thinking processes to
              better connect what people say, with what they need. I enjoy the
              balance of qualitative vs quantitative decision making and a good
              challenge.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
