import React, { Component } from 'react';
import styles from './Landing.module.scss';
import Header from '../Header/Header';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // landing page that contains the header and landing image
  render() {
    return (
      <section className={styles.landing}>
        <Header />
        <div className={styles.blurbContainer}>
          <h2>{"{A}lways"}</h2>
          <h2>{"//Be"}</h2>
          <h2>{"@Coding"}</h2>
        </div>
      </section>
    );
  }
}

export default Landing;
