import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderHeaderNav() {
    return (
      <header>
        <div className='navHeaderContainer'>
          <nav>
            <ul>
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
                <a href='#about'>about</a>
              </li>
              <li>
                <a href='#projects'>projects</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

  render() {
    return <>{this.renderHeaderNav()}</>;
  }
}

export default Header;
