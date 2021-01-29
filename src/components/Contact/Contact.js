import React, { Component } from 'react';
import Form from './Form/Form';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='contactContainer'>
        <section className='contact'>
          <div className='contactTitle'>
            <h1>Contact Me</h1>
            <p>Feel Free to Contact Me Any Time</p>
          </div>
          <div className='contactBox'>
            <div className='contactForm'>
              <Form />
            </div>
            <div className='contactInfoBox' id='contact'>
              <h2>Let's talk!</h2>
              <p>
                If you like my work, feel free to contact me. Below here are my
                contact no. and email. Let's talk about what you want and I'm
                ready to create it for you. Thank you.{' '}
              </p>
              <h4>Phone:</h4>
              <p>(805)-584-4857</p>
              <h4>Email:</h4>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='mailto:ryanshuken@me.com'
              >
                <p>ryanshuken@me.com</p>
              </a>

              <h4>GitHub:</h4>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.github.com/RShuken'
              >
                <p>Ryan's GitHub</p>
              </a>
              <h4>Linkedin:</h4>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/rshuken'
              >
                <p>Ryan's Linkedin</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
