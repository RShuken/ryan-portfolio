import React, { Component } from 'react';
import styles from './Footer.module.scss'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
        <div className={styles.footerContainer}><p>Copyright: 2021</p></div>
      </footer>
    );
  }
}

export default Footer;
