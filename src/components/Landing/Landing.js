import React, { Component } from 'react';
import headShot from '../../images/ryanheadshot.png';
import './Landing.css';
import Header from '../Header/Header'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className='landing'>
        <Header/>
        </section>
    );
  }
}

export default Landing;
