import React, { Component } from 'react';
import styles from './Header.module.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  scroll(string) {
    let targetElement = document.getElementById(string);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  renderHeaderNav() {
    return (
      // Header and Navigation Menu
      <header>
        <section className={styles.nav}>
          <div className={styles.name}>Ryan Shuken</div>

          <div className={styles.navigationList}>
            <ul>
              <li>
                <a onClick={() => this.scroll('contact')}>
                  <i className='fas fa-paper-plane'></i>
                  <span>contact</span>
                </a>
              </li>
              <li>
                <a onClick={() => this.scroll('about')}>
                  <i className='fas fa-user-circle'></i>
                  <span>about</span>
                </a>
              </li>
              <li>
                <a onClick={() => this.scroll('projects')}>
                  <i className='fas fa-briefcase'></i>
                  <span>projects</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </header>
    );
  }

  render() {
    return <>{this.renderHeaderNav()}</>;
  }
}

export default Header;
