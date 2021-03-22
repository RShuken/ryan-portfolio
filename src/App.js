import './App.scss';
import colors from './styles/_color.module.scss';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import Landing from './components/Landing/Landing.js';

function App() {
  return (
    <div className='App'>
        <Landing />
        <About />
        <Projects />
        <Contact />
      <Footer />
    </div>
  );
}

export default App;