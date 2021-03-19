import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  scroll() {
    let targetElement = document.getElementById('about');
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
        <section className='nav'>
          <div className='name'>Ryan Shuken</div>

          <div className='navigationList'>
            <ul>
              <li>
                <a href='#contact'>
                  <i className='fas fa-paper-plane'></i>
                  <span>contact</span>
                </a>
              </li>
              <li>
                <a onClick={() => this.scroll()}>
                  <i className='fas fa-user-circle'></i>
                  <span>about</span>
                </a>
              </li>
              <li>
                <a href='#projects'>
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
