import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  useEffect( () => {}, [])
  return (
    <>
      <Navbar/>
      <Router >
      <div className='bg-secondary text-white text-center p-3' style={{margintop:'300px',}}>
            <div style={{margintop:'300px',}}>
              <Navbar/>
              <h1>Welcome to my Portfolio</h1>
            <p className='pt-3'>Fullstack Developer | React.js | Springboot | SQL</p>
            </div>

          <div id='home'>
              <Home/>
          </div>
          <div id='about'>
              <About/>
          </div>
          <div id='skills'>
              <Skills/>
          </div>
          <div id='work'>
              <Works/>
          </div>
          <div id='contact'>
              <Contact/>
          </div>
      </div>
    </Router>
    </>
   

  );
}

export default App;
