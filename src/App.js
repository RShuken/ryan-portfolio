import './App.css';
import Header from './Header/Header.js';
import About from './About/About.js';
import Projects from './Projects/Projects.js'
import Contact from './Contact/Contact.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div className="App-wrapper">
      <header className="App-header">
        <Header/>
      </header>
      <main className="App-main">
        <About />
        <Projects />
        <Contact/>
      </main>
      <footer className="App-footer">
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
