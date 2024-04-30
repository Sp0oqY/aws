import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
class App extends Component {
  render() {
    return (
      // <div className="App">
      //   
      //   <Greet name="Bruce" heroName="Batman"></Greet>
      // </div>

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>

        
      </div>
    )
  }
}

export default App;
