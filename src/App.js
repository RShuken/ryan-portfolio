import './App.css';
import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import Landing from './components/Landing/Landing.js';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <Landing />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
