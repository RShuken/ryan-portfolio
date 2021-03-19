import React, { Component } from 'react';
import './Projects.css';
import okla from '../../images/ok-la.png';
import petful from '../../images/petful.png';
import spacedR from '../../images/spacedR.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='projectsWrapper'>
        <section className='projects'>
          <div className='projectsTitle' id='projects'>
            <h1>Projects</h1>
          </div>
          <div className='projectContainer-left'>
            <div className='imageBox'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://ok-la-client.vercel.app/'
              >
                <img src={okla} alt='Ok Language Learning' />
              </a>
            </div>
            <div className='projectInfoBox'>
              <h1>Ok Language Learning</h1>
              <h2>
                React, JavaScript, JWT, PostgreSQL, NodeJS, Express, HTML, CSS
                and custom data structures{' '}
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/RShuken/ok-la-client'
                >
                  GitHub
                </a>
              </h2>
              <p>
                A language learning flashcard sharing platform. Flashcards are
                built on a spaced repetition custom data structure which
                improves the retention and ability to learn almost anything.
                Create flashcard decks or add community decks to start learning
                any language. Social, educational, and fun!
              </p>
              <p>Hello Life!</p>
            </div>
          </div>
          <div className='projectContainer-right'>
            <div className='imageBox'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://petful-client-template-lake.vercel.app/'
              >
                <img src={petful} alt='Petful Adoption' />
              </a>
            </div>
            <div className='projectInfoBox'>
              <h1>Petful Adoption</h1>
              <h2>
                React, JavaScript, JWT, PNodeJS, Express, HTML, CSS and Double
                Linked List data structure{' '}
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/RShuken/petful-client'
                >
                  GitHub
                </a>
              </h2>
              <p>
                Pet adoption platform showcasing a double linked list data
                structure managing an adoption list severed from an open-source
                API. Pets are added through the API into the linked list and
                users who want to adopt are added into a paired linked list that
                tracks which user adopts each pet and moves the head values
                forward for each data structure.
              </p>
            </div>
          </div>
          {/* <div className='projectContainer-left'>
            <div className='imageBox'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://spaced-repition-client.vercel.app/'
              >
                <img src={spacedR} alt='Spaced Repetition' />
              </a>
            </div>
            <div className='projectInfoBox'>
              <h1>Spaced Repetition Data Structure</h1>
              <h2>
                React, JavaScript, PostgreSQL, NodeJS, Express, HTML and Single
                Linked List data structure{' '}
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/RShuken/spaced-repition-client'
                >
                  GitHub
                </a>
              </h2>
              <p>
                This project illustrates how a linked list in the backend can be
                implemented through to the front end. The language flashcards
                are contained in a single linked list and as a user practices
                the flashcards their correct and incorrect count gets
                incremented along with the head value of the linked list.
              </p>
            </div>
          </div> */}
        </section>
      </div>
    );
  }
}

export default Projects;
